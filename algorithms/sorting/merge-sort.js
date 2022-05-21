function merge(arr,l,m,r){
    let n1 = m - l + 1 // sub-array 0 to m
    let n2 = r - m; // sub-array m to n-1
    const Larray = []
    const Rarray = []
    // creating left sub-array
    for(let i=0;i<n1;i++){
        Larray.push(arr[l+i])
    }
    // creating right sub-array
    for(let j=0;j<n2;j++){
        Rarray.push(arr[m+l+j])
    }
    let i=0,j=0,k=0;
    // merging
    while(i<n1 && j<n2){
        if(Larray[i]<=Rarray[j]){
            arr[k] = Larray[i];
            i++
        }
        else{
            arr[k] = Rarray[j];
            j++;
        }
        k++;
    }
    // copy remaining element
    while(i<n1){
        arr[k] = Larray[i];
        i++;
        k++;
    }
    while(j<n2){
        arr[k] = Rarray[j];
        j++;
        k++;
    }
}
//[12,11,13,5,6,7] length = 6
function mergeSort(arr,l,r){
    if(l>=r){
        return;
    }
    let m = 1+parseInt((r-1)/2); // 3
    mergeSort(arr,l,m); // (arr,0,3)
    mergeSort(arr,m+1,r) // (arr,4,5)
    merge(arr,l,m,r)
}