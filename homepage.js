const input = document.getElementById("searchinput");
input.addEventListener("keyup",(event)=>{
    const query = input.value.toLowerCase();
    const cards = document.querySelectorAll(".pgcards");

    cards.forEach(card=>{
        const pgName = card.querySelector(".pgname").textContent.toLowerCase();
      card.style.display = pgName.includes(query) ? "flex" : "none";
    })

})