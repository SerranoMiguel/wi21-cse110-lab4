The screenshots requested are in this part3 directory \
The bug is that num1 and num2 are stored as strings, so adding them is essentially concatenating them. \ 
I would fix this bug by typecasting each of them as ints, using \
num1 = + num1; \
num2 = + num2; \
This will apporpriately have them as integers and the math will be done.


Part 2 
1. The name of the file is citylots.json
2. part2.js initiated the download
3. The file size is 11687628 bytes
4. It took 236.43 ms to download.
5. The User-Agent for the browser that made the request was Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36
6. It came from an Apache type of server
7. It was last modified Tue, 26 Jan 2021 22:14:13 GMT
8. The Content-Type of this file is application/json
9. The fetchdata() function inside part2.js made the request.
