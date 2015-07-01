Admin panel example
===================

This input file for <a href="http://www.meteorkitchen.com" target="_blank">Meteor Kitchen</a> will build meteor application with user account system and admin panel.

To generate and run application, inside this directory type:

```
meteor-kitchen ./example-admin.json ./example-admin
cd ./example-admin
meteor
```

**JSON** and **YAML** files are the same example in different formats.

Meteor-kitchen natively supports input files written in **JSON**. To use the **YAML** example you'll need to have <a href="https://www.npmjs.com/package/yaml-js" target="_blank">js-yaml</a> converter installed. The following is the most common example of how to accomplish this:

```
npm install -g js-yaml
```

How to use application
----------------------

When you start the application and register, your user account will have role "user" by default and you will not be able to see admin panel.

To make yourself admin, you first need to find your user ID. Open mongo shell and type:

```
db.users.find().pretty()
```

Copy your user id and then type:

```
db.users.update({ _id: "YOUR_USER_ID" }, { $set: { roles: ["admin"] } })
```

Now, you have admin panel in your application and you can manage users.

This example has three user roles:

- `user` can login but cannot access admin panel

- `admin` can access admin panel

- `blocked` user is blocked and cannot login

That's it :)
