import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()
document.addEventListener(
    "click",
    (clickEvt) => {
        const cityTarget = clickEvt.target
        
        if (cityTarget.dataset.type === "city") {
        const cityId = parseInt(cityTarget.dataset.id)
        for (const walker of walkers){
            if (cityId === walker.citiesId){
        window.alert(`${walker.name} is servicing this city`)
            } 
        }
        }
        }
)

export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li data-type="city" data-id="${city.id}"
                            data-name="${city.name}"
                            >${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

