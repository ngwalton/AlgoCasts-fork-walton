import re


def capitalize(string: str) -> str:
    return re.sub(r"\b\w", lambda m: m.group(0).upper(), string)

# iterate over characters
# def capitalize(string: str) -> str:
#     capitalized = string[0].upper()

#     for i in range(1, len(string)):
#         capitalized += string[i].upper() if string[i-1] == " " else string[i]

#     return capitalized

# iterate over words based on space
# def capitalize(string: str) -> str:
#     delim = " "
#     words = string.split(delim)
#     words = [word[0].upper() + word[1:] for word in words]
#     return delim.join(words)
