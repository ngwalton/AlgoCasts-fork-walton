import random
from index import merge_sort, merge


def test_merge_is_callable():
    assert(callable(merge))


def test_merge_sort_merges_correctly():
    left = [1, 3, 5]
    right = [2, 4, 100]
    assert(merge(left, right) == [1, 2, 3, 4, 5, 100])


def test_merge_sort_callable():
    assert(callable(merge_sort))


def test_merge_sort_sorts_correctly():
    a = list(range(10))
    b = a[:]
    random.shuffle(b)
    assert(merge_sort(b) == a)
