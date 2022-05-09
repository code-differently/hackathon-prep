export const addTwo = (a, b) => {
    return(a + b);
}

export const multiply = (a, b) => {
    return (a * b);
}


export default(function doSomeMath(){
    return {
        addTwo,
        multiply
    }
})()