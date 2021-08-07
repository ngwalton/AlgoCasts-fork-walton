from index import reverse_int


def test_reverse_int_is_callable():
    assert(callable(reverse_int))


def test_reverse_int_correctly_handles_0():
    assert(reverse_int(0) == 0)


def test_reverse_int_correctly_reverses_positive_int():
    assert(reverse_int(5) == 5)
    assert(reverse_int(15) == 51)
    assert(reverse_int(90) == 9)
    assert(reverse_int(2359) == 9532)


def test_reverse_int_correctly_reverses_negative_int():
    assert(reverse_int(-5) == -5)
    assert(reverse_int(-15) == -51)
    assert(reverse_int(-90) == -9)
    assert(reverse_int(-2359) == -9532)
