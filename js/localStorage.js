console.log("localStorage")

window.addEventListener('storage', (e)=>{
debugger
})

localStorage.setItem("one", 1)
const one = localStorage.getItem("one")
console.log(one)

const arr = [5,6,7];

localStorage.setItem('a', JSON.stringify(arr))
let b = localStorage.getItem('a')
b = JSON.parse(b)

console.log(b)

const obj = {a: 1, b:2,c:3}

localStorage.setItem('obj', JSON.stringify(obj))
let c = localStorage.getItem('obj')
console.log(c)
c = JSON.parse(c)
console.log(typeof c)