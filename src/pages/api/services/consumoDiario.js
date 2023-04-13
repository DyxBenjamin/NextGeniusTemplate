import * as r_ from "radash";

export default async function handler(req, res) {
    const recipes = [
        {
            name: 'Desayuno',
            calories: 250,
            recipeName: 'Huevo con frijoles',
            image: 'https://static.vecteezy.com/system/resources/previews/019/614/281/non_2x/breakfast-graphic-clipart-design-free-png.png'
        },
        {
            name: 'Comida',
            calories: 350,
            recipeName: 'Carne con pure de papa',
            image: 'https://www.pngplay.com/wp-content/uploads/9/Meal-PNG-Free-File-Download.png'
        },
        {
            name: 'Cena',
            calories: '',
            recipeName: '',
            image: 'https://cdn-icons-png.flaticon.com/512/347/347282.png'
        }
    ];
    return r_.isEmpty(recipes) ? res.status(400).send("ERROR") : res.status(200).json(recipes)
}
