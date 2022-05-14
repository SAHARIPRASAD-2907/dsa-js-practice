function insertionSort(A,n){
    let key,j;
    for(let i=1;i<n;i++){
        key = A[i];
        j = i-1;

        while (j>=0 && A[j]>key){
            A[j+1] = A[j];
            j = j - 1;
        }
        A[j+1] = key;
    }
    return A;
}


function main(){
    const A = [5,4,3,2,1];
    let n = A.length
    console.log(insertionSort(A,n))
}


main()
