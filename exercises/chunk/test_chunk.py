import pytest


def chunk(inList: list = [], size: int = 0) -> list:
    if size < 0 or not isinstance(size, int):
        raise ValueError('size must be positive integer.')
    size = size or len(inList)
    chunked = []
    start = 0

    while start < len(inList):
        chunked.append(inList[start:start+size])
        start += size

    return chunked


test_list = list(range(5))


def test_chunk_empty():
    assert chunk() == []


def test_chunk_list():
    assert chunk(test_list) == [test_list]


def test_chunk_list_0():
    assert chunk(test_list, 0) == [test_list]


def test_chunk_list_2():
    assert chunk(test_list, 2) == [test_list[:2],
                                   test_list[2:4],
                                   test_list[4:]]


def test_chunk_list_4():
    assert chunk(test_list, 4) == [test_list[:4], test_list[4:]]


def test_chunk_error_char():
    with pytest.raises(Exception):
        chunk(test_list, "a")


def test_chunk_error_negative():
    with pytest.raises(Exception) as execpt_info:
        chunk(test_list, -1)
    assert execpt_info.value.args[0] == 'size must be positive integer.'
