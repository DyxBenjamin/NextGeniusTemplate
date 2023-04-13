import * as r_ from "radash";

export default async function handler(req, res) {
    const nutritionArticles = [
        {
            title: '10 alimentos para aumentar la energía durante el día',
            image: 'https://media.vozpopuli.com/2021/02/alimento-debes-comer-reducir-colesterol_1272482775_13725938_1020x574.jpg',
            author: 'Ana García',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut velit vel justo blandit vestibulum. In hac habitasse platea dictumst. Fusce vel purus augue. Fusce quis tellus euismod, interdum odio nec, dignissim nisi. Nam fringilla sapien nec turpis malesuada, vel feugiat arcu dignissim. Aliquam bibendum libero vitae ex tincidunt mollis. Mauris auctor augue id orci bibendum, quis convallis velit sagittis. Aliquam vel semper neque, sed ullamcorper mi. Aliquam bibendum pellentesque nisl, at rhoncus dolor commodo vel.',
        },
        {
            title: 'Cómo mejorar tu sistema inmunológico con la dieta',
            image: 'https://s2.abcstatics.com/media/bienestar/2020/03/17/alimentos-sistema-inmunitario-1-kUfG--1200x630@abc.jpg',
            author: 'Pedro Hernández',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus ex eget enim tempus, at tristique orci malesuada. Fusce ut est nibh. Proin tempor euismod orci vitae dapibus. Nullam bibendum tellus eu leo hendrerit, auctor interdum est malesuada. Sed bibendum quis metus ac hendrerit. Ut quis velit vel nulla sagittis finibus. Integer eleifend ligula a nibh sollicitudin faucibus. Praesent ac fermentum libero, sit amet facilisis arcu. Praesent nec sem vel eros auctor fringilla. Sed mollis justo vel leo volutpat consectetur.',
        },
        {
            title: 'Cómo planificar tus comidas para una alimentación saludable',
            image: 'https://www.recetasderechupete.com/wp-content/uploads/2020/01/Menu-semanal-tuper.jpg',
            author: 'María Torres',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum varius commodo. Fusce placerat urna nec ipsum convallis, a blandit erat ullamcorper. Duis euismod libero vitae tellus commodo, sit amet aliquet quam feugiat. Sed pulvinar auctor eros, eu rutrum leo dictum quis. Duis pharetra sapien ac arcu hendrerit vestibulum. Pellentesque eget mauris at mi commodo pharetra. Donec sit amet est dui. Fusce dapibus, nisl ac euismod ultricies, magna purus rhoncus enim, vel fermentum ipsum nisl a justo.',
        },
    ];
    return r_.isEmpty(nutritionArticles) ? res.status(400).send("ERROR") : res.status(200).json(nutritionArticles)
}
