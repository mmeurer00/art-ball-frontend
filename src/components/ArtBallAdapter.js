class ArtBallAdapter {
    
    constructor(baseURL="https://ttny-backend-2021.herokuapp.com"){
        this.baseArtURL = `${baseURL}/arts`
        /* when creating a new adpater object, 
        this is setting up the URL for the user */
    }

    getArtActivities() {
        fetch(this.baseArtURL)
        // returns promise
        .then(r => r.json())
        //handles fetch promise/return JSON object
        .then(arts=> {
            arts.forEach(activity => {
                const act = new Quiz(activity)
                return act
                
            })

            // .then(arts=> {
            //     const name = new fileName(arts)
            //     })
            
        })
    }
}