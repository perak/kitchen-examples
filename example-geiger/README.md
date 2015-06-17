Geiger - IoT (internet of things) example
=========================================

This example will build meteor application showing geiger sensor from <a href="https://revspace.nl">RevSpace</a> in real-time.
Server is connected to <a href="http://test.mosquitto.org">mqtt://test.mosquitto.org</a> MQTT broker and subscribed to `revspace/sensors/geiger` topic.
Received messages are written into "Sensors" collection and shown to clients using C3 spline chart.

To run example, inside this directory type:

```
meteor-kitchen ./example-geiger.json ./example-geiger
cd ./example-geiger
meteor
```

You can see live example <a href="http://generator-geiger.meteor.com" target="_blank">here</a>.
