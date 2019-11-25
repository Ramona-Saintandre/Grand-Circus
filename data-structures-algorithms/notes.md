Notes:

Arrays
    - Grocery list, tons of examples
Trees
    - Used in databases
Graphs
    - Google Maps, airline flights, UPS
        - Hint at Kruskals algorithm
Map
    - Hardware for storing and calling information
    - Library system
Stacks (LIFO)
    - Undo/Redo on computer programs
    - Getting cars out of a garage
Queues (FIFO)
    - Line at cafeteria
    - Support tickets

Maps are like objects, but can have anything as a key, including booleans, numbers, functions, etc
In a set, each value is unique

Abstract Data Type
*Abstract* in context of computer science means that there are certain things that describe what an item is, even though the actual implementation may differ.

Every "Car" has an engine, wheels, seats. Cars differ in many things though:
    -   Type of engine (gas, electric, hybrid)
    -   Accessories: bluetooth, heated seats, etc.
    -   Amount of seats

Show array in C vs JavaScript to show how JS implements in higher level

Draw array and linked list on board

Need array and linked list exercise

Algorithm: a defined process of how to solve a problem, step by step
Pseudocode: a high-level explanation of an algorithm in plain english

Greedy algorithm: This means that it makes a locally-optimal choice in the hope that this choice will lead to a globally-optimal solution.

^ Relate to how this sometimes works in real life as well

Recursion: dividing a problem into more simple versions of itself. Hinges on the idea of a "base step" and a "recursive step"

Merge sort:
Whiteboard solution by simply going through each step

The algorithm depends on the fact that each array (left and right), is already sorted, so you have to just compare the arrays against each other in order

Note: MergeSort is used for Array.sort() in Safari and Firefox, Chrome and V8 engine uses Timsort, first implemented by a guy named Tim (https://en.wikipedia.org/wiki/Timsort). The important thing to glean from this is that different algorithms perform better on different datasets, and that browsers and javascript engines all have slightly different implementations.




