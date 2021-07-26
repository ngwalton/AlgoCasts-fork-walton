from index import fizz_buzz


def test_fizz_buzz_exists():
    assert callable(fizz_buzz)


def test_fizz_buzz_works():
    result = [1, 2, "fizz", 4, "buzz", "fizz", 7, 8,
              "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz"]
    assert fizz_buzz(15) == result
