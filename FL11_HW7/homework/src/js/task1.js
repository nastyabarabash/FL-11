let oldText = '';
let newText = prompt('Enter your e-mail', oldText)
const MIN_EMAIL_LENGTH = 6;
const MIN_PASSWORD_LENGTH = 5;

if (newText === '') {
    alert('Canceled');
} else if (newText) {
    if (newText.length < MIN_EMAIL_LENGTH) {
        alert('I don’t know any emails having name length less than 6 symbols');
    } else if (newText === 'user@gmail.com' || newText === 'admin@gmail.com') {
        let password = prompt('Enter password', '')
        if (password === '') {
            alert('Canceled');
        } else if (password) {
            if (newText === 'user@gmail.com') {
                if (password === 'UserPass') {
                    if (confirm('Do you want to change your password?')){
                        let newPas = prompt('Enter your old password', '');
                        if (newPas === password) {
                            let changePas = prompt('Enter new password', '');
                            if (changePas.length < MIN_PASSWORD_LENGTH) {
                                alert('It’s too short password. Sorry.');
                            } else {
                                let changePassword = prompt('Repeat new password');
                                if (changePassword === changePas){
                                    alert('You have successfully changed your password.');
                                } else {
                                    alert('You wrote the wrong password.');
                                }
                            }
                        } else {
                            alert('You wrote the wrong password.');
                        }
                    } else {
                        alert('You have failed the change.');
                    }
                } else {
                    alert('Wrong password');
                }
            } else if (newText === 'admin@gmail.com') {
                if (password === 'AdminPass') {
                    if (confirm('Do you want to change your password?')){
                        let newPas = prompt('Enter your old password', '');
                        if (newPas === password) {
                            let changePas = prompt('Enter new password', '');
                            if (changePas.length < MIN_PASSWORD_LENGTH) {
                                alert('It’s too short password. Sorry.');
                            } else {
                                let changePassword = prompt('Repeat new password');
                                if (changePassword === changePas){
                                    alert('You have successfully changed your password.');
                                } else {
                                    alert('You wrote the wrong password.');
                                }
                            }
                        } else {
                            alert('You wrote the wrong password.');
                        }
                    } else {
                        alert('You have failed the change.');
                    }
                } else {
                    alert('Wrong password');
                }
            }
        } else {
            alert('Canceled');
        }
    } else {
        alert('I don’t know you');
    }
} else {
    alert('Canceled');
}

