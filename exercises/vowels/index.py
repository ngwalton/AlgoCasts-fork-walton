"""
Function to count and return the number of vowels in a string.
"""


import re


def vowels(string: str) -> int:
    vowel_list = re.findall(r"[aeiou]", string, re.IGNORECASE)
    return len(vowel_list)
