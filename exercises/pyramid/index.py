from typing import List
from math import floor


# recursive version
# def pyramid(n: int, result: List[str] = None) -> List[str]:
#     result = result or [""]
#     width = n * 2 - 1
#     mid_point = floor(width / 2)
#     row = len(result) - 1
#     left = mid_point - row
#     right = mid_point + row
#     col = len(result[-1])

#     if row == n:
#         return result[:-1]

#     if len(result[-1]) == width:
#         result.append("")
#         return pyramid(n, result)

#     isHash = col >= left and col <= right
#     result[-1] += "#" if isHash else " "

#     return pyramid(n, result)


# loop version
def pyramid(n: int) -> List[str]:
    result = []
    width = n * 2 - 1
    mid_point = floor(width / 2)

    for row in range(n):
        level = ""

        for col in range(width):
            left = mid_point - row
            right = mid_point + row
            isHash = col >= left and col <= right
            level += "#" if isHash else " "

        result.append(level)

    return result
