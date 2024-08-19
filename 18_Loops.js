// for each loop vimp
let arr = [2,43,4,3,5,3,2,3,224];
console.log("for each");
for(a of arr){
    console.log(a);
}





// for loop - similar to c / c++
console.log("for");

for(let i = 0; i<arr.length-1; ++i){
    console.log(arr[i]);
}

console.log("while");
let i = 0;
while(i<= arr.length-1){
    console.log(arr[i]);
    i++;
}
let j = 0;
console.log("do while");
do{
    console.log(arr[j]);
    j++;
}while(j<= arr.length-1);


// nested loop similar to c c++;

// break keyword - to terminat loop iteration 
