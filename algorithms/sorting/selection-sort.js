
function selectionSort(A){
    let min = 0;
    let pos=0,temp;
    for(let i=0;i<A.length-1;i++){
        pos = i // initial lowest element
        console.log(A)
        for(let j=i+1;j<A.length;j++){
            if(A[j]<A[pos]){
                pos = j; // new lowest element
            }
        }
        // swap
        temp = A[i];
        A[i] = A[pos];
        A[pos] = temp
    }
    return A;
}



function main(){
    const A = [5,4,3,2,1]
    console.log(selectionSort(A))
}


main()