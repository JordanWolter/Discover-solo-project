// import axios from 'axios'
const { setupCache } = require('axios-cache-adapter')
// const setCache = require('axios-cache-adapter');
const axios = require('axios');

// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 120 * 60 * 1000,
  exclude: {
    query: false,
    debug: true
  }
})

// Create `axios` instance passing the newly created `cache.adapter`
const api = axios.create({
  adapter: cache.adapter
});

module.exports = api