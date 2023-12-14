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


function getPropertyFromArray<T, K extends keyof T>(array: T[], key: K): T[K][] {
    return array.map(obj => obj[key])
}

const extractedName = getPropertyFromArray(users, "name")

console.log(extractedName);



