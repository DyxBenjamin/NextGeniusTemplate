import * as r_ from "radash";

export default async function handler(req, res) {
    const nutritionArticles = [
        {
            title: '10 alimentos para aumentar la energía durante el día',
            image: 'https://media.vozpopuli.com/2021/02/alimento-debes-comer-reducir-colesterol_1272482775_13725938_1020x574.jpg',
            author: 'Ana García',
            description:
                'La alimentación es un factor clave en la energía que tenemos durante el día. Comer de forma adecuada puede ayudarnos a tener más energía, mejorar nuestra concentración y reducir la fatiga. En este artículo, vamos a hablar de 10 alimentos que puedes incorporar en tu dieta para aumentar tu energía durante el día.\n' +
                '\n' +
                'Plátanos: los plátanos son una fuente natural de azúcares y carbohidratos complejos, que son una fuente de energía para el cuerpo. Además, son ricos en potasio, lo que ayuda a regular los niveles de líquidos y electrolitos en el cuerpo.\n' +
                '\n' +
                'Frutos secos: los frutos secos son una fuente de energía saludable y duradera. Contienen grasas saludables, proteínas y fibra, lo que los hace ideales para consumir como snack.\n' +
                '\n' +
                'Chocolate negro: el chocolate negro contiene cafeína y teobromina, dos compuestos que pueden mejorar la concentración y aumentar la energía. Además, el chocolate negro es rico en antioxidantes, que pueden ayudar a reducir la fatiga.\n' +
                '\n' +
                'Aguacate: el aguacate es rico en grasas saludables, proteínas y fibra, lo que lo hace una opción excelente para aumentar la energía durante el día. Además, el aguacate es rico en potasio, lo que ayuda a regular los niveles de líquidos y electrolitos en el cuerpo.\n' +
                '\n' +
                'Semillas de chía: las semillas de chía son ricas en fibra, proteínas y grasas saludables, lo que las hace una excelente opción para aumentar la energía durante el día. Además, las semillas de chía son ricas en antioxidantes, que pueden ayudar a reducir la fatiga.\n' +
                '\n' +
                'Huevos: los huevos son ricos en proteínas, lo que los hace ideales para consumir como desayuno. La proteína en los huevos puede ayudar a mantener los niveles de energía estables durante todo el día.\n' +
                '\n' +
                'Yogur: el yogur es rico en proteínas y probióticos, lo que lo hace una excelente opción para aumentar la energía durante el día. Además, el yogur es rico en calcio, que puede ayudar a mantener los huesos fuertes y sanos.\n' +
                '\n' +
                'Avena: la avena es rica en carbohidratos complejos, lo que la convierte en una excelente opción para consumir como desayuno. Los carbohidratos complejos se digieren lentamente, lo que puede ayudar a mantener los niveles de energía estables durante todo el día.\n' +
                '\n' +
                'Espinacas: las espinacas son ricas en hierro, un mineral que ayuda a transportar el oxígeno en el cuerpo. Si tienes deficiencia de hierro, puedes sentirte cansado y fatigado. Por lo tanto, es importante incluir alimentos ricos en hierro en tu dieta.\n' +
                '\n' +
                'Agua: el agua es esencial para mantener los niveles de energía durante el día. La deshidratación puede causar fatiga y disminuir la capacidad de concentración. Por lo tanto, es importante beber suficiente agua durante todo el día.\n' +
                '\n' +
                'En conclusión, hay muchos alimentos que puedes incorporar en tu dieta para aumentar tu energía durante el día. Es importante recordar que una alimentación equilibrada y variada es esencial para mantener los niveles',
        },
        {
            title: 'Cómo mejorar tu sistema inmunológico con la dieta',
            image: 'https://s2.abcstatics.com/media/bienestar/2020/03/17/alimentos-sistema-inmunitario-1-kUfG--1200x630@abc.jpg',
            author: 'Pedro Hernández',
            description:
                'Nuestro sistema inmunológico es esencial para mantenernos saludables, ya que nos protege de enfermedades e infecciones. Una dieta equilibrada y saludable es fundamental para mantener nuestro sistema inmunológico en óptimas condiciones. En este artículo, te explicamos cómo mejorar tu sistema inmunológico a través de la alimentación.\n' +
                '\n' +
                'Aumenta tu consumo de frutas y verduras: Las frutas y verduras son ricas en vitaminas, minerales y antioxidantes que ayudan a fortalecer nuestro sistema inmunológico. Algunas opciones recomendadas son las naranjas, kiwis, fresas, brócoli, espinacas, zanahorias y pimientos.\n' +
                '\n' +
                'Consume proteínas magras: Las proteínas son esenciales para la formación de anticuerpos y la producción de glóbulos blancos. Las proteínas magras como el pollo, pavo, pescado y legumbres son excelentes opciones para mantener una dieta saludable.\n' +
                '\n' +
                'Incorpora grasas saludables: Las grasas saludables, como las que se encuentran en el aceite de oliva, aguacate, frutos secos y pescado, son esenciales para mantener una buena salud. Estas grasas ayudan a reducir la inflamación y fortalecen nuestro sistema inmunológico.\n' +
                '\n' +
                'Asegúrate de consumir suficiente zinc: El zinc es un mineral esencial para la producción de glóbulos blancos y la regulación del sistema inmunológico. Algunas opciones ricas en zinc son la carne roja, los mariscos, las semillas de calabaza y el chocolate negro.\n' +
                '\n' +
                'Añade ajo a tus comidas: El ajo es rico en compuestos sulfurados que ayudan a mejorar la respuesta del sistema inmunológico. También tiene propiedades antibacterianas y antivirales que lo convierten en una excelente opción para prevenir enfermedades.\n' +
                '\n' +
                'Bebe suficiente agua: Mantenerse hidratado es esencial para un sistema inmunológico saludable. El agua ayuda a transportar nutrientes y a eliminar las toxinas del cuerpo.\n' +
                '\n' +
                'Evita los alimentos procesados: Los alimentos procesados suelen tener altos niveles de azúcares, grasas saturadas y aditivos químicos que pueden debilitar nuestro sistema inmunológico. Es importante limitar su consumo.\n' +
                '\n' +
                'En conclusión, una dieta saludable y equilibrada es fundamental para mantener nuestro sistema inmunológico fuerte y protegernos de enfermedades e infecciones. Asegúrate de incluir frutas y verduras, proteínas magras, grasas saludables, zinc y ajo en tu alimentación diaria y evita los alimentos procesados. Recuerda que la alimentación es una de las mejores formas de cuidar de tu salud y bienestar a largo plazo.',
        },
        {
            title: 'Cómo planificar tus comidas para una alimentación saludable',
            image: 'https://www.recetasderechupete.com/wp-content/uploads/2020/01/Menu-semanal-tuper.jpg',
            author: 'María Torres',
            description:'La alimentación es un factor clave en la energía que tenemos durante el día. Comer de forma adecuada puede ayudarnos a tener más energía, mejorar nuestra concentración y reducir la fatiga. En este artículo, vamos a hablar de 10 alimentos que puedes incorporar en tu dieta para aumentar tu energía durante el día.\n' +
                '\n' +
                'Plátanos: los plátanos son una fuente natural de azúcares y carbohidratos complejos, que son una fuente de energía para el cuerpo. Además, son ricos en potasio, lo que ayuda a regular los niveles de líquidos y electrolitos en el cuerpo.\n' +
                '\n' +
                'Frutos secos: los frutos secos son una fuente de energía saludable y duradera. Contienen grasas saludables, proteínas y fibra, lo que los hace ideales para consumir como snack.\n' +
                '\n' +
                'Chocolate negro: el chocolate negro contiene cafeína y teobromina, dos compuestos que pueden mejorar la concentración y aumentar la energía. Además, el chocolate negro es rico en antioxidantes, que pueden ayudar a reducir la fatiga.\n' +
                '\n' +
                'Aguacate: el aguacate es rico en grasas saludables, proteínas y fibra, lo que lo hace una opción excelente para aumentar la energía durante el día. Además, el aguacate es rico en potasio, lo que ayuda a regular los niveles de líquidos y electrolitos en el cuerpo.\n' +
                '\n' +
                'Semillas de chía: las semillas de chía son ricas en fibra, proteínas y grasas saludables, lo que las hace una excelente opción para aumentar la energía durante el día. Además, las semillas de chía son ricas en antioxidantes, que pueden ayudar a reducir la fatiga.\n' +
                '\n' +
                'Huevos: los huevos son ricos en proteínas, lo que los hace ideales para consumir como desayuno. La proteína en los huevos puede ayudar a mantener los niveles de energía estables durante todo el día.\n' +
                '\n' +
                'Yogur: el yogur es rico en proteínas y probióticos, lo que lo hace una excelente opción para aumentar la energía durante el día. Además, el yogur es rico en calcio, que puede ayudar a mantener los huesos fuertes y sanos.\n' +
                '\n' +
                'Avena: la avena es rica en carbohidratos complejos, lo que la convierte en una excelente opción para consumir como desayuno. Los carbohidratos complejos se digieren lentamente, lo que puede ayudar a mantener los niveles de energía estables durante todo el día.\n' +
                '\n' +
                'Espinacas: las espinacas son ricas en hierro, un mineral que ayuda a transportar el oxígeno en el cuerpo. Si tienes deficiencia de hierro, puedes sentirte cansado y fatigado. Por lo tanto, es importante incluir alimentos ricos en hierro en tu dieta.\n' +
                '\n' +
                'Agua: el agua es esencial para mantener los niveles de energía durante el día. La deshidratación puede causar fatiga y disminuir la capacidad de concentración. Por lo tanto, es importante beber suficiente agua durante todo el día.\n' +
                '\n' +
                'En conclusión, hay muchos alimentos que puedes incorporar en tu dieta para aumentar tu energía durante el día. Es importante recordar que una alimentación equilibrada y variada es esencial para mantener los niveles'
        },
    ];
    return r_.isEmpty(nutritionArticles) ? res.status(400).send("ERROR") : res.status(200).json(nutritionArticles)
}
