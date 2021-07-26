from index import vowels


def test_vowels_exists():
    assert callable(vowels)


def test_vowels_returns_number_of_vowels_used():
    assert vowels('aeiou') == 5


def test_vowels_with_capitalized_letters():
    assert vowels('AEIOU') == 5


def test_vowels_with_many_letters():
    assert vowels('abcdefghijklmnopqrstuvwxyz') == 5


def test_no_vowels():
    vowels('bcdfghjkl') == 0
