"""
Function to test if two strings are anagrams of eachother
"""

import re


def anagrams(str1: str, str2: str) -> bool:
    def clean(string):
        string = re.sub(r"[^\w]", "", string.lower())
        return "".join(sorted(string))

    return clean(str1) == clean(str2)
