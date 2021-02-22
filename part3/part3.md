The screenshots requested are in this part3 directory \
The bug is that num1 and num2 are stored as strings, so adding them is essentially concatenating them. \ 
I would fix this bug by typecasting each of them as ints, using 
num1 = + num1; \
num2 = + num2; \
This will apporpriately have them as integers and the math will be done.
