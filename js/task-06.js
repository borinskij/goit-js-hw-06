const ref = {
    inputRef: document.querySelector('#validation-input'),
    dataLengthRef: Number(document.querySelector('[data-length="6"]').dataset.length),
}

ref.inputRef.addEventListener('blur', validation);
function validation(element) {
    if (element.target.value.length === ref.dataLengthRef) {
        return  onAddClassRemove('valid', 'invalid');    
    }
    return  onAddClassRemove('invalid', 'valid');
}
function onAddClassRemove(on, off) {
        ref.inputRef.classList.add(on);
        ref.inputRef.classList.remove(off);
}


// ref.inputRef.addEventListener('blur', validation);
// function validation(element) {
//     if (element.target.value.length === ref.dataLengthRef) {
//         ref.inputRef.classList.add('valid');
//         ref.inputRef.classList.remove('invalid');
//         return
//     }
//         ref.inputRef.classList.add('invalid');
//         ref.inputRef.classList.remove('valid');
// }
