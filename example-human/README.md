Human language support - Example 1: CRUD
========================================

Example application written in English language.

This **experimental** feature is added to meteor-kitchen in version 0.9.43.

Stay tuned: more info will be added soon!

You can see live example <a href="http://example-human.meteorfarm.com" target="_blank">here</a>.

To build and run example you'l need <a href="https://www.npmjs.com/package/human2machine" target="_blank">human2machine</a> npm module to translate from everyday English to json:

```
npm -g install human2machine
```

And then inside this directory type:

```
meteor-kitchen ./example-human.txt ./example-human
cd ./example-human
meteor
```
