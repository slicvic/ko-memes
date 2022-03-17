export class AppViewModel {
    allMemes = []
    memes = ko.observableArray()
    isLoading = ko.observable(false)
    searchTerm = ko.observable('')

    constructor() {
        this.#fetchMemes()
        this.searchTerm.subscribe((newValue) => {
            console.log(newValue)
            this.#filterMemes(newValue)
        })
    }

    #filterMemes(by) {
        if (by && typeof by === 'string') {
            this.memes(
                this.allMemes.filter(({ name }) =>
                    name.toLowerCase().includes(by.toLowerCase())
                )
            )
        } else {
            this.memes(this.allMemes)
        }
    }

    #fetchMemes() {
        this.isLoading(true)
        fetch('https://api.imgflip.com/get_memes')
            .then((response) => response.json())
            .then((json) => {
                this.allMemes = json.data.memes.slice(0, 50)
                this.memes(this.allMemes)
            })
            .finally(() => {
                setTimeout(() => {
                    this.isLoading(false)
                }, 2000)
            })
    }
}
