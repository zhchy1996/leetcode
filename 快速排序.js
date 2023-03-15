const quickSort = (arr) => {
    if (arr.length <= 1) return arr;
    const pivod = arr[0];
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivod) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivod, quickSort(right));
}

const quickSort1 = arr => {
    const sort = (arr, low, hight) => {
        const pivod = arr[low];

    }
}

// console.log(quickSort([9, 1231, 123, 123, 13, 1, 0]))

function partition(arr, low, high) {
    let pivot = arr[low];
    while (low < high) {
        while (low < high && arr[high] > pivot) {
            --high;
        }
        arr[low] = arr[high];
        while (low < high && arr[low] <= pivot) {
            ++low;
        }
        arr[high] = arr[low];
    }
    arr[low] = pivot;
    return low;
}

function quickSort2(arr, low, high) {
    if (low < high) {
        let pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
    return arr;
}


// const quickSortPointer = (arr) => {
//     const sort = (arr, lp, rp) => {
//         const pivot = arr[lp];
//         while(lp < rp) {
//             while(lp < rp && pivot < arr[rp]) {
//                 rp--;
//             }
//             arr[lp] = arr[rp];
//             while(lp < rp && pivot >= arr[lp]) {
//                 lp++;
//             }
//             arr[rp] = arr[lp];
//         }
//         arr[lp] = pivot;
//         return lp;
//     }
    
//     const quickSort = (arr, lp, rp) => {
//         if (lp < rp) {
//             const start = sort(arr, lp, rp);
//             // if (start === 0 || start === arr.length)
//             console.log(start)
//             quickSort(arr, lp, start - 1);
//             quickSort(arr, start + 1, rp);
//         }
//     }
//     quickSort(arr, 0 , arr.length - 1)
//     return arr
// }

const quickSortPointer = arr => {
    const sort = (arr, low, high) => {
        const pivod = arr[low];
        while (low < high) {
            while(low < high && pivod < arr[high]) {
                high--;
            }
            arr[low] = arr[high];
            while(low < high && pivod >= arr[low]) {
                low++;
            }
            arr[high] = arr[low];
        }
        arr[low] = pivod;
        return low;
    }

    const quickSort = (arr, low, high) => {
        if (low < high) {
            const p = sort(arr, low, high);
            quickSort(arr, low, p - 1);
            quickSort(arr, p + 1, high);
        }
    }
    quickSort(arr, 0, arr.length - 1);
    return arr;
};

let arr = [9, 1231, 123, 123, 13, 1, 0];

console.log(quickSortPointer(arr));
