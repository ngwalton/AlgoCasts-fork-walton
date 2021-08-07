from typing import List


def matrix(n: int) -> List[List[int]]:
    results = [[None for j in range(n)] for i in range(n)]
    count = 1
    rowStart = 0
    rowEnd = n - 1
    colStart = 0
    colEnd = n - 1

    while (rowStart <= rowEnd) & (colStart <= colEnd):
        for c in range(colStart, colEnd+1):
            results[rowStart][c] = count
            count += 1
        rowStart += 1

        for r in range(rowStart, rowEnd+1):
            results[r][colEnd] = count
            count += 1
        colEnd -= 1

        for c in range(colEnd, colStart-1, -1):
            results[rowEnd][c] = count
            count += 1
        rowEnd -= 1

        for r in range(rowEnd, rowStart-1, -1):
            results[r][colStart] = count
            count += 1
        colStart += 1

    return results
