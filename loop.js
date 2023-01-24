// //vaniila for loop

for (let i=0;i<6;i++){
  console.log(i)
}


for (let i=0;i<10;i++){
  console.log(i)
}
  

// // programme to add first n natural numbers

let sum=0

let n=prompt('enter the value of n')

n=Number.parseInt(n)

for (let i=0;i<n;i++){
  sum+=(i+1)
}
console.log('total sum of : ' + n + ' numbers are : '+sum)

// // programme to get factorial of n numbers

let fact=1

let number_Fact=prompt('enter the value of factorial you want')

number_Fact=Number.parseInt(number_Fact)

for (let i=1;i<number_Fact;i++){
  fact*=i
  console.log(fact)
}
console.log('the factorial for :' + number_Fact + ': is :' +fact)


// for in loop 


let obj={
  bangalore:'city',
  youtube:'platform',
  india:'country'
}

for (i in obj){
  console.log('the key '+i+' is a :'+obj[i])
}


//  for of loop
// works only with iterable

let obj="some_Name"

for (i of obj){
  console.log(i)
}
