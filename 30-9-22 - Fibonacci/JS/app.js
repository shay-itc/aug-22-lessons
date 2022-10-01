const FiboForm = document.getElementById("FiboForm");
const fiboFlex = document.getElementById("fibo-flex");


async function getDataFromApiFibo(url) {
    try {
        createSpinner(fiboFlex);
        const respone = await fetch(url);
        const responeJson = await respone.json();

        removeSpinner();
        return responeJson.result
    } catch (err) {
        console.log("err", err);
    }
}

function createSpinner(tag) {
    const spinner = document.createElement('span');
    spinner.setAttribute("class", "spinner-border");
    spinner.setAttribute("id", "spinner");
    tag.appendChild(spinner);
}

function removeSpinner() {
    const spinner = document.getElementById("spinner");
    spinner.remove();
}

function moreThanFifty(number) {
    number = Number(number);
    if (number > 50) throw new Error("Can't be larger than 50");
}

window.onload = async () => {


    FiboForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        try {
            console.log('Event')
            let number = document.getElementById('floatingInput').value;

            moreThanFifty(number);

            let result = await getDataFromApiFibo(`http://localhost:5050/fibonacci/${number}`)

            console.log('result', result)
            document.getElementById('fibonacci-result').innerHTML = result;
        }
        catch (error) {
            console.log('err', error);
            const moreThanFifty = document.getElementById("moreThanFifty");
            moreThanFifty.style.display = 'block'
        }


    })



}
