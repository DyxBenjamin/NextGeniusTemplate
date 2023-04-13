import * as r_ from "radash";

export default async function handler(req, res) {
    const recipes = [
        {
            name: 'Desayuno',
            calories: 250,
            recipeName: 'Huevo con frijoles',
            image: 'https://static.vecteezy.com/system/resources/previews/019/614/281/non_2x/breakfast-graphic-clipart-design-free-png.png',
            ingredients: [
                { name: 'Espinacas', quantity: '2 tazas', calories: 14 },
                { name: 'Fresas', quantity: '1 taza', calories: 49 },
                { name: 'Nueces', quantity: '1/4 taza', calories: 196 },
                { name: 'Queso de cabra', quantity: '1 oz', calories: 70 },
                { name: 'Vinagreta balsámica', quantity: '2 cucharadas', calories: 21 },
            ],
        },
        {
            name: 'Comida',
            calories: 350,
            recipeName: 'Carne con pure de papa',
            image: 'https://www.pngplay.com/wp-content/uploads/9/Meal-PNG-Free-File-Download.png',
            ingredients: [
                { name: 'Filete de salmón', quantity: '6 oz', calories: 240 },
                { name: 'Pimiento rojo', quantity: '1', calories: 37 },
                { name: 'Pimiento amarillo', quantity: '1', calories: 50 },
                { name: 'Cebolla roja', quantity: '1/2', calories: 16 },
                { name: 'Aceite de oliva', quantity: '2 cucharadas', calories: 239 },
                { name: 'Sal', quantity: 'al gusto', calories: 0 },
                { name: 'Pimienta negra', quantity: 'al gusto', calories: 0 },
            ],
        },
        {
            name: 'Cena',
            calories: '',
            recipeName: '',
            image: 'https://cdn-icons-png.flaticon.com/512/347/347282.png',
            ingredients: [
                { name: 'Quinoa', quantity: '1 taza', calories: 222 },
                { name: 'Aguacate', quantity: '1/2', calories: 160 },
                { name: 'Tomate', quantity: '1', calories: 22 },
                { name: 'Cebolla morada', quantity: '1/4', calories: 16 },
                { name: 'Zumo de limón', quantity: '2 cucharadas', calories: 6 },
                { name: 'Aceite de oliva', quantity: '1 cucharada', calories: 120 },
                { name: 'Cilantro fresco', quantity: '2 cucharadas', calories: 1 },
                { name: 'Sal', quantity: 'al gusto', calories: 0 },
                { name: 'Pimienta negra', quantity: 'al gusto', calories: 0 },
            ],
        }
    ];
    return r_.isEmpty(recipes) ? res.status(400).send("ERROR") : res.status(200).json(recipes)
}
