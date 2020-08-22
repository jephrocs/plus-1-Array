upArray = (arr) => {
    // case for empty array
    if (arr.length === 0) {
        return null
    } else
        empArr = []
    const nonSort = arr.toString()
    for (var i = 0; i < arr.length; i++) {
        arr.sort(function (a, b) { return a - b })
        // case for negative, non single digits
        if (arr[0] < 0 || arr[arr.length - 1] > 9) {

            return null;
        }
        // case for big numbers
        if (arr.length > 17) {
            var newArr = nonSort.replace(/^[, ]+|[, ]+$|[, ]+/g, " ").split(" ");

            for (var j = 0; j < newArr.length; j++) {
                empArr.push(+newArr[j])
            }
        } for (var k = 0; k < empArr.length; k++) {
            if (empArr[empArr.length - 1] < 9) {
                empArr.splice([empArr.length - 1], 1, empArr[empArr.length - 1] + 1)
                return empArr

            }
        } if (arr.length < 17) {
            var numStr = nonSort.split(',').join('');

            var addOne = parseInt(numStr) + 1;
            return addOne.toString(10).replace(/\D/g, '0').split('').map(Number)

        }
    }
}


//2nd solution if you can use BIGINT


upArray = (arr) => {

    const nonSort = arr.toString()
    for (var i = 0; i < arr.length; i++) {
        let sortArr = arr.sort(function (a, b) { return a - b })
        if (sortArr[0] < 0) {
            return null;
        }
        else if (sortArr[sortArr.length - 1] > 9) {
            return null
        }
        else {
            var numStr = nonSort.split(',').join('');
            console.log(numStr)

            var addOne = BigInt(numStr) + 1n;
            return addOne.toString(10).replace(/\D/g, '0').split('').map(Number)
        }
    }

}