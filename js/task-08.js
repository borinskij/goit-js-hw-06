// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.


const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', targetInputHandler);

function targetInputHandler(event) {
    event.preventDefault();
    // console.dir(event.currentTarget.elements);
    const { email, password } = event.currentTarget.elements;
    if (!email.value.trim() || !password.value.trim()) {
       return alert('Все поля должны быть заполнены')
    }
    const userLoginData = {
        email: email.value.trim(),
        password: password.value.trim(),
    }
    console.dir(userLoginData)
    event.currentTarget.reset();
}