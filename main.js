const swap = (arr, idx1, idx2) => {
    const tmp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = tmp;  
};

const circleSortR = (arr, hi, lo, numSwaps) => {
    if (lo === hi) {
        return numSwaps;
    }

    const high = hi;
    const low = lo;
    const mid = Math.floor((hi - lo) / 2);

    while (lo < hi) {
        if (arr[lo] > arr[hi]) {
            swap(arr, lo, hi);
            numSwaps++;
        }
        lo++;
        hi--;
    }

    if (lo === hi && arr[lo] > arr[hi + 1]) {
        swap(arr, lo, hi + 1);
        numSwaps++;
    }

    numSwaps = circleSortR(arr, low, low + mid, numSwaps);
    numSwaps = circleSortR(arr, low + mid + 1, high, numSwaps);

    return numSwaps;  
};

const circleSort = (arr) => {
    if (arr.length > 0) {
        let result = 0;
        do {
            result = circleSortR(arr, 0, arr.length - 1, 0);
            console.log(result);
        } while (result != 0);
    }
};

const a = [2, 14, 4, 6, 8, 1, 3, 5, 7, 11, 0, 13, 12, -1];

console.log(a);
circleSort(a, 0, a.length - 1, 0);
console.log(a);