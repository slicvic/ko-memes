ko.components.register('like-rating', {
    viewModel(params) {
        const validValues = ['liked', 'disliked']
        this.rating = ko.observable(
            validValues.includes(params.rating) ? params.rating : undefined
        )
        this.like = () => this.rating('liked')
        this.dislike = () => this.rating('disliked')
    },
    template: `
        <div class="like-rating">
            <button 
                type="button" 
                title="Like"
                class="btn btn-link like-btn"
                data-bind="
                    enable: rating() === undefined || rating() === 'disliked', 
                    click: like">
                <i class="fas fa-thumbs-up"></i>
            </button>
            <button 
                type="button"
                title="Dislike"
                class="btn btn-link dislike-btn"
                data-bind="
                    enable: rating() === undefined || rating() === 'liked', 
                    click: dislike">
                <i class="fas fa-thumbs-down"></i>
            </button>
        </div>
    `,
})
