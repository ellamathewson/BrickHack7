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

            const xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === this.DONE) {
                    console.log(this.responseText);
                }
            });

            xhr.open("POST", "https://grammarbot.p.rapidapi.com/check");
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("x-rapidapi-key", `${this.xRapidapiKey}`);
            xhr.setRequestHeader("x-rapidapi-host", `${this.xRapidapiHost}`);

            xhr.send(data);

        }
    }
});
