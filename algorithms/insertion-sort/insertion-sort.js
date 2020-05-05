// TODO
    // How to handle alpha numeric search in insertion sort
        // what should be the rules to handle such sort
        // all the numbers should come frst i guess

function insertionSort(array) {

    if (!(array instanceof Array)) throw new Error(`Input should be of instance Array. Given '${array.constructor.name}'`);

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
    return array;
};

class InsertionSort {
    constructor(array) {
        this.array = array;
        this._sortedIndex = 0;
        this.sort();
    }
    sort() {
        if (!(this.array instanceof Array)) throw new Error(`Input should be of instance Array. Given '${this.array.constructor.name}'`);

        for (; this._sortedIndex < this.array.length; this._sortedIndex++) {

            let i = this._sortedIndex;

            let key = Number(this.array[i]);

            // validating that each element is a number
            if (isNaN(key)) throw new Error(`All the elements of the array should be a number or a valid number string. There is a non-numeric charcter '${this.array[i]}' in the array at index '${i}'`);

            let j = i - 1;

            while (key < this.array[j] && j >= 0) {
                this.array[j + 1] = this.array[j];
                j = j - 1;
            }
            this.array[j + 1] = key;
        };
        return this.array;
    }
    push(...args) {
        console.log('executed');
        this.array.push(...args);
        this.sort();
    }
};

// TODO
    // create a function insertionSortOnline that takes a array and returns a proxy array and there should be handler for the push method and should re-sort the array