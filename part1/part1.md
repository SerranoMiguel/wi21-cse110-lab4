1. On line 11, the length of the array will be printed. Since we are returning i, and the condition for the for loop breaks when i is not 
less than the length of the prices array.

2. On line 12, the discountedPrice will be printed for the last element in the prices array.
Because it is the most recent value stored in there, that is why it will be printed.

3. On line 13, the finalPrice of the last item in the prices array will be printed. Thisis simply 
a rounded version of the discountedPrice.

4. If we call discountPrices([100, 200, 300], .5), the function will return an array of the rounded
and discounted prices. After the final price is calculated, it is then pushed to the discounted array.
Once the loop is terminated, it runs through the console logs and returns the discounted array. 
The values in the array should be [50,100,150] as those are the final prices after the 
discount is applied.
