from index import palindrome


def test_palindrome_is_callable():
    assert(callable(palindrome))


def test_palindrome_works_correctly():
    assert(palindrome("abba"))
    assert(not palindrome(" aba"))
    assert(not palindrome("aba "))
    assert(not palindrome("greetings"))
    assert(palindrome("1000000001"))
    assert(not palindrome("Fish hsif"))
    assert(palindrome("pennep"))
