chrome.storage.sync.get('passwords', function (pass) {
    App.passwords = JSON.parse(pass['passwords'])
    App.init()
})


var App = {
    passwords: [],
    init() {
        parser = new DOMParser();
        htmlDoc = document.getElementsByTagName("form")
        let username = null
        for (let formsIndex = 0; formsIndex < htmlDoc.length; formsIndex++) {
            let textscounter = 0, passwordscounter = 0;
            for (let inputsIndex = 0; inputsIndex < htmlDoc[formsIndex].elements.length; inputsIndex++) {
                if (htmlDoc[formsIndex].elements[inputsIndex].type == "text" || htmlDoc[formsIndex].elements[inputsIndex].type == "email") {
                    textscounter++;
                    username = htmlDoc[formsIndex].elements[inputsIndex];
                } else if (htmlDoc[formsIndex].elements[inputsIndex].type == "password") {
                    passwordscounter++;
                    password = htmlDoc[formsIndex].elements[inputsIndex];
                }
            }
            if (textscounter == 1 && passwordscounter == 1) {
                const currentWebsite = window.location.hostname
                for (let i = 0; i < App.passwords.length; i++) {
                    if (currentWebsite.indexOf(this.passwords[i].website.toLowerCase()) != -1) {
                        username.value = this.passwords[i].account;
                        password.value = "";
                        break;
                    }
                }
            }

        }
    }
}
