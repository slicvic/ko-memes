ko.components.register('search-bar', {
    viewModel(params) {
        this.searchTerm = params.searchTerm
    },
    template: `
        <div class="search-bar">
            <input type="search" class="form-control" placeholder="Search memes" data-bind="textInput: searchTerm">
        </div>
    `,
})
