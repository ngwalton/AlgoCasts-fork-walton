"""
Function to find and return the most frequent character in a string.
"""


def max_char(string: str) -> str:
    count = {}
    maxchar = ""
    maxchar_n = 0

    for char in string:
        count[char] = count[char] + 1 if char in count else 1

    for char, val in count.items():
        if maxchar_n < val:
            maxchar, maxchar_n = char, val

    return maxchar
