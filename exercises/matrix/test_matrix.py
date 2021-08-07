from matrix import matrix


def test_matrix_is_a_funciton():
    assert(callable(matrix))


def test_matrix_2():
    m2 = [[1, 2], [4, 3]]
    assert(matrix(2) == m2)


def test_matrix_3():
    m3 = [[1, 2, 3], [8, 9, 4], [7, 6, 5]]
    assert(matrix(3) == m3)


def test_matrix_4():
    m4 = [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
    assert(matrix(4) == m4)
