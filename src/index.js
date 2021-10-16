const artBallAdapter = new ArtBallAdapter("http://127.0.0.1:3000")

document.addEventListener("DOMContentLoaded", () => {
    artBallAdapter.getArtActivities()
})



// I know this shouldn't live here, forgive me. As of now this filters out for family-friendly stuff and musicals, but that's it. The rest is randomized. 
function getResult(obj) {
    let possibilities = Art.all

    possibilities.forEach(art => {
        if (possibilities.length === 1) return possibilities[0]
        if (obj.family === true) {
            possibilities = possibilities.filter(art => art.family === true)
        }
    })

    possibilities.forEach(art => {
        if (possibilities.length === 1) return possibilities[0]
        if (obj.musical === false) {
            possibilities = possibilities.filter(art => art.musical === false)
        }
    })

    // will work on this logic soon!
    // possibilities.forEach(art => {
    //     if (possibilities.length === 1) return possibilities[0]
    //     possibilities = possibilities.filter(art => art.price <= obj.price)
    // })

    // will work on this logic soon!
    // let categories = obj.category
    // possibilities.forEach(art => {
    //     // if (possibilities.length === 1) return possibilities[0]
    //     possibilitiesArr = possibilities.filter(art => {
    //         categories.includes(art.category_id)
    //     })
    // })

    // this is the result that should show up when all is said and done: 
    let result = possibilities[Math.floor((Math.random()*possibilities.length))]

    console.log(result)

}