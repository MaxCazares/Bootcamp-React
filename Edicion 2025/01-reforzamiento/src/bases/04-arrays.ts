const myArray: number[] = [1,2,3,4,5,6]

myArray.push(10)
myArray.push(11)


for (const i of myArray) {
    console.log(i + 10);   
}

const myArray2 = [...myArray]
myArray2.push(3)

console.log({myArray, myArray2})