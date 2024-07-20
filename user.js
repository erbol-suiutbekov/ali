function sumArray(array) {
    const num = Math.max(...array)
    const num2 = Math.min(...array)
    const arr = array.filter(el => el === num)
    const min = array.filter(el => el === num2)
    const ob = array.filter(el => el !== num).filter(el => el !== num2)
    const min2 = min.length
    const arr2 = arr.length
    if (arr2 === 1 && min2 === 1) {
        return ob.reduce((acc,el) => acc + el ,0 )
    }
else {
    return arr.slice(1)
}
    }
    console.log(sumArray([ 6, 0, 1, 10, 10,10]));