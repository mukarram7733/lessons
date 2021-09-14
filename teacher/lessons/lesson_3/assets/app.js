const input = document.getElementById('search')
const elements = document.getElementById('elements')

let items = [
	{
		icon: '../assets/images/home.svg',
		title: 'Property',
	},
	{
		icon: '../assets/images/car.svg',
		title: 'Car',
	},
	{
		icon: '../assets/images/boat.svg',
		title: 'Boat',
	},
	{
		icon: '../assets/images/Carpet.svg',
		title: 'Carpet',
	},
]

let filteredItems = items

function filterItems() {
	filteredItems = items.filter((item) =>
		item.title.toLowerCase().includes(input.value.toLowerCase())
	)

	display()
}

function display() {
	let list = "<ul>"
	filteredItems.map((item) => list += "<li>" + item.title + "</li>")
	list += "</ul>"
	elements.innerHTML = list
}

display()