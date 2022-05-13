function bubbleSortAscending(A){
    let temp = 0;
    let comparisons = 0;
     for(let i=0;i<A.length;i++){
         for(let j=0;j<A.length-i-1;j++){
             if(A[j]>A[j+1]){
                 temp = A[j]
                 A[j] = A[j+1];
                 A[j+1] = temp;
                 comparisons++;
             }
         }
         if(comparisons === 0){
             return A;
         }
     }
     console.log("Total comparisons:",comparisons)
     return A;
}

function bubbleSortRecursiveAscending(A){

}

function bubbleSortDescending(A){
    let temp = 0;
    let comparisons = 0;
    for(let i=0;i<A.length;i++){
        for(let j=0;j<A.length-i-1;j++){
            if(A[j]<A[j+1]){
                temp = A[j]
                A[j] = A[j+1];
                A[j+1] = temp;
                comparisons++;
            }
        }
    }
    console.log("Total comparisons:",comparisons)
    return A;
}

function main() {
    console.log("This is bubble sort")
    const a = [5,4,3,2,1];
    const b = [1,2,3,4,5]
    console.log(bubbleSortAscending(a));
    console.log(bubbleSortDescending(b));
}

main()

module.exports = {bubbleSortAscending,bubbleSortDescending};
// A = [1,3,5,4,2]
// round 1
