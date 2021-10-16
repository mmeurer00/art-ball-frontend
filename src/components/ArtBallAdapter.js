class ArtBallAdapter {
    
    constructor(baseURL="http://127.0.0.1:3000"){
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
                const act = new Art(activity)
                act.addToDom()
            })
            
        })
    }
}