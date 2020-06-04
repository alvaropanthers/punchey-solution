def nth_prime(n):
    primes = [2]
    odd = 3
    while len(primes) < n:
        for i in primes:
            if odd % i == 0:
                break
        else:
            primes.append(odd)
        odd += 2
    return primes[-1]
    
if __name__ == '__main__':
    n = int(input("Enter nth"))
    print("Prime is {v}".format(v=nth_prime(n)))

#     for i in range(1, 60):
#         print("{v} => {b}".format(v=i, b=nth_prime(i)))