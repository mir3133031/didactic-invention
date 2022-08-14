let number = [12, 2121, 1212, 33, 311, 1, 31,]
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array.length - 1; k++) {
            if (array[k] > array[k + 1]) {
                let a = array[k]
                let b = array[k + 1]
                array[k] = b
                array[k + 1] = a
            }
        }
    }
    return array
}
console.log(bubbleSort(number));