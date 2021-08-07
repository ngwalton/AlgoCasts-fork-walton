from math import floor


# brut force and most efficient -- O(N)
def palindrome(s: str) -> bool:
    mid = floor(len(s) / 2)

    for i in range(mid):
        if s[i] != s[len(s) - 1 - i]:
            return False

    return True


# list comp -- O(N)
# def palindrome(s: str) -> bool:
#     mid = floor(len(s) / 2)
#     matched = [s[i] == s[len(s) - 1 - i] for i in range(mid)]
#     return all(matched)


# functional but less efficient -- still O(N)
# def palindrome(s: str) -> bool:
#     chars = list(s)
#     chars.reverse()
#     return "".join(chars) == s
