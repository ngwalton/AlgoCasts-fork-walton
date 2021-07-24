import functools


@functools.cache
def fib(n):
    if (n < 2):
        return n

    return fib(n-2) + fib(n-1)

# hand written memoization
# def memoize(fn):
#     cache = {}

#     def fnOut(*args):
#         if args not in cache:
#             cache[args] = fn(*args)

#         return cache[args]

#     return fnOut

# fib = memoize(fib)

# iterative
# def fib(n):
#     if n < 2:
#         return n

#     result = [0, 1]

#     for i in range(2, n+1):
#         result.append(result[-2] + result[-1])

#     return(result[-1])
