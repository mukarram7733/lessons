function median() {
	return (
		[...arguments].reduce(function (sum, number) {
			return sum + number
		}) / arguments.length
	)
}

console.log(median(4, 3, 7, 8))
console.log(median(4, 3, 7, 93, -34))

// Function definition - funktsiya izohi
const newMedian = median
console.log(median)
console.log(newMedian(5, 8, 45))

// Function Invocation

// With event
document.getElementById('button').addEventListener('click', function () {
	console.log(median(3, 7, 45, 789))
})

// With JavaScript code
console.log(median(45, 67, -123, 567))

// Calls itself
const celsius = (function () {
	return (5 / 9) * (45 - 32)
})()

console.log(celsius)
