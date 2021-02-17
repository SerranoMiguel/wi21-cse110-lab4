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

