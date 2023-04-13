import * as r_ from "radash";

export default async function handler(req, res) {
    const recipes = [
        {
            name: 'Desayuno',
            calories: 250,
            recipeName: 'Huevo con frijoles'
        },
        {
            name: 'Comida',
            calories: 350,
            recipeName: 'Carne con pure de papa'
        },
        {
            name: 'Cena',
            calories: '',
            recipeName: ''
        }
    ];
    return r_.isEmpty(recipes) ? res.status(400).send("ERROR") : res.status(200).json(recipes)
}
