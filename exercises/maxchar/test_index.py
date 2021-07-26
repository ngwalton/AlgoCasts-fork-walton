from index import max_char


def test_max_char_exists():
    assert callable(max_char)


def test_max_char_returns_most_frequent_char():
    assert max_char("a") == "a"
    assert max_char("abcdefghijklmnaaaaa") == "a"


def test_max_char_works_with_numbers():
    assert max_char("ab1c1d1e1f1g1") == "1"
