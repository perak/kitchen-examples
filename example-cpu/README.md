CPU Usage - CoAP example
========================

This input file for <a href="http://www.meteorkitchen.com" target="_blank">Meteor Kitchen</a> will build meteor application which shows server CPU usage by running server-side script. Aditionaly, it creates CoAP server and provides CPU usage. 

You can see live example <a href="http://example-cpu.meteorfarm.com" target="_blank">here</a>.

To build and run example, inside this directory type:

```
meteor-kitchen ./example-cpu.json ./example-cpu
cd ./example-cpu
meteor
```

*Please make sure `private/script.sh` is executable `chmod +x`*


**JSON** and **YAML** files are the same example in different formats.

Meteor-kitchen natively supports input files written in **JSON**. To use the **YAML** example you'll need to have <a href="https://www.npmjs.com/package/yaml-js" target="_blank">js-yaml</a> converter installed. The following is the most common example of how to accomplish this:

```
npm install -g js-yaml
```


## CoAP client

You can test CoAP interface by running simple node.js CoAP client:

```
var coap = require('coap');

var req = coap.request('coap://example-cpu.meteorfarm.com/cpu'); // or if you are running locally coap://localhost/cpu

req.on('response', function(res) {
  res.pipe(process.stdout);
  res.on('end', function() {
    process.exit(0);
  });
});

req.end();
```
