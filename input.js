const names =["ujwala", "ju", "ujwala", "umar", "john"];

function filter(input, arr)
{

    const lowerInput = input.toLowerCase();
    return arr.filter(name => name.toLowerCase().startsWith(lowerInput))

}


console.log(filter("u", names))


const people = [
  { name: "ujwala" },
  { name: "ju" },
  { name: "ujwala" },
  { name: "umar" },
  { name: "john" }
];


function filterObj(input, arr)
{
    const inputData = input.toLowerCase();
    return arr.filter(person =>person.name.toLowerCase().startsWith(inputData))
}

console.log(filterObj("uj", people))



const names1 = ["ujwala", "ju", "ujwala", "umar", "john"];

function filterByInput(input, arr) {
  const lowerInput = input.toLowerCase();
  return arr.filter(name => name.toLowerCase().slice(0, lowerInput.length) === lowerInput);
}

console.log(filterByInput("u", names1));   // ["ujwala", "ujwala", "umar"]
console.log(filterByInput("u", names1));  // ["u", "u"]
