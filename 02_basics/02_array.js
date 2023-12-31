const marvel_heros = new Array('thor','Ironman','Spiderman');
const dc_heros = new Array('superman','flash','batman');
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);//these arrays are not merge it concatinate with each other and saparated by comma. second array counted as third index

// console.log(marvel_heros[3][1])

// const newMarvelArray = marvel_heros.concat(dc_heros)//concat not working on same array u have to store it in new variable.
// console.log(newMarvelArray)//concat give addition of both arrays propoerly.

const all_new_heros = [...marvel_heros,...dc_heros]//kanch ka glass giraya or spread ho gyi --spread property
console.log(all_new_heros)


const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6,7,[4,5]]]
const realAnotherArray = anotherArray.flat(Infinity)//infinity is the depth you want to resolve all . you have to give it ti numbers as one or two or...for good practise..per itna kon dimag lagaye isliye infinity de di.
console.log(realAnotherArray)//gives shuljha hua array

console.log(Array.isArray("Anuruddh"));
console.log(Array.from("Anuruddh"));//from converted to an array
console.log(Array.from({
        name : 'Anuruddh'
}
));//intersting


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2 , score3));//also made array.
