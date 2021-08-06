from index import steps


def test_steps_is_function():
    assert(callable(steps))


def test_steps_correctly_returns_steps():
    steps1 = ["#"]
    steps2 = ["# ", "##"]
    steps3 = ["#  ", "## ", "###"]

    assert(steps(1) == steps1)
    assert(steps(2) == steps2)
    assert(steps(3) == steps3)
