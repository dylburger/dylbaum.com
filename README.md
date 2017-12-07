# Wedding website

Contains a basic template for a wedding website. Built using

* [Gatsby.js](https://www.gatsbyjs.org/)
* [React](https://reactjs.org/)
* [Leaflet](http://leafletjs.com/)

These libraries make building websites easy and fun. I am incredibly grateful to the developers who contribute to them.

# How to build your own website from this template

First, you'll need to install the packages required for the website. From the root of the repo, run

    npm i

Most of the website is built using a configuration file (a Javascript object), found in

    src/utils/config.js

This file doesn't yet exist - you'll need to create it and populate it with the details of your wedding. 

From the root of this repo, run

    cd src/utils/
    cp config.template.js config.js

The website will now read the config from `config.js`, which contains a full, example configuration. Run

    gatsby develop

You'll see `gatsby` do some work to build the website, and then start a local web server at port `8000`.
Open [http://localhost:8000](http://localhost:8000) in your browser and you'll see how the website looks
using this example config.
