class Pair {
    constructor() {
        this.min = -1;
        this.max = 100000000;
    }
}

function getMinMax(arr, low, high) {
    let minmax = new Pair();
    let mm1 = new Pair();
    let mid;

    // if there is only one element in array
    if (low === high) {
        minmax.max = arr[low];
        minmax.min = arr[low];
        return minmax;
    }
    // if there are two elements
    if (high === low + 1) {
        if (arr[low] > arr[high]) {
            minmax.max = arr[low];
            minmax.min = arr[high];
        } else {
            minmax.max = arr[high];
            minmax.min = arr[low];
        }
        return minmax;
    }

    // if there are more than 2 elements
    mid = parseInt((low + high) / 2);
    mm1 = getMinMax(arr, low, mid);
    mmr = getMinMax(arr, mid + 1, high);

    // compare minimum of two parts
    if (mm1.min < mmr.min) {
        minmax.min = mm1.min;
    } else {
        minmax.min = mmr.min;
    }

    // compare maximum of two parts
    if (mm1.max > mmr.max) {
        minmax.max = mm1.max;
    } else {
        minmax.max = mmr.max;
    }
    return minmax;
}

module.exports = getMinMax