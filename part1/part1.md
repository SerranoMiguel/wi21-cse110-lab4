1. On line 11, the length of the array will be printed. Since we are returning i, and the condition for the for loop breaks when i is not 
less than the length of the prices array.

2. On line 12, the discountedPrice will be printed for the last element in the prices array.
Because it is the most recent value stored in there, that is why it will be printed.

3. On line 13, the finalPrice of the last item in the prices array will be printed. Thisis simply 
a rounded version of the discountedPrice.

4. If we call discountPrices([100, 200, 300], .5), the function will return an array of the rounded
discounted prices. After the final price is calculated, it is then pushed to the discounted array.
Once the loop is terminated, it runs through the console logs and returns the discounted array. 
The values in the array should be [50,100,150] as those are the final prices after the 
discount is applied.

5. On line 11, the program will crash because of a scope error. When 'let' is used, its scope is 
limited to the block it is made, in this case, the for loop.

6. On line 12, the program will crash for the same reason as line 11. The scope of 
discountedPrice is limited to only the for loop where it was instantiated.

7. On line 13, the finalPrice of the the last item in the prices array will be printed. There is
no scope issue here since it is within the same code block, so it is being called within a valid scope.

8. If we call discountPrices([100, 200, 300], .5), the function will return an array of the rounded 
discount prices, which is the final price. In this case, we will have [50,100,150].

9. On line 11, the program will crash because of a scope error. When 'let' is used, its scope is 
limited to the block it is made, in this case, the for loop.

10. On line 12, the program will crash due to a scope issue. The keyword 'const' limits
the variable's scope to the block that it was made in, which is only within the for loop.

11. On line 13, the program will crash because, throughout the program, there are attempts to
reassign a constant variable. 

12. If we call discountPrices([100, 200, 300], .5), the program will not work due to the error of 
attempting to reassign a constant.

13. 
a. Accessing the value of the name property in the student object
b. Accessing the value of the Grad Year property in the student object
c. Calling the function for the greeting property in the student object
d. Accessing the name property of the object in the Favorite Teacher property in student
e. Access the first index in the array of the courseLoad property of the student object

14.
a. '3’ + 2 = 32 - When adding it, it reads the 3 as a string and simply appends the 2 to it. 

b. '3’ - 2 = 1 - Since substracting is not accepted for strings, 3 is seen as a number, math is done. 
c.  3 + null = 3 -  null is 0, so 3 + 0 = 3 
d. '3' + null = 3null - 3 is viewed as a string, so null is appeneded to it 
e. true + 3 = 4 - true has a binary value of 1 and 1 + 3 = 4 
f. false + null = 0 - false has a binary value of 0 so does null, so 0 + 0 = 0 
g. "3" + undefined = 3undefined -  3 is read as a string so "undefined" is appeneded to it 
h. "3" - undefined = NaN - Since subtracting is not part of string operations, it should be math. 
However, you can't subtract undefined from 3, so it is NaN - Not a Number. 

15. Comparison
a. '2' > 1 = true - The string, 2, is casted to an integer as is greater than 1.
b. '2' < '12' = false - String to string comparison is lexicographical.
c. 2 == '2' = true - The string, 2, is casted to an int, so they are the same value.
d. 2 === '2' = false - They are different types, so it fails that test.
e. true == 2 = false - These are seen as two different values.
f. true == Boolean(2) = true - if true = 1, then true + true = 2. True && True = True

16. The difference between the == and === operators is that == is simply equal to while
 === is equal value and equal type, so ==== is more picky to get a true answer.

17. Based on the code snippet, "How are you?" gets printed. In 15e, we explained why
 true == 2 is false, so it fails that one. It then checks else if(2). 2 = true && true.
 true && true pass the gate, so it logs "How are you?"
