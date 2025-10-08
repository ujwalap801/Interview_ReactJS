const colors = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  dark: "#000000",
  black:"#000001"
}


function colorSelect(input, colors) {
  // if input is a key
  if (colors[input]) return colors[input];
  
  // if input is a value
  return Object.keys(colors).find(key => colors[key] === input);
}

console.log(colorSelect('black', colors));     // "black"
console.log(colorSelect('#000000', colors));  // "black"


console.log(Object.keys(colors)); //keys
console.log(Object.values(colors)) //values


function colorFilter(input, colors)
{
    
    const arr = Object.keys(colors).filter(key => colors[key] === input)
    return arr;
}

console.log(colorFilter('#000000', colors));




