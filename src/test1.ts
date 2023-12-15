{
    //

    const keyValueArray: [string, any][] = [
        ["id", 12],
        ["name", "Tamim"],
        ["isMarried", true]
    ]

    function arrayToObject<T extends string, U>(array: [T, U][]): Record<T, U> {
        return array.reduce((finalObj, [key, value]) => {
            finalObj[key] = value;
            return finalObj
        }, {} as Record<T, U>);
    }

    function arrayToObjectForEach<T extends string, U>(array: [T, U][]): Record<T, U> {
        let transformedObject = {} as Record<T, U>;

        array.forEach(([key, value], index) => { // index dorkar hoy nai
            transformedObject[key] = value
        })

        return transformedObject;
    }

    console.log(arrayToObject(keyValueArray));
    console.log(arrayToObjectForEach(keyValueArray));

    //
}