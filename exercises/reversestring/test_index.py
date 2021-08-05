from index import reverse


def test_reverse_is_function():
    assert(callable(reverse))


def test_reverse_reverses_string_correctly():
    assert(reverse("abcd") == "dcba")
    assert(reverse("  abcd") == "dcba  ")
    assert(reverse("  a bcd") == "dcb a  ")
