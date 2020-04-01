const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



const newArray = arr.map(function(item, index){
    return item + index;
})


console.log(newArray)

const sum = arr.reduce(function(total, next){
    return total + next;
})

console.log(sum)

const filter = arr.filter(function(item){
    return item % 2 === ;
})

console.log(filter)

const find = arr.find(function(item){
    return item === 55;
})

console.log(find)