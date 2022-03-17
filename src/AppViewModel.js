export class AppViewModel {
    #allMemes = []
    #perPage = 5
    currentPage = ko.observable(1)
    pageCount = 0

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

    loadMore() {
        if (this.currentPage() < this.pageCount) {
            this.currentPage(this.currentPage() + 1)
            this.memes(
                this.#allMemes.slice(0, this.currentPage() * this.#perPage)
            )
        }
    }

    #filterMemes(by) {
        if (by && typeof by === 'string') {
            this.memes(
                this.#allMemes.filter(({ name }) =>
                    name.toLowerCase().includes(by.toLowerCase())
                )
            )
        } else {
            this.memes(this.#allMemes.slice(0, this.#perPage))
        }
    }

    #fetchMemes() {
        this.isLoading(true)
        fetch('https://api.imgflip.com/get_memes')
            .then((response) => response.json())
            .then((json) => {
                this.#allMemes = json.data.memes
                this.pageCount = Math.ceil(
                    this.#allMemes.length / this.#perPage
                )
                this.memes(this.#allMemes.slice(0, this.#perPage))
            })
            .finally(() => {
                setTimeout(() => {
                    this.isLoading(false)
                }, 1000)
            })
    }
}
