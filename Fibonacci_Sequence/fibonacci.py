from typing import List

def fibonacci(iterations: int) -> List[int]:
    sequence: List[int] = []
    n1 = 0
    n2 = 1

    for i in range(iterations):
        if i == 0:
            sequence.append(n1)
        elif i == 1:
            sequence.append(n2)
        else:
            nextTerm = n1 + n2
            sequence.append(nextTerm)
            n1 = n2
            n2 = nextTerm
    
    return sequence

result = fibonacci(3)
print(result)