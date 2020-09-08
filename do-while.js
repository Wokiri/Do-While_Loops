let num = 2
do {
    console.log(num)
    num++
} while (num > 5)

// Output: 2

/*
In this code, it is seen that the value at the console is 2.
This is so despite the fact that the condition states that the code should execute only if the variable num is greater than 5.
From this, we are able to see that the code executes before it checks the specifications at the condition.
After this first iteration, and indeed after logging the number 2, the loop finds out that the condition requires it to iterate only when num is greater than 5.
It therefore stop at this point for the new value of num is now 3 (not 2, having been effectively adjusted by the statement at line number 5) doesn't meet the condion requirements. 
*/