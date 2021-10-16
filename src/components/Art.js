class Art {
    static all = []
     
    constructor({id, name, family, musical, price, mood_id, category_id} ){
        this.id = id
        this.name = name
        this.family = family
        this.musical = musical
        this.price = price
        this.mood_id = mood_id
        this.category_id = category_id

        Art.all.push(this)
    }

    render(){
        return(
            `<li class="arts-container" id="art-${this.id}" data-id=${this.id}>
            <br>
            <h3>${this.name}</h3>
            <h4>Family: ${this.family} </h4> 
            Musical:<span>${this.musical}</span>
            <h4>price: ${this.price} </h4>
            <h4>Modd_id: ${this.mood_id} </h4>
            <h4>Category: ${this.category_id} </h4>
        </li>`
        )
    }

    addToDom(){
        const artsContainer = document.getElementById("arts-container")
        artsContainer.innerHTML += this.render()
    }
}