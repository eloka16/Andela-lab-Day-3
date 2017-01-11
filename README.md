# Andela-lab-Day-3

GitHub repo containing a clone of a simple user interface created using HTML and CSS.

### Binary Search

create three functions, as prototypes to the Array class to return the following:
toTwenty() returns [1, 2, 3 . . . 20]
toForty() returns [2, 4, 6 . . . 40]
toOneThousand() returns [10, 20, 30 . . . 1000]
Once you are done, create another prototype(d) function called search, it will take just one argument which is the number you are to find. The search function should return an object, which contains
1. .count, the number of times you function iterated to find the index of the number in question
2. .index, the index of the number in question
3. .length, the length of the original array
The .search function should implement the binary search algorithm, each time you iterate, you should increase the count, to test how efficient your implementation is.

### Missing Number

You are presented with two arrays, all containing positive integers. Create a function findMissing(arr1, arr2) that takes in two arguments, both of which are arrays. One of the arrays will have one extra number, see below
* [1,2,3] and [1,2,3,4] should return 4
* [4,66,7] and [66,77,7,4] should return 77