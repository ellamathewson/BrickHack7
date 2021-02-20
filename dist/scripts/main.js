let app = new Vue({
    el: '#root',
    data: {
        xRapidapiKey: 'b9f3e8d36dmsh79f02cf8bc2c270p12627fjsn24bc425bc668',
        xRapidapiHost: 'grammarbot.p.rapidapi.com',
        test: "This are a test sentence",
        resText: "",
        title: "test"
    },
    methods: {
        check() {
            fetch("https://grammarbot.p.rapidapi.com/check", {
                    "method": "POST",
                    "headers": {
                        "content-type": "application/x-www-form-urlencoded",
                        "x-rapidapi-key": this.xRapidapiKey,
                        "x-rapidapi-host": this.xRapidapiHost
                    },
                    "body": {
                        "text": this.test,
                        "language": "en-US"
                    }
                })
                .then(response => {
                    if (!response.ok) {
                        throw Error(
                            `ERROR: ${response.statusText}`
                        );
                    }
                    return response.json();
                })
                .then(json => {
                    console.log(json);
                    // this.resText = json.matches.message;
                    // console.log(json.matches.message);
                })
        }
    }
})