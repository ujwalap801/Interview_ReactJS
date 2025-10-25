let s ="   the sky         is blue   ";

function reverseString(s)
{

    let stack =[];
    s= s.trim().split(/\s+/);
    console.log(s)
    let n = s.length-1;

    for(let i=n; i >=0;i--)
    {
        
        stack.push(s[i])
        
    }
    console.log(s);



    return stack.join(" ");
}


console.log(reverseString(s))