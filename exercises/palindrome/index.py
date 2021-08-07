from math import floor


# pythonic way -- O(N)
def palindrome(s: str) -> bool:
    return s == s[::-1]


# brute force reverse -- O(N)
# def palindrome(s):
#     rev = ""

#     for char in s:
#         rev = char + rev

#     return rev == s


# brute force and most efficient -- O(N)
# def palindrome(s: str) -> bool:
#     mid = floor(len(s) / 2)

#     for i in range(mid):
#         if s[i] != s[len(s) - 1 - i]:
#             return False

#     return True


# list comp -- O(N)
# def palindrome(s: str) -> bool:
#     mid = floor(len(s) / 2)
#     matched = [s[i] == s[-i - 1] for i in range(mid)]
#     return all(matched)


# less efficient as iterates accross all items
# def palindrome(s: str) -> bool:
#     matched = [v == s[-i - 1] for i, v in enumerate(s)]
#     return all(matched)


# functional but less efficient -- still O(N)
# def palindrome(s: str) -> bool:
#     chars = list(s)
#     chars.reverse()
#     return "".join(chars) == s
