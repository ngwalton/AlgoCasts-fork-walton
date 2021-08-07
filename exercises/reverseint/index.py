"""
Function to reverse the order of digits in a number while maintaining its
sign.
"""


def reverse_int(n: int) -> int:
    sign = 1 if n >= 0 else -1
    positive_int = n * sign
    rev = str(positive_int)[::-1]
    return int(rev) * sign
