
function login() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    if (name == 'usuario' && password == '1234') {
        const user = document.getElementById('exitoso').innerHTML = `Bienvenido ${name}`
        return;
    } else if (name == 0 || password == 0) {
        alert('nulo')
        return;
    } else {
        document.getElementById('error').innerHTML = 'Incorrecto <br/>'
    }

    if (name.length < 3 || password.length < 3) {
        document.getElementById('error').innerHTML += 'No puede ser menor a 3 caracteres'
        return;
    }
}


if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;

        if (name == 'usuario' && password == '1234') {
            const user = document.getElementById('exitoso').innerHTML = `Bienvenido ${name}`
            document.getElementById('error').innerHTML = ''
            return;
        }  else {
            document.getElementById('error').innerHTML = 'Incorrecto <br/>'
        }

        if (name.length < 3 ) {
            document.getElementById('error').innerHTML += 'nombre debe tener almenos 3 caracteres <br/>'  
        }
        if (password.length < 3) {
            document.getElementById('error').innerHTML += 'contraseña debe tener almenos 3 caracteres'
            
        }

    })
}