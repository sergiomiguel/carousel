// here we mock a response from the api server
const api = require('fetch-mock');

const endpoint = '/api/';
const response = [
    {
        title: 'Dogs',
        images: [
            '/images/dog1.jpg',
            '/images/dog2.jpg',
            '/images/dog3.jpg',
            '/images/dog4.jpg'
        ]
    },
    {
        title: 'Cats',
        images: [
            '/images/cat1.jpg',
            '/images/cat2.jpg',
            '/images/cat3.png',
            '/images/cat4.png'
        ]
    },
    {
        title: 'Llamas',
        images: [
            '/images/llama1.jpg',
            '/images/llama2.jpg',
            '/images/llama3.jpg',
            '/images/llama4.jpg'
        ]
    },
    {
        title: 'Birds',
        images: [
            '/images/bird1.jpg',
            '/images/bird2.jpg',
            '/images/bird3.jpg',
            '/images/bird4.jpg'
        ]
    }
];

api.get(endpoint, response);
