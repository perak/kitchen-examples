IoT (internet of things) example
================================

This example will build meteor application showing sensors from <a href="https://revspace.nl">RevSpace</a> in real-time.
Server is connected to <a href="http://test.mosquitto.org">mqtt://test.mosquitto.org</a> MQTT broker and subscribed to `revspace/sensors/#` topic.
Received messages are written into "Sensors" collection and shown to clients.

To run example, inside this directory type:

```
meteor-kitchen ./example-iot.json ./example-iot
cd ./example-iot
meteor
```

You can see live example <a href="http://generator-iot.meteor.com" target="_blank">here</a>.
