//Array operations
let array=[1,2,3]

console.log(array);



for(let i=0;i<array.length;i++)
{
	console.log(array[i]);
}
array.forEach((n) =>
{
	console.log(n);
})

//find the max using foreach
let max=0;
array.forEach((n) =>
{
	
	if(max<n)
	{
		max=n;
	}
	(max<n)&&(max=n)
		
})
console.log("max is "+max)

//print the nested array
//[[1,2,30],[5,6],[8,3,5]]
let arr1=[[1,2,30],[5,6],[8,3,5]];
arr1.forEach((n) =>
{
	n.forEach((i) =>
	{
		console.log(i)
	})
	
})

//arr =[11,2,3,4,5,6];
//target=7
//write a code to find all pairs sum up to atrget

let arry2=[1,2,3,4,5,6];
let target=7;

	for(let i=0;i<arry2.length;i++)
	{
		for(let j=0;j<arry2.length;j++)
		{
			if(arry2[i]+arry2[j]==target)
			{
				console.log(arry2[i],arry2[j])
			}
		}
	}
	
	


/*
a=[4,5,6,7,3,7]
b=[8,3,2,1,5]
find the commom elements 
*/

let arrA=[4,5,6,7,3,7];
let arrB=[8,3,2,1,5];

for(let i=0;i<arrA.length;i++)
{
	for(let j=0;j<arrB.length;j++)
	{
		if(arrA[i]==arrB[j])
		{
			console.log(arrA[i] +" " +arrB[j])
		}
	}
}
//find the most freaquent elemenyt in array
//[4,8,3,4,3,2,1,8,4]
let arr = [4,8,3,4,3,2,1,8,4];

let frequency = {}; 


let mostFrequentNum = null; 
let maxFrequency = 0; 


for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    
    if (frequency[num]) {
        frequency[num]++;
    } else {
        frequency[num] = 1;
    }
}


for (let num in frequency) {
    if (frequency[num] > maxFrequency) {
        mostFrequentNum = num;
        maxFrequency = frequency[num];
    }
}

console.log("Most frequent number is:", mostFrequentNum);


//array operation
//push and pop

/*arr3=['a','b','d']
console.log(arr3)
arr3.push('e')
console.log(arr3)
arr3.pop()
console.log(arr3)*/

//reverse arry using push and pop

//a b c d -> d c b a 


let arryC=['a','b','c','d'];
let arryD=[];
for(let i=arryC.length;i>0;i--)
{
	arryD.push(arryC.pop());
	
}
console.log(arryD)


//Jason
//{key:value}
let student ={regno:'2021/ICT/01',name:'James',age:21,course:'IT',skills:['java',"JS",'c++']}
console.log(student)
console.log(student.name)
let students=[
{regno:'2021/ICT/01',name:'James',age:21,course:'IT'},
{regno:'2021/ICT/02',name:'ravi',age:22,course:'IT'},
{regno:'2021/ICT/03',name:'gaya',age:23,course:'IT'},




]
console.log(students)
//define 10 student Jason
let students = [
  { regno: '2021/ICT/01', name: 'James', age: 21, course: 'IT', gender: 'Male', gpa: 3.5 },
  { regno: '2021/ICT/02', name: 'Ravi', age: 22, course: 'IT', gender: 'Male', gpa: 3.7 },
  { regno: '2021/ICT/03', name: 'Gaya', age: 23, course: 'IT', gender: 'Female', gpa: 3.9 },
  { regno: '2021/ICT/04', name: 'Kavi', age: 24, course: 'IT', gender: 'Male', gpa: 3.2 },
  { regno: '2021/ICT/05', name: 'Nina', age: 20, course: 'IT', gender: 'Female', gpa: 3.8 },
  { regno: '2021/ICT/06', name: 'Amir', age: 22, course: 'IT', gender: 'Male', gpa: 3.4 },
  { regno: '2021/ICT/07', name: 'Sara', age: 23, course: 'IT', gender: 'Female', gpa: 3.6 },
  { regno: '2021/ICT/08', name: 'Ali', age: 21, course: 'IT', gender: 'Male', gpa: 3.0 },
  { regno: '2021/ICT/09', name: 'Sophia', age: 24, course: 'IT', gender: 'Female', gpa: 4.0 },
  { regno: '2021/ICT/10', name: 'Mark', age: 25, course: 'IT', gender: 'Male', gpa: 3.3 }
];

//store it in array
console.log("All Students:", students);

//find the female students
let itStudents = students.filter(student => student.course === 'IT');
console.log("IT Students:", itStudents);

//find the students who are folllowuing it course
let maxGPA = Math.max(...students.map(student => student.gpa));
console.log("Maximum GPA:", maxGPA);


//find the max and average GPA among the student

4. Find the average GPA among the students
let totalGPA = students.reduce((sum, student) => sum + student.gpa, 0);
let averageGPA = totalGPA / students.length;
console.log("Average GPA:", averageGPA);

