from typing import List, Union


# single loop
def steps(n: int) -> List[str]:
    result = []

    for row in range(1, n + 1):
        step = ("#" * row) + (" " * (n - row))
        result.append(step)

    return result

# recursive
# def steps(n: int, result: Union[None, List[str]] = None) -> List[str]:
#     result = result or [""]
#     row = len(result) - 1
#     col = len(result[-1])

#     if (len(result) > n):
#         return result[:-1]

#     if (len(result[-1]) == n):
#         result.append("")
#         return steps(n, result)

#     is_step = col <= row
#     result[-1] += "#" if is_step else " "
#     return steps(n, result)

# double loop
# def steps(n: int) -> List[str]:
#     result = []

#     for row in range(n):
#         step = ""

#         for col in range(n):
#             is_step = col <= row
#             step += "#" if is_step else " "

#         result.append(step)

#     return result
