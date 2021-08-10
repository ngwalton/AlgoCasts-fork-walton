from math import floor


# bubble sort
def bubble_sort(unsorted):
    result = unsorted[:]

    for i in range(len(result)-1):
        for j in range(len(result)-i-1):
            if result[j] > result[j+1]:
                [result[j], result[j+1]] = [result[j+1], result[j]]

    return result


# merge sort
def merge(left, right):
    result = []

    while left and right:
        if left[0] < right[0]:
            result.append(left.pop(0))
        else:
            result.append(right.pop(0))

    result.extend(left)
    result.extend(right)

    return result


def merge_sort(unsorted):
    if len(unsorted) == 1:
        return unsorted

    center = floor(len(unsorted) / 2)
    left = unsorted[:center]
    right = unsorted[center:]

    return merge(merge_sort(left), merge_sort(right))
