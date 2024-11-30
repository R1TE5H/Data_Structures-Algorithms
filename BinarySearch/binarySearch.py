import math
from typing import List

def binarySearch(arr: List[int], target: int) -> str:
    if len(arr) == 0:
        return "The list provided is empty"

    left: int = 0
    right: int = len(arr) - 1

    while(left <= right):
        mid: int = math.floor((left + right) / 2)

        if arr[mid] == target:
            return f"{target} was found at the index number {mid}"  # Use f-string for formatting
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return f"{target} was not found in {arr}"


print(binarySearch([1,2,3,4,5], 5))