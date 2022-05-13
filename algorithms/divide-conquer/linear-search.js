const a = [1,2,3,4,5,6,7]


function Lsearch(a,x,i){
    if(a.length > i) return console.log("Element not found")
    if(a[i] === x) return console.log("Element present")
    Lsearch(a,x,i+1)
}

Lsearch(a,3,0)

module.export = Lsearch;