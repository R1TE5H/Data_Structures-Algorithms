# Lists

Lists are a data structure that can contain a list of elements. Lists are defined using `[]` and be multi-dimensional

- Lists are mutable and can store dynamic data types
- Lists obey traditional addition and multiplication rules using `+` and `*`

```python
letters = ["a", "b", "c"]
matrix = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]

pattern = [0, 0, 1] * 3

combined = pattern + letters + [2, 3, 4]

```

## Accessing and Modifying List Elements

To access or modify elements in a list we use bracket `[]` notation

- Bracket notation has parameters `[start : end : step]` just like strings

```python
letters = ["a", "b", "c", "d"]
print(letters[1])
print(letters[::2])
print(letters[::-2])

letters[0] = "A"
print(letters)

# b
# ['a', 'c']
# ['d', 'b']
# ['A', 'b', 'c', 'd']
```

## Adding and Removing Elements

- `append(e)` adds `e` to the end of the list
- `insert(index, e)` adds `e` to the list at the specified index. All elements at the specified index and after are shifted one index back
- `pop(index)` removes the element at the specified index. If not argument is passed, the last element is removed
- `remove(e)` removes the first occurrence of `e` in the list
- `clear()` empties the list
- `del` is a key word that will remove element(s) from a list

```python
letters = ["a", "b", "c", "d"]

letters.append("e")
letters.insert(0, "A")

# ["A", "a", "b", "c", "d", "e"]

letters.pop()
letters.pop(3)
letters.remove("A")
del letters[1:]

# ["a"]

```

## Finding Elements

To determine if an element is in a list, we use the `in` keyword as well as the `index(element)` function.

- We cannot just use the `index()` function because if the element is not in the list it will return an error.

```python
letters = ["a", "b", "c", "d"]

if "d" in letters:
  print(letters.index("d"))

```

- `count(element)` is a function used to count the number of occurrences of `element`

```python
letters = ["a", "b", "c", "d", "c"]

print(letters.count("c"))

```

## Iterating Lists

We can use traditional loops to iterate through the elements in a list, however, other ways may be more effective depending on the need.

- `enumerate(list)` returns a list of tuples where each element of the list is a tuple containing the index and value of each element in the list

```python
letters = ["a", "b", "c", "d"]

# Both of the below do the same thing, the second one simply unpacks the tuple elements
for letter in enumerate(letters):
    print(letter)

for index, letter in enumerate(letters):
    print(index, letter)

# (0, 'a')
# (1, 'b')
# (2, 'c')
# (3, 'd')
```

## List Functions

- `list()` is used to convert the parameter value into a list. The argument must be an iterable (tuple, `range()`, strings, iterable object)

```python
tuple_list = list((1, 2, 3, 4))
range_list = list(range(1, 21))
string_list = list("Python Rules")

# [1, 2, 3, 4]
# [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
# ['P', 'y', 't', 'h', 'o', 'n', ' ', 'R', 'u', 'l', 'e', 's']
```

- `len(arg)` returns the number of elements in the list

```python
numbers = list(range(1, 20))
print(len(numbers))

# 19
```

## List Unpacking/Destructuring

List unpacking is spreading the list across other variables to assign elements to their own unique variable.

- The number of variables must be equal to the number of elements in the list
- We can use `*` to assign elements we don't want to assign to a variable to a new list (the same as unknown number of parameters in functions)
  - If the variable `*` is in between elements, we can get elements at the end of the list

```python
numbers = [1, 2, 3, 4, 5]
first, second, *others, last = numbers

print(first) # 1
print(second) # 2
print(others) # [3, 4]
print(last) # 5
```

## Sorting Lists

We can use `sort(key, reverse)` or `sorted(iterable, key, reverse)` to sort a list in ascending and descending order. `sort()` will sort the list in place -- the current list will be overwritten with the sorted elements and `sorted()` will return a new sorted iterable.

- When sorting in descending order, use a keyword argument to assign `reverse` to `True` -- by default it is `False`

```python
numbers = [3, 51, 2, 89, 3, 91]

numbers.sort(reverse=True)

numbers2 = [30, 510, 20, 890, 30, 910]
sorted_numbers = sorted(numbers2, reverse=True)
```

For both `sort()` and `sorted()` the `key` parameter is used to handle complex iterables where the sorting value is ambiguous. This can include multi-level lists, dictionaries, lists containing tuples...

- We create a key by creating a function that will return the value to be used for sorting and reference it as the parameter
- The lambda function returns the value that will be used to sort the list/iterable

```python
items = [
    ("Tuple1", 10),
    ("Tuple2", 9),
    ("Tuple3", 12),
]

sorted_items = sorted(items, key=lambda item: item[1])

items.sort(key=lambda item: item[1])

```

## Mapping Lists

Mapping is the process of getting elements from a list and performing a specific action using each element. Each element in the list will map to an element in the returned map object.

- We use the `map(function, iterable)` function to map a list. `map()` will return a new object based on `function` requirements
  - To make it a list we use `list()`
- The lambda function returns the value that will be mapped to the new object

```python
items = [
    ("Tuple1", 10),
    ("Tuple2", 9),
    ("Tuple3", 12),
]

prices = map(lambda item: item[1], items)   # [10, 9, 12]
greater_than_nine_prices = map(lambda item: item[1] > 9, items)   # [True, False, True]

# ("Tuple1", 10)  --> 10    |   ("Tuple1", 10)  --> True
# ("Tuple2", 9)   --> 9     |   ("Tuple2", 9)   --> False
# ("Tuple3", 12)  --> 12    |   ("Tuple3", 12)  --> True
```

## Filtering Lists

Filtering lists helps us get or remove elements based on a set condition

- We could use a For Loop to do this but an easier way is using the `filter()` function
- The lambda function should return a boolean and if the boolean is `True` the element will be added to the new object

```python
items = [
    ("Tuple1", 10),
    ("Tuple2", 9),
    ("Tuple3", 12),
]

filtered = filter(lambda item: item[1] > 9, items)
list(filtered)    # [('Tuple1', 10), ('Tuple3', 12)]

```

## List Comprehension

A way to map and filter lists without using `filter()` and `map()` that returns a new list instead of an object. Using Comprehensions is the preferred way to write high quality code

- `[expression for element in list]` is the syntax for list comprehension mapping
- `[expression for element in list condition]` is the syntax for list comprehension filtering

```python
items = [
    ("Tuple1", 10),
    ("Tuple2", 9),
    ("Tuple3", 12),
]

mapped = list(map(lambda item: item[1], items))
mapped_comp = [item[1] for item in items]
# "For each item in items add item[1]"

filtered = list(filter(lambda item: item[1] > 9, items))
filtered_comp = [item for item in items if item[1] > 9]
# "For each item in items, add item if item[1] is greater than 9"
```

## Zip Function

`zip(*iterables)` is a function that takes a variable number of iterable arguments and will return a new iterable object containing tuples where each tuple has the corresponding element from each iterable.

- The returned function will continue "zipping" the lists until it reaches the end of a list

```python
list1 = [1, 2, 3]
list2 = [10, 20, 30]
string = "abc"

list(zip(list1, list2, string))   # [(1, 10, 'a'), (2, 20, 'b'), (3, 30, 'c')]
```
