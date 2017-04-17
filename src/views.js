const $ = require('jquery');
const Backbone = require('backbone');
const { blocks, activeBlock } = require('./models.js');

// view that manages the previous/next buttons
const ControlsView = Backbone.View.extend({
    events: {
        'click .controls__prev': 'prev',
        'click .controls__next': 'next'
    },

    prev() {
        activeBlock.decrease();
    },

    next() {
        activeBlock.increase();
    },

    // enables/disables the buttons' disabled states as needed
    toggleButtonsDisabledState() {
        $('.controls__prev').prop('disabled', activeBlock.isFirstBlock());
        $('.controls__next').prop('disabled', activeBlock.isLastBlock());
    },

    render() {
        this.toggleButtonsDisabledState();
        return this;
    }
});

const controls = new ControlsView({ el: '.controls' });

// manages the images themselves
const ScreensView = Backbone.View.extend({
    events: {
        'click .alt-image': 'setImage'
    },

    getActiveBlock() {
        return blocks.at(activeBlock.get('index'));
    },

    getRandomImage() {
        const length = this.getActiveBlock().get('images').length;
        const random = Math.floor(Math.random() * length);

        return this.getActiveBlock().get('images')[random];
    },

    setImage(event) {
        $('.image').attr('src', event.target.src);
    },

    listAvailableBlockImages() {
        $('.block-images').empty();

        this.getActiveBlock().get('images').forEach(image =>
            $('.block-images')
                .append(`<div class="alt-image-container"><img src="${image}" class="alt-image"></div>`)
        );
    },

    render() {
        $('.image').attr('src', this.getRandomImage());
        this.listAvailableBlockImages();
        return this;
    }
});

const screens = new ScreensView({ el: '.screen' });

const MainView = Backbone.View.extend({
    initialize() {
        this.listenTo(blocks, 'reset', this.render);
        this.listenTo(activeBlock, 'change', this.render);
    },

    render() {
        controls.render();
        screens.render();
        return this;
    }
});

module.exports = MainView;
