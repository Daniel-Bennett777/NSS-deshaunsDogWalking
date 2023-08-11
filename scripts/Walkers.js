import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()
document.addEventListener(
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target
        if (whatWasClickedOn.dataset.type === "walker") {
            const currentCity = parseInt(whatWasClickedOn.dataset.city)
            for (const city of cities)
            if (currentCity === city.id){
            window.alert(`This walker works in ${city.name}`)
            }
        }
        
    }
)

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li data-id="${walker.id}"
                            data-city = "${walker.citiesId}"  
                            data-type="walker" 
                            >${walker.name}
                        </li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML

}

