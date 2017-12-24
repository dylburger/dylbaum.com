# Wedding website

Contains a basic template for a wedding website. Built using

* [Gatsby.js](https://www.gatsbyjs.org/)
* [React](https://reactjs.org/)

These libraries make building websites easy and fun. I am incredibly grateful to the developers who contribute to them.

# How to build your own website from this template

First, you'll need to install the packages required for the website. From the root of the repo, run

    npm i

Most of the website is built using a configuration file (a Javascript object), found in

    src/utils/config.js

This file doesn't yet exist - you'll need to create it and populate it with the details of your wedding. 

From the root of this repo, run

    cp src/utils/config.template.js src/utils/config.js

The website will now read the config from `config.js`, which contains an example configuration. *You will need to edit the values in this file to include the details of your own wedding.* The file is also missing some important values for which no appropriate placeholders exist (e.g. the Mapbox access token). You'll likely want to make some edits to the file, adding or removing specific properties of the `config` object, based on the details of your own wedding. This was just an example of what worked for us, based on our events.

Once you're done editing the config, run this from the root of the repo:

    gatsby develop

You'll see `gatsby` do some work to build the website, and then start a local web server at port `8000`.
Open [http://localhost:8000](http://localhost:8000) in your browser and you'll see how the website looks
using the values you provided in the config.

When you're ready to deploy your site, run

    gatsby build

This will generate a build of the site in the `public/` subdirectory of the repo. Then, you can upload the contents of the `public/` directory to your hosting provider.

I use S3 and Cloudfront to host our site, so I sync the `public/` directory with my target bucket on S3, then invalidate the Cloudfront cache to update Cloudfront with the most recent files.

    aws s3 sync public/ s3://your-bucket --acl public-read
    aws cloudfront create-invalidation --distribution-id <distribution ID> --paths "/*"
