ko.components.register('meme-gallery', {
    viewModel(params) {
        this.memes = params.memes
    },
    template: `
        <div class="meme-gallery" data-bind="foreach: memes">
            <meme-gallery-item params="url: url, name: name"></meme-gallery-item>
        </div>
    `,
})
