from math import floor
from typing import List


# bubble sort
def bubble_sort(unsorted: List[int]) -> List[int]:
    result = unsorted.copy()

    for i in range(len(result)-1):
        for j in range(len(result)-i-1):
            if result[j] > result[j+1]:
                [result[j], result[j+1]] = [result[j+1], result[j]]

    return result


# merge sort
def merge(left: List[int], right: List[int]) -> List[int]:
    result = []

    while left and right:
        if left[0] < right[0]:
            result.append(left.pop(0))
        else:
            result.append(right.pop(0))

    result.extend(left)
    result.extend(right)

    return result


def merge_sort(unsorted: List[int]) -> List[int]:
    if len(unsorted) == 1:
        return unsorted

    center = floor(len(unsorted) / 2)
    left = unsorted[:center]
    right = unsorted[center:]

    return merge(merge_sort(left), merge_sort(right))


# select sort
def select_sort(unsorted: List[int]) -> List[int]:
    result = unsorted.copy()

    for i in range(len(result)):
        min_index = i

        for j in range(i+1, len(result)):
            if result[j] < result[min_index]:
                min_index = j

        if i != min_index:
            result[i], result[min_index] = result[min_index], result[i]

    return result
