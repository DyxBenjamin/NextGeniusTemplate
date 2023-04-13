import * as r_ from "radash";

export default async function handler(req, res) {
    const recipes = [
        {
            name: 'Ensalada de espinacas y fresas',
            image: 'https://cdn7.kiwilimon.com/recetaimagen/3443/1295.jpg',
            calories: 250,
            ingredients: [
                { name: 'Espinacas', quantity: '2 tazas', calories: 14 },
                { name: 'Fresas', quantity: '1 taza', calories: 49 },
                { name: 'Nueces', quantity: '1/4 taza', calories: 196 },
                { name: 'Queso de cabra', quantity: '1 oz', calories: 70 },
                { name: 'Vinagreta balsámica', quantity: '2 cucharadas', calories: 21 },
            ],
        },
        {
            name: 'Salmón asado con vegetales',
            image: 'https://recetarius.com/wp-content/uploads/2020/12/salmon-al-horno.jpg',
            calories: 350,
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
            name: 'Ensalada de quinoa y aguacate',
            image: 'https://cdn7.kiwilimon.com/recetaimagen/34703/40304.jpg',
            calories: 320,
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
        },
        {
            name: 'Pollo al horno con verduras',
            image: 'https://images.hola.com/imagenes/cocina/recetas/20200130159369/pollo-horno-verduras/0-776-245/pollo-al-horno1-m.jpg',
            calories: 400,
            ingredients: [
                { name: 'Pechuga de pollo', quantity: '6 oz', calories: 165 },
                { name: 'Brócoli', quantity: '1 taza', calories: 55 },
                { name: 'Zanahorias', quantity: '1 taza', calories: 52 },
                { name: 'Pimiento amarillo', quantity: '1', calories: 50 },
                { name: 'Aceite de oliva', quantity: '2 cucharadas', calories: 239 },
                { name: 'Ajo', quantity: '2 dientes', calories: 9 },
                { name: 'Tomillo fresco', quantity: '2 cucharadas', calories: 2 },
                { name: 'Sal', quantity: 'al gusto', calories: 0 },
                { name: 'Pimienta negra', quantity: 'al gusto', calories: 0 },
            ],
        },
    ];
    return r_.isEmpty(recipes) ? res.status(400).send("ERROR") : res.status(200).json(recipes)
}
