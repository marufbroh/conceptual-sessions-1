{
    type User = {
        id: number,
        name: string
    }

    const users: User[] = [
        {
            id: 12,
            name: "Tamim"
        },
        {
            id: 13,
            name: "Iqbal"
        },
        {
            id: 14,
            name: "Maruf"
        },
    ];

    type User1 = {
        id: number,
        name: string,
        title: string
    }

    const users1: User1[] = [
        {
            id: 15,
            name: "Oli",
            title: "Dev"
        },
        {
            id: 16,
            name: "Hasan",
            title: "Dev"
        }
    ]


    function getPropertyFromArray<T, K extends keyof T>(array: T[], key: K): T[K][] {
        return array.map(obj => obj[key])
    }

    const extractedName = getPropertyFromArray(users1, "title")

    console.log(extractedName);
}




