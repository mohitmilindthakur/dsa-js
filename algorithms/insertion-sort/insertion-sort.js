// TODO
    // How to handle alpha numeric search in insertion sort
        // what should be the rules to handle such sort
        // all the numbers should come frst i guess

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {

        let key = Number(array[i]);

        // validating that each element is a number
        if (isNaN(key)) throw new Error(`All the elements of the array should be a number or a valid number string. There is a non-numeric charcter '${array[i]}' in the array at index '${i}'`);

        let j = i - 1;

        while (key < array[j] && j >= 0) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    };   
}