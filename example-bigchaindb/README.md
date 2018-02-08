BigchainDB example
==================

This input file for <a href="http://www.meteorkitchen.com" target="_blank">Meteor Kitchen</a> will build minimal meteor application which uses <a href="https://www.bigchaindb.com/" target="_blank">BigchainDB</a> database.

You can see live example <a href="http://example-bigchaindb.meteorfarm.com" target="_blank">here</a>.

To build and run example, inside this directory type:

```
meteor-kitchen ./example-bigchaindb.json ./example-bigchaindb
cd ./example-bigchaindb
meteor --settings ./settings.json
```



**Note** BigchainDB url is set by default assuming you have local copy of bigchaindb running. If you want to connect to public BigchainDB TestNet then modify generated `settings.json`


**JSON** and **YAML** files are the same example in different formats.

Meteor-kitchen natively supports input files written in **JSON**. To use the **YAML** example you'll need to have <a href="https://www.npmjs.com/package/yaml-js" target="_blank">js-yaml</a> converter installed. The following is the most common example of how to accomplish this:

```
npm install -g js-yaml
```
