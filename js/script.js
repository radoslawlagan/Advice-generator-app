const adviceNumber = document.querySelector('.advice-box__number')
const adviceText = document.querySelector('.advice-box__text-content')
const iconBox = document.querySelector('.advice-box__icon-box')
const URL = 'https://api.adviceslip.com/advice'

const getAdvice = () => {
	fetch(URL, { cache: 'no-store' })
		.then((res) => res.json())
		.then(
			(data) => (
				(adviceNumber.textContent = data.slip.id),
				(adviceText.textContent = data.slip.advice)
			)
		)
		.catch((err) => console.log(err))

	iconBox.classList.add('rotate')
	setTimeout(() => iconBox.classList.remove('rotate'), 1000)
}

getAdvice()

iconBox.addEventListener('click', getAdvice)
