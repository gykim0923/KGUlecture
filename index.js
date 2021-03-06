// const textarea = document.getElementsByClassName('text');
const textarea = document.getElementById('text');
const changeWord = document.getElementById('change-word');
const targetWord = document.getElementById('target-word');
const submit = document.getElementById('submit');
const result = document.getElementById('new-text');
const textareValue = textarea.value;
// result.value = textareValue
// console.log(textarea.value)
// 함수를 만드는 두가지 방법(function)
function changeText(text, word, newWord) {
	// 이곳에서 text를 가공해서 반환해주세요
	const words = text.split(" ");
	
	const changedWords = words.map(_word => {
		const isSame = _word === word
		if(isSame) {
			return newWord
		}
		return _word
	})
	const changedText = changedWords.join(" ")
	return changedText
}

// 함수를 만드는 두가지 방법(arrow function)
const onClickSubmit = (e) => {
	const text = textarea.value
	const word = targetWord.value
	const newWord = changeWord.value
	
	result.value = changeText(text, word, newWord)
}

submit.addEventListener('click', onClickSubmit)
