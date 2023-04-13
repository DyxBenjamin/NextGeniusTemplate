import * as r_ from "radash";

export default async function handler(req, res) {
    const users = [
        {
            id: 1,
            name: 'Ana',
            lastName: 'González',
            avatar: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            age: 28,
            sex: 'female',
            weight: 62.5,
            requirements: {
                calories: 2000,
                proteins: 200,
                carbohydrates: 200,
                fats: 200,
            }
        },
        {
            id: 2,
            name: 'Juan',
            lastName: 'Pérez',
            avatar:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            age: 35,
            sex: 'male',
            weight: 78.9,
            requirements: {
                calories: 2400,
                proteins: 200,
                carbohydrates: 300,
                fats: 200,
            }
        },
        {
            id: 3,
            name: 'María',
            lastName: 'López',
            avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
            age: 42,
            sex: 'female',
            weight: 70.2,
            requirements: {
                calories: 1600,
                proteins: 180,
                carbohydrates: 200,
                fats: 100,
            }
        },
    ];
    return r_.isEmpty(users) ? res.status(400).send("ERROR")  : res.status(200).json(users)
}
