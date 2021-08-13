from weave import Queue, weave


def test_weave_is_callable():
    assert(callable(weave))


def test_weave_weaves():
    qu1 = Queue()
    qu2 = Queue()
    expected = Queue()
    qu1.add('a')
    qu1.add('b')
    qu2.add(1)
    qu2.add(2)
    qu2.add(3)

    for i in ["a", 1, "b", 2, 3]:
        expected.add(i)

    assert(str(weave(qu1, qu2)) == str(expected))
