{
    //

    const addFunction = (...rest: number[]): number => {
        return rest.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    }

    console.log(addFunction(1,2,3));





    //
}