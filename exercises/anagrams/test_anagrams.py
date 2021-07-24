from index import anagrams


def test_anagrams_is_function():
    assert callable(anagrams)


def test_hellow():
    assert anagrams('hello', 'llohe')


def test_whoa():
    assert anagrams('Whoa! Hi!', 'Hi! Whoa!')


def test_not_one_two():
    assert not anagrams('One One', 'Two two two')


def test_not_one_onec():
    assert not anagrams('One one', 'One one c')


def test_not_tree():
    assert not anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')
