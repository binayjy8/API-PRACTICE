let url = "https://official-joke-api.appspot.com/jokes/programming/random";
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=> {
    let res = await axios.get(url);
})
