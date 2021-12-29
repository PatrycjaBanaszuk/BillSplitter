const price = document.querySelector('#price')
const people = document.querySelector('#people')
const calculate = document.querySelector('.count')
const tip = document.querySelector('#tip')
const error = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const checkBill = () => {
	if (people.value === '' || price.value === '' || tip === 0) {
		error.textContent = 'Please fill in all the blank!'
		costInfo.textContent = ''
	} else {
		error.textContent = ''

		countBill()
	}
}

const countBill = () => {
	const newPrice = Number(price.value)
	const newPeople = Number(people.value)
	const newTip = Number(tip.value)

	const sum = (newPrice + newPrice * newTip) / newPeople

	costInfo.style.display = 'block'
	cost.textContent = sum.toFixed(2)
}

calculate.addEventListener('click', checkBill)
