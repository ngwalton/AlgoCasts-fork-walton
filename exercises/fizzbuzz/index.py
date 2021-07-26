"""
Function to run classic fizzbuzz algorithm. For i in 1 through n print
"fizzbuzz" if i is a multiple of 3 and 5 (i.e. a multiple of 15), print "fizz"
i is a multiple of 3, print "buzz" if it's a multiple of 5, and print i none of
the above apply. This has been modified to return a vector of the printed
values to simplify testing.
"""


def fizz_buzz(n: int) -> list:
    fizz = "fizz"
    buzz = "buzz"
    result_for_test = []

    for i in range(1, n+1):
        mult_of_3 = i % 3 == 0
        mult_of_5 = i % 5 == 0

        if mult_of_3 and mult_of_5:
            result = fizz + buzz
        elif mult_of_3:
            result = fizz
        elif mult_of_5:
            result = buzz
        else:
            result = i

        result_for_test.append(result)
        print(result)

    return result_for_test
