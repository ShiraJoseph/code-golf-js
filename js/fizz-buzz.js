// Set up
print = x => document.getElementById('div2').innerText += x + '\n';

// Code
for(i=0;i++<100;print(i%5?f||i:f+'Buzz'))f=i%3?'':'Fizz'
