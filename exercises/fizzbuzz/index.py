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
