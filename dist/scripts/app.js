//https://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript
const parseJSON = (file, callback) => {
    const rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
};

//usage:
const generatePrompt = () => {
    document.querySelector('#promptAnswer').value = "";
    parseJSON("prompts.json", (text) => {
        const prompts = JSON.parse(text);
        const randomPromptType = Math.floor(Math.random()* (3 - 0) + 0);
        const randomPrompt = Math.floor(Math.random()* (5 - 0) + 0);
    
        const promptName = prompts[randomPromptType].name;
        const promptBody = prompts[randomPromptType].prompts[randomPrompt];

        document.querySelector('#grammarPrompt').innerHTML = `<strong>${promptName}:</strong> <br> ${promptBody}`;
    });
};

generatePrompt();
