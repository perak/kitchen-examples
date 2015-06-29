OnePage example
================

This example will build simple one page site.

To run example, inside this directory type:

```
meteor-kitchen ./example-onepage.json ./example-onepage
cd ./example-onepage
meteor
```

**JSON** and **YAML** files are the same example in different formats.

Meteor-kitchen natively supports input files written in **JSON**. To use the **YAML** example you'll need to have <a href="https://www.npmjs.com/package/yaml-js" target="_blank">js-yaml</a> converter installed. The following is the most common example of how to accomplish this:

    npm install -g js-yaml
