def square_digits(num):
    to_return = ''

    for i in str(num):
        to_return += str(int(i)*int(i))

    return int(to_return)
