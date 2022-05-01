/*
Write a program to reverse an array or string  
Input  : arr[] = {1, 2, 3}
Output : arr[] = {3, 2, 1}

Input :  arr[] = {4, 5, 1, 2}
Output : arr[] = {2, 1, 5, 4}
*/
var arr=[1,2,3,4,5,9,12]
console.log(arr);
var n=arr.length;
//console.log(n);
var temp =0;
for( var i=0; i<n/2; i++)
{
    temp=arr[i];
    arr[i]=arr[n-1-i];
    arr[n-1-i]=temp;
}
console.log(arr);
