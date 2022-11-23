const dice = document.querySelector('.container__dice');
const api_url = "https://api.adviceslip.com/advice";
const advice_id = document.querySelector(".advice__id");
const advice_text = document.querySelector(".advice__text");

getAdvice();

dice.addEventListener("click", () => {

    getAdvice();

})

async function getAdvice() {

    const response = await fetch(api_url);
    const data = await response.json();

    const id = data.slip.id;
    const advice = data.slip.advice;

    advice_id.textContent = "Advice #" + id;
    advice_text.textContent = advice;

}