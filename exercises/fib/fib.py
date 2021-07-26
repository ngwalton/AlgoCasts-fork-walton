# from typing import Callable
import functools


@functools.cache
def fib(n: int) -> int:
    if n < 1:
        return 0
    elif n == 1:
        return 1

    return fib(n-1) + fib(n-2)


# hand written memoization
# def memoise(fn: Callable) -> Callable[[int], int]:
#     cache = {}

#     def fn_out(*args):
#         if args not in cache:
#             cache[args] = fn(*args)

#         return cache[args]

#     return fn_out


# fib = memoise(fib)

# iterative
# def fib(n: int) -> int:
#     if n < 1:
#         return 0
#     elif n == 1:
#         return 1

#     result = [0, 1]

#     for _ in range(2, n+1):
#         result.append(result[-2] + result[-1])

#     return(result[-1])
