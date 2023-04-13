const PlaceholderUsers = [
	{
		id: 1,
		familyId: 1,
		status: 'active',
		profile: {
			name: 'Smitty Werben',
			lastName: 'Man Jensen',
			phone: '123456789',
			email: 'example@email.com',
			birthDate: '1990-01-01',
			age: 30,
		},
		nutritionist: {
			id: 'N1',
			name:'Nutritionist 1',
			lastName:'Nutritionist 1',
			phone: '123456789',
			email: 'example@salud-digna.com'
		},
		personalData: {
			weight: 80,
			height: 1.80,
			genero:'Masculino',
			physicalActivity: 'Sedentario',
			specificObjectives: 'Ninguno',
		},
		diet: {
			type:'Vegetariana',
			allergies: 'Ninguna',
			preferences: 'Ninguna',
			restrictions: 'Ninguna',
			intolerances: 'Ninguna',
			dislikes: 'Ninguna',
			likes: 'Ninguna',
		},
		medical: {
			chronicDiseases: 'Ninguna',
			medications: 'Ninguna',
			medicationsAllergies: 'Ninguna',
			medicationsIntolerances: 'Ninguna',
			medicationsRestrictions: 'Ninguna',
			medicationsDislikes: 'Ninguna',
			hormonalTherapy: 'Ninguna',
			surgeries: 'Ninguna',
		},
		nutritionalRequirements: {
			calories:{
				total: 2000,
				units: 'kcal',
				breakfast: 500,
				lunch: 500,
				dinner: 500,
				snacks: 500,
			},
			proteins:{
				total: 200,
				units: 'g',
				breakfast: 50,
				lunch: 50,
				dinner: 50,
				snacks: 50,
			},
			carbohydrates:{
				total: 200,
				units: 'g',
				breakfast: 50,
				lunch: 50,
				dinner: 50,
				snacks: 50,
			},
			fats:{
				total: 200,
				units: 'g',
				breakfast: 50,
				lunch: 50,
				dinner: 50,
				snacks: 50,
			},
			fiber:{
				total: 200,
				units: 'g',
				breakfast: 50,
				lunch: 50,
				dinner: 50,
				snacks: 50,
			},
			water:{
				total: 200,
				units: 'ml',
				breakfast: 50,
				lunch: 50,
				dinner: 50,
				snacks: 50,
			},
			micronutrients:{
				vitaminA: 200,
				vitaminB1: 200,
				vitaminB2: 200,
				vitaminB3: 200,
				vitaminB5: 200,
				vitaminB6: 200,
				vitaminB9: 200,
				vitaminB12: 200,
				vitaminC: 200,
				vitaminD: 200,
				vitaminE: 200,
				vitaminK: 200,
				calcium: 200,
				chromium: 200,
				copper: 200,
				iodine: 200,
				iron: 200,
				magnesium: 200,
				manganese: 200,
				molybdenum: 200,
				phosphorus: 200,
				potassium: 200,
				selenium: 200,
				sodium: 200,
				zinc: 200,
			},
			macroNutrients:{
				cholesterol: 200,
				saturatedFats: 200,
				unsaturatedFats: 200,
				transFats: 200,
			}
		}
	},
	{
		id: 2,
		familyId: 1,
		status: 'active',
		profile: {
			name: 'Benjamin',
			lastName: 'Garrido',
			age: 26,
			data: {
				weight: 80,
				height: 1.80,
			}
		}
	},
	{
		id: 3,
		familyId: 1,
		status: 'active',
		profile: {
			name: 'Alexis',
			lastName: 'Medina',
			age: 27,
		},
		data: {
			weight: 80,
			height: 1.80,
		}
	}
]

export default PlaceholderUsers;
