PROBLEM:
> Write a node program/app/script/software program that takes in an unlimited number of command line arguments, 
goes through each and prints out the sum of them.

SOLUTION:

set values = inputs from command line (make sure only numbers)

function sum (array of string/regular numbers) => number:
  set sum = 0
  loop through values (=> v)
    convert v from string into number
    ensure it's a usable number (if not, then skip?)
    add v into sum (sum += v)
  endloop
  return sum # DONE!

NOTE:

- What if input is not numbers?
- What if no numbers?
- What if negavive numbers?
- What if decimals
- What if numbers are ridic large yo
- what if non-numbers (abc, etc) 