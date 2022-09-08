const ref = {
input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
    span: document.querySelector('#name-output'),
}

ref.input.addEventListener('input', onInputChange);
function onInputChange(event) {
    ref.output.textContent = event.currentTarget.value;
    if (!ref.span.textContent) {
        ref.output.textContent = "Anonymous";
    };
}
