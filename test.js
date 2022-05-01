/*The simple idea of Kadane’s algorithm is to look for
 all positive contiguous segments of the array
  (max_ending_here is used for this). And 
  keep track of maximum sum contiguous segment 
  among all positive segments (max_so_far is used for this).
   Each time we get a positive sum compare it with
    max_so_far and update max_so_far if it is greater 
    than max_so_far */

function maxSubArraySum(a,size)
{
  let max_so_far = a[0];
  let curr_max = a[0];
 
  for (let i = 1; i < size; i++)
  {
      curr_max = Math.max(a[i], curr_max+a[i]);
      max_so_far = Math.max(max_so_far, curr_max);
  }
 
return max_so_far;
}
 
// Driver code
 
let a = [-2,1,-3,4,-1,2,1,-5,4];
let n = a.length;
console.log("Maximum contiguous sum is ",maxSubArraySum(a, n));
     