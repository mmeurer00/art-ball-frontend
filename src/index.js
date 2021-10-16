const artBallAdapter = new ArtBallAdapter("http://127.0.0.1:3000")

document.addEventListener("DOMContentLoaded", () => {
    artBallAdapter.getArtActivities()
})