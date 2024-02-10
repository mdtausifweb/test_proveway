function activeInput(event) {
    event.preventDefault()
    const parent = event.target.closest('.box')
    // if (!parent) return
    const allBoxes = document.querySelectorAll('.box')
    allBoxes.forEach(box => {
        if (box === parent) {
            // console.log('box === parent', box, parent);
            const isActive = box.classList.contains('active')
            if (isActive) {
                box.classList.remove('active')
            } else {
                box.classList.add('active')
            }
            const inputElement = box.querySelector('input[type="radio"]')
            if (inputElement) {
                inputElement.checked = !isActive
            }
        } else {
            box.classList.remove('active')
            const inputElement = box.querySelector('input[type="radio"]')
            if (inputElement) {
                inputElement.checked = false
            }
        }
    })
}