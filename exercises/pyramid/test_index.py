from index import pyramid


def test_pyramid_is_function():
    assert(callable(pyramid))


def test_pyramid_creates_a_pyramid():
    pyr1 = ["#"]
    pyr2 = [" # ", "###"]
    pyr3 = ["  #  ", " ### ", "#####"]
    pyr4 = ["   #   ", "  ###  ", " ##### ", "#######"]

    assert(pyramid(1) == pyr1)
    assert(pyramid(2) == pyr2)
    assert(pyramid(3) == pyr3)
    assert(pyramid(4) == pyr4)
