let url = "https://official-joke-api.appspot.com/jokes/programming/random";
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=> {
    let joke = await getFact();
    let p = document.querySelector("#rand");
    p.innerText = joke;
});


async function getFact() {
    try{
        let res = await axios.get(url);
        return res.data.setup;
    } catch (err) {
        console.log(err);
        return "err cought";
    }
}