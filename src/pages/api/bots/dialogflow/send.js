import * as r_ from "radash";

export default async function handler(req, res) {
	return res.status(200).json(    {
			"text": {
				"text": [
					"Hola, Bienvenido al servicio de nutricion de salud digna. ¿En qué puedo ayudarte?"
				]
			}
		},
		{
			"quickReplies": {
				"title": "Por favor selecciona una de las siguientes opciones:",
				"quickReplies": [
					"Aplicacion movil de nutricion",
					"Conocer mi plan de nutricion",
					"Agendar una cita con un nutriologo",
				]
			}
		}
	)
}
