const getPromise = (apiLink) => {
    return new Promise(
        (resolvedFunctiom, rejectedFunction) => {
            const myRequest = new XMLHttpRequest();
            myRequest.onload = function () {
                if (this.readyState === 4 && this.status === 200)
                    resolvedFunctiom(JSON.parse(this.responseText));
                else rejectedFunction(Error("Connection Failed"));
            }
            myRequest.open("GET", apiLink);
            myRequest.send();
        });
}

getPromise("https://api.github.com/users/elzerowebschool/repos")
    .then
        ((result) => {
            result.length = 10;
            return result;})
    .then
        ((result) => {
            result.length = 5;
            for (let i = 0; i < result.length; i++)
                console.log(result[i].name);})
    .catch
        ((e) => console.log(e));