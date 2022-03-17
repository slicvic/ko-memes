ko.components.register('loading-overlay', {
    viewModel(params) {
        this.show = params.show
    },
    template: `
        <div class="loading-overlay" data-bind="visible: show()">
            <i class="fas fa-spinner fa-spin"></i>
        </div>
    `,
})
