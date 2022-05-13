console.log('Nyi\'s monsters')

let monsterContainer = document.getElementById('monster-container')
let backButton = document.getElementById('back')
let forwardButton = document.getElementById('forward')
let j = 0

fetch(`http://localhost:3000/monsters`)
.then(res=>res.json())
.then(data=> renderFiftyMonsters(data))

function renderFiftyMonsters(data){
    

    // backButton.addEventListener('click',(e)=>{
    //     if(j>0){
    //         j=j-50
    //         renderFiftyMonsters(data)
    //     }
    // })
    // forwardButton.addEventListener('click',(e)=>{
    //     if(j<950){
    //         j=j+50
    //         renderFiftyMonsters(data)
    //     }
    // })

    monsterContainer.innerHTML = ""
    for (let i=j ; i<(j+50) ; i++){
        //console.log(data[i])
        
        let monsterDiv = document.createElement('div')
        let nameTag = document.createElement('h2')
        nameTag.textContent = data[i].name
        let ageTag = document.createElement('h4')
        ageTag.textContent = `Age: ${data[i].age}`
        let descriptionTag = document.createElement('p')
        descriptionTag.textContent = `Bio: ${data[i].description}`
        monsterDiv.append(nameTag,ageTag,descriptionTag)
        monsterContainer.append(monsterDiv)
        //console.log(data[i].name)
    }

    
}