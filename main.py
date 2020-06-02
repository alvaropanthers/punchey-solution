def nth_prime(n):
    return range(1, n * 2, 2)[-1]

if __name__ == '__main__':
    n = int(input("Enter nth"))
    print("Prime is {v}".format(v=nth_prime(n)))