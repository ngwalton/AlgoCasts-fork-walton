from index import capitalize


def test_capitalize_exits():
    assert callable(capitalize)


def test_capitalize_works_correctly():
    assert capitalize("abc") == "Abc"
    assert capitalize(
        'hi there, how is it going?'
    ) == 'Hi There, How Is It Going?'
    assert capitalize(
        'i love breakfast at bill miller bbq'
    ) == 'I Love Breakfast At Bill Miller Bbq'
    assert capitalize("1thing") == "1thing"
