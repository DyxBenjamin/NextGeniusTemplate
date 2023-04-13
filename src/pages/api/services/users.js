import * as r_ from "radash";

export default async function handler(req, res) {
    const users = [
        {
            id: 1,
            name: 'Ana',
            lastName: 'González',
            age: 28,
            sex: 'female',
            weight: 62.5,
        },
        {
            id: 2,
            name: 'Juan',
            lastName: 'Pérez',
            age: 35,
            sex: 'male',
            weight: 78.9,
        },
        {
            id: 3,
            name: 'María',
            lastName: 'López',
            age: 42,
            sex: 'female',
            weight: 70.2,
        },
    ];
    return r_.isEmpty(users) ? res.status(400).send("ERROR")  : res.status(200).json(users)
}
