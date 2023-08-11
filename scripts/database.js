/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    walkers: [{
        id: 1,
        name: "Alphonse Meron",
        email: "ameron0@mashable.com",
        citiesId: 11
    }, {
        id: 2,
        name: "Damara Pentecust",
        email: "dpentecust1@apache.org",
        citiesId: 10
    }, {
        id: 3,
        name: "Anna Bowton",
        email: "abowton2@wisc.edu",
        citiesId: 9
    }, {
        id: 4,
        name: "Hunfredo Drynan",
        email: "hdrynan3@bizjournals.com",
        citiesId: 8
    }, {
        id: 5,
        name: "Elmira Bick",
        email: "ebick4@biblegateway.com",
        citiesId: 7
    }, {
        id: 6,
        name: "Bernie Dreger",
        email: "bdreger5@zimbio.com",
        citiesId: 6
    }, {
        id: 7,
        name: "Rolando Gault",
        email: "rgault6@google.com",
        citiesId: 5
    }, {
        id: 8,
        name: "Tiffanie Tubby",
        email: "ttubby7@intel.com",
        citiesId: 4
    }, {
        id: 9,
        name: "Tomlin Cutill",
        email: "tcutill8@marketwatch.com",
        citiesId: 3
    }, {
        id: 10,
        name: "Arv Biddle",
        email: "abiddle9@cafepress.com",
        citiesId: 2
    },
    {
        id: 14,
        name: "Amelia Anderson",
        email: "amelia@andersonfam.com",
        citiesId: 1
    }
],
    pets: [{
        id: 1,
        name: "Dianemarie Hartness",
        walkerId: 3
    }, {
        id: 2,
        name: "Christoph Fosdyke",
        walkerId: 10
    }, {
        id: 3,
        name: "Rocket",
        walkerId: 7
    }, {
        id: 4,
        name: "Ebony",
        walkerId: 3
    }, {
        id: 5,
        name: "Scotty",
        walkerId: 8
    }, {
        id: 6,
        name: "Mac",
        walkerId: 2
    }, {
        id: 7,
        name: "Oreo",
        walkerId: 5
    }, {
        id: 8,
        name: "Sassy",
        walkerId: 1
    }, {
        id: 9,
        name: "Salem",
        walkerId: 9
    }, {
        id: 10,
        name: "Panda",
        walkerId: 7
    }
],
    cities: [{
        id :1,
        name: "San Diego"
    },
    {
        id :2,
        name: "Pittsburg"
    },
    {
        id :3,
        name: "Minneapolis"
    },
    {
        id :4,
        name: "Pheonix"
    },
    {
        id :5,
        name: "Tucson"
    },
    {
        id :6,
        name: "Denver"
    },
    {
        id :7,
        name: "Boise"
    },
    {
        id :8,
        name: "San Diego"
    },
    {
        id :9,
        name: "Sarasota"
    },
    {
        id :10,
        name: "White Plains"
    },
    {
        id :11,
        name: "Chicago"
    },












]
}

export const getWalkers = () => {
    return database.walkers.map(walker => ({...walker}))
}

export const getPets = () => {
    return database.pets.map(pet => ({...pet}))
}
export const getCities = () => {
    return database.cities.map(city => ({...city}))
}


