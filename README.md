# README for branch_03 #

This repo serves as a node+express backend to serve up static assets for a front-end SPA for a website template viewer. See overall details in [README.md in master branch of ui repo](https://github.com/bganguly/coding-project-ui/tree/master#readme) 

This specific branch provides a localhost:3001 express app to serve up images and template.json files. The code was originally bootstapped via the express-generator scaffolding.  
The only other material changes are 
- applying CORS settings 
- designate a /public folder to serve out static assets
- updating scripts to support port 3001.

To run:
```
// git clone and checkout the branch, thereafter
rm -rf package-lock.json ; rm -rf node-modules/ ; npm i
npm start
```

To test:  
See if http://localhost:3001/images/thumbnails/7111-m.jpg returns/renders an image