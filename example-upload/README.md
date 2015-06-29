Upload example
===============

This input file for <a href="http://www.meteorkitchen.com" target="_blank">Meteor Kitchen</a> will build simple meteor application - image/video gallery with upload.

Application is using <a href="https://github.com/CollectionFS/Meteor-CollectionFS" target="_blank">CollectionFS</a> and stores data into database (using "gridfs" storage adapter).

You can see live example <a href="http://generator-upload.meteor.com" target="_blank">here</a>.

To build and run example, inside this directory type:

```
meteor-kitchen ./example-upload.json ./example-upload
cd ./example-upload
meteor
```

**JSON** and **YAML** files are the same example in different formats.

Meteor-kitchen natively supports input files written in **JSON**. To use the **YAML** example you'll need to have <a href="https://www.npmjs.com/package/yaml-js" target="_blank">js-yaml</a> converter installed. The following is the most common example of how to accomplish this:

```
npm install -g js-yaml
```
