//functions
console.log(".......................................")
function PrintMsg()
{
	console.log("Hello JS")
}

PrintMsg()

//return type function
console.log(".......................................")
function sum()
{
	return 5+7
}
console.log(sum())

console.log(".......................................")

function sub(a,b)
{
	return (a-b)
}
console.log(sub(10,6))

//write a function to find that the given number is prime 


/*function Prime(num)
{
	if (num==1)
	{
		console.log("not a prime number")
	}
	else if(num%1==num && num%num==0)
	{
		console.log("is prime")
	}
	else 
	{
		console.log("not prime")
	}
}
console.log(Prime(1))*/
console.log(".......................................")

function  isprime(number)
{
	
if(number<=1){
  isprime=false
    }
 else{
    for(let i=2;i<=number/2;++i){
        if(number%i==0){
            isprime=false
            
        }
    }
 }
 if(isprime){
    console.log( "prime number")
  }
   else{
    console.log("not prime")
   }


}
isprime(3)

//write recursive function to ptint numbers 1 to n

/*let n=100;
function printnumbers()
{
	for(let i=1;i<=n;i++)
	{
	 console.log(i)	
	}
}
console.log(printnumbers())*/

//arrow function
console.log(".......................................")
const msg=()=>{return console.log("hello")}
//console.log(msg)
msg()

//write an arrow function to sum 2 numbers
console.log(".......................................")
const add=(a,b)=>{return a+b}
console.log(add(5,3))

//multification
console.log(".......................................")
const mul=(a,b=2)=>{return (a*b)}
console.log(mul(2,5))
console.log(mul(9))

//rest parameters
console.log(".......................................")
/*const mysum=(...n)=>
{   
	console.log(n)
}
mysum(4,5,6,89,2)
*/
/*const mysums[]=[a,b,c,d,e]=>{return (a+b+c+d+e)}
console.log(mysums(4,5,6,89,2))
*/
// as array

/*const mysum=(...n)=>
{   let t=0
	n.forEach((i)=>t=t+i)
	console.log(t)
}
mysum(4,5,6,89,2)*/


const mysum=(...n)=>{
	return n.reduce((t,i)=>t=t+i)
}
console.log(mysum(4,5,8,6,2))

//callback function

const myname=(name)=>{console.log("my name is"+name)}

const greet=(msg ,fun)=>{
	console.log("Hi..."+msg)
	fun
}
greet("good morning ",myname("james"))

console.log(".......................................")
//a function passed as an argument
const greeting=(msg ,fun)=>{
	console.log("Hi..."+msg)
	fun()
}
greeting("good morning ",()=>{console.log("myname is david")})


console.log(".......................................")

const multwo=(n)=>n*5

const myarr=(mul,...n)=>
{
	n.forEach((i)=>console.log(mul(i)))
	//console.log(t)
}
myarr(multwo,4,5,8,6,2)