ko.components.register('meme-gallery-item', {
    viewModel(params) {
        const { url, name } = params
        this.url = url
        this.name = name
    },
    template: `
        <div class="meme-gallery-item">
            <img class="meme-img" data-bind="attr: {src: url}">
            <p class="meme-name" data-bind="text: name"></p>
            <like-rating></like-rating>
        </div>
    `,
})
