const inputPrice = document.querySelector('#price')
const inputPeople = document.querySelector('#people')
const calculate = document.querySelector('.count')
const tipPercent = document.querySelector('#tip')
const error = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const splitter = () => {
	if (inputPeople.value === '' || inputPrice.value === '' || tipPercent === 0) {
		error.textContent = 'Please fill in all the blank!'
	} else {

		error.textContent = ''
		costInfo.style.display = 'block'
		const tip = tipPercent.value
		const bill = (Number(inputPrice.value) + (Number(inputPrice.value) * Number(tip))) / Number(inputPeople.value)
		cost.textContent = bill.toFixed(2)

        
	}
}

calculate.addEventListener('click', splitter)
