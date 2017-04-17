const Backbone = require('backbone');

// our collection of blocks
const BlocksCollection = Backbone.Collection.extend();

// initialize it and attach the reset event handler
const blocks = new BlocksCollection();

// the model that controls which block is visible at any given moment
const ActiveBlockModel = Backbone.Model.extend({
    isLastBlock() {
        return this.get('index') + 1 === blocks.length;
    },

    isFirstBlock() {
        return this.get('index') === 0;
    },

    increase() {
        if (!this.isLastBlock()) {
            this.set('index', this.get('index') + 1);
        }
    },

    decrease() {
        if (this.get('index') > 0) {
            this.set('index', this.get('index') - 1);
        }
    }
});

const activeBlock = new ActiveBlockModel({ index: 0 });

module.exports = { blocks, activeBlock };
