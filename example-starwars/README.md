Star Wars API
=============

This input file for <a href="http://www.meteorkitchen.com" target="_blank">Meteor Kitchen</a> will build example meteor application showing how to call external REST service from client and from server.

You can see live example <a href="http://example-starwars.meteorfarm.com" target="_blank">here</a>.

Example is using <a href="http://swapi.co/" target="_blank">SWAPI</a> REST service.

To build and run example, inside this directory type:

```
meteor-kitchen ./example-starwars.json ./example-starwars
cd ./example-starwars
meteor
```

**JSON** and **YAML** files are the same example in different formats.

Meteor-kitchen natively supports input files written in **JSON**. To use the **YAML** example you'll need to have <a href="https://www.npmjs.com/package/yaml-js" target="_blank">js-yaml</a> converter installed. The following is the most common example of how to accomplish this:

```
npm install -g js-yaml
```
