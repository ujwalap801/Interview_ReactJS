function chunkArray(arr, n) {
    // Your implementation
  
    if(n <=0) return [];
    let ans = [];
    
    for(let i=0;i<arr.length; i+=n)
    {

        ans.push(arr.slice(i, i+n))
    }

    return ans;
}

//For the purpose of user debugging.
//pass your array and chunk size in function call
console.log(chunkArray([1, 2, 3], 5));

console.log(chunkArray([1, 2, 3, 4], 2))


function chunkArray(arr, n) {
    // Your implementation
    if (n <= 0) return [];
    let result = [];
    let window = [];
    for (let i = 0; i < arr.length; i++)
    {
        window.push(arr[i]);

        if (window.length === n || i == arr.length - 1)
        {
            result.push(window)
            window=[]
        }
    }

    return result;
}

//For the purpose of user debugging.
//pass your array and chunk size in function call
chunkArray([1, 2, 3], 5);
module.exports = chunkArray


