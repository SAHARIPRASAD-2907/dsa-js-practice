const a = [1,2,3,4,5,6,7,8,9,10];

function BinarySearch(a,low,high,element){
    let mid = parseInt((low+high)/2)
    if(mid>=a.length || mid<=0){
        return console.log("Element not found")
    }
    // console.log("low:",low)
    // console.log("high:",high)
    // console.log("mid:",mid)
    if(a[mid] === element) return console.log("Element found")
    if(a[mid] < element) BinarySearch(a,mid+1,high,element)
    if(a[mid] > element) BinarySearch(a,low,mid-1,element)
}

module.exports = BinarySearch


BinarySearch(a,0,a.length,4) // left array
BinarySearch(a,0,a.length,8) // right array
BinarySearch(a,0,a.length,5) // mid
BinarySearch(a,0,a.length,110) // left not present
BinarySearch(a,0,a.length,-100) // right not present