
console.log("1.Print numbers from 1 to 10")
for(let i=1;i<=10;i++)
{
	console.log(i)
}

console.log("2.Print only odd numbers")
for(let i=1;i<=10;i++)
{
	if(i%2==1)
	{
		console.log(i)
	}
}

console.log("3.Print numbers in reverse")
for(let i=10;i>0;i--)
{
	console.log(i)
}


console.log("4.Reverse numbers in left and right ")
let a = "4321-5-9876";

let symbol = a.split("-");

let i = 0;
while (i < symbol.length) {
    symbol[i] = symbol[i].split("").reverse().join("");
    i++;
}
let reversed = symbol.join("-");

console.log(reversed);


