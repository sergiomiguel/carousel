// import the styles
require('./index.scss');
const { blocks } = require('./models.js');
const MainView = require('./views.js');
// eslint-disable-next-line no-unused-vars
const app = new MainView({ el: '#app-root' });

// fetch the data from the "server"
// i've opted to go with html5's fetch (as opposed to backbone's) for ease of
// integration with fetch-mock
// in a real app, we would need to handle error scenarios here too, but in this
// case there's no point
fetch('/api/', { method: 'get' })
    .then(response => response.text())
    .then((payload) => {
        // add the records to our collection
        blocks.reset(JSON.parse(payload));
    });
