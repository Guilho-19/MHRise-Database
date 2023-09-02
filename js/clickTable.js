let tableLargeMonsters = document.getElementById("monstersIcon")
let tableMonstersInfo = document.getElementById("monstersInfo")
let tdElements = tableLargeMonsters.querySelectorAll("TD")
let monster = document.getElementById("monster001")

tableLargeMonsters.addEventListener("click", function (event) {
    if (event.target.tagName === "TD") {

        
        // alert("You clicked on: " + event.target.innerText)

        /*
        for (let i = 0; i < tdElements.length; i++) {
            let td = tdElements[i];

            console.log(td.textContent)
        }
        */

        if (event.target.tagName === "TD" && monster) {
            alert("FUNCIONOU PORRAAAAAAA")
            console.log(monster)
        }


    }
})