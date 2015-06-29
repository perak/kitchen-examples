IoT (internet of things) example
================================

This input file for <a href="http://www.meteorkitchen.com" target="_blank">Meteor Kitchen</a> will build meteor application showing sensors from <a href="https://revspace.nl">RevSpace</a> in real-time.

Server is connected to <a href="http://test.mosquitto.org">mqtt://test.mosquitto.org</a> MQTT broker and subscribed to `revspace/sensors/#` topic. Received messages are written into "Sensors" collection and shown to clients.

You can see live example <a href="http://generator-iot.meteor.com" target="_blank">here</a>.

To build and run example, inside this directory type:

```
meteor-kitchen ./example-iot.json ./example-iot
cd ./example-iot
meteor
```

**JSON** and **YAML** files are the same example in different formats.

Meteor-kitchen natively supports input files written in **JSON**. To use the **YAML** example you'll need to have <a href="https://www.npmjs.com/package/yaml-js" target="_blank">js-yaml</a> converter installed. The following is the most common example of how to accomplish this:

```
npm install -g js-yaml
```
