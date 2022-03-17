export class AppViewModel {
    #perPage = 5
    #allMemes = ko.observableArray([])
    currentPage = ko.observable(1)
    pageCount = ko.observable(0)
    isLoading = ko.observable(false)
    searchTerm = ko.observable('')

    filteredMemes = ko.computed(() => {
        const term = this.searchTerm()
        return term
            ? this.#allMemes().filter(({ name }) =>
                  name.toLowerCase().includes(term.toLowerCase())
              )
            : this.#allMemes()
    })

    paginatedMemes = ko.computed(() =>
        this.filteredMemes().slice(0, this.currentPage() * this.#perPage)
    )

    pageCount = ko.computed(() =>
        Math.ceil(this.filteredMemes().length / this.#perPage)
    )

    constructor() {
        this.#fetchMemes()
    }

    loadMore() {
        this.currentPage() < this.pageCount() &&
            this.currentPage(this.currentPage() + 1)
    }

    #fetchMemes() {
        this.isLoading(true)
        fetch('https://api.imgflip.com/get_memes')
            .then((response) => response.json())
            .then((json) => {
                this.#allMemes(json.data.memes)
            })
            .finally(() => {
                setTimeout(() => {
                    this.isLoading(false)
                }, 1000)
            })
    }
}
