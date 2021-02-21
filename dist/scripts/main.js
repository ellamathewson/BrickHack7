let app = new Vue({
    el: '#header',
    data: {
        xRapidapiKey: 'b9f3e8d36dmsh79f02cf8bc2c270p12627fjsn24bc425bc668',
        xRapidapiHost: 'grammarbot.p.rapidapi.com',
        sentenceInput: "",
        resText: "",
    },
    methods: {

        check() {

            let newInput = this.sentenceInput.replaceAll(" ", "%20");
            let data = `text=${newInput}`
            const input = this.sentenceInput;

            const xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {

                if (this.readyState === 4 && this.status === 200) {
                    let res = JSON.parse(this.responseText);

                    //console.log(res);
                    res.matches.forEach(el => {
                        const toastDiv = document.createElement('div');
                        const header = document.createElement('div');
                        const body = document.createElement('div');
                        const span = document.createElement('span');
                        const close = document.createElement('button');
                        const errorMsg = document.createElement('p');

                        toastDiv.className = "toast";
                        toastDiv.setAttribute('data-autohide', 'false');

                        header.className = "toast-header";
                        body.className = "toast-body";
                        close.className = "ml-2 mb-1 close";
                        close.setAttribute('data-dismiss', 'toast');
                        close.type = "button";
                        span.setAttribute("aria-hidden", "true");
                        span.innerHTML = "&times;";
                        errorMsg.innerHTML =  el.message;

                        close.appendChild(span);
                        header.appendChild(close);
                        body.appendChild(errorMsg);
                        toastDiv.appendChild(header);
                        toastDiv.appendChild(body);

                        document.querySelector('#toastContainment').appendChild(toastDiv);
                    }); //Getting the message

                    if(res.matches.length === 0) {
                        document.querySelector('#promptAnswer').value = "";
                        document.querySelector('#correct').style.display = "block";
                        $("#correct").delay(1000).fadeOut();
                        generatePrompt();
                    }
                    
                    $('.toast').toast('show');
                }
            });

            xhr.open("POST", "https://grammarbot.p.rapidapi.com/check");
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("x-rapidapi-key", `${this.xRapidapiKey}`);
            xhr.setRequestHeader("x-rapidapi-host", `${this.xRapidapiHost}`);

            xhr.send(data);

        },
    }
});