const patients = () => [
	{
		id: 1,
		familyId: 1,
		profile: {
			name: 'Juan',
			lastName: 'Perez',
			age: 25,
			weight: 80,
			height: 1.80,
		},
		auth: {
			email: 'juan-perez@salud-digna.com'
		}
	},
	{
		id: 2,
		familyId: 1,
		profile: {
			name: 'Maria',
			lastName: 'Gomez',
			age: 30,
			weight: 60,
			height: 1.60,
		},
		auth: {
			email: 'maria-gomez@salud-digna.com',
		}
	},
	{
		id: 3,
		familyId: 2,
		profile: {
			name: 'Pedro',
			lastName: 'Gonzalez',
			age: 40,
			weight: 90,
			height: 1.90,
		},
		auth: {
			email: ''
		},
	},
	{
		id: 4,
		familyId: 2,
		profile: {
			name: 'Jose',
			lastName: 'Gonzalez',
			age: 10,
			weight: 30,
			height: 1.20,
		},
		auth: {
			email: ''
		}
	}
]

export default patients
