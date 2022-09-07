const ref = {
    inputRef: document.querySelector('#validation-input'),
    dataLengthRef: Number(document.querySelector('[data-length="6"]').dataset.length),
}

ref.inputRef.addEventListener('blur', validation);
function validation(element) {
    if (element.target.value.length === ref.dataLengthRef) {
        ref.inputRef.classList.add('valid');
        ref.inputRef.classList.remove('invalid');
        return
    }
        ref.inputRef.classList.add('invalid');
        ref.inputRef.classList.remove('valid');
}