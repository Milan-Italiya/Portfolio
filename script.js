    document.addEventListener('DOMContentLoaded', () => {
        let submit = document.getElementById('submit-message')
        let form = document.getElementById('contact-form')
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            let name = document.getElementById('name').value.trim()
            let email = document.getElementById('email').value.trim()
            let message = document.getElementById('message').value.trim()
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            console.log(submit)

            if (name === "" || email === "" || message === "") {
                submit.style.color = "red"
                submit.textContent = "Please fill in all required fields."
            } else if (!emailPattern.test(email)) {
                submit.style.color = "red"
                submit.textContent = "Please enter the valid email address."
            }

            else {
                submit.style.color = "green"
                submit.textContent = "Thank you! Your response has been sent successfully!"
                form.reset()
            }
        })
    })