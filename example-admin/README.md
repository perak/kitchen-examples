Admin panel example
===================

This example will build meteor application with user account system and admin panel.

**JSON** and **YAML** files are the same example in different formats.

To generate and run application, inside this directory type:

```
meteor-kitchen ./example-admin.json ./example-admin
cd ./example-admin
meteor
```

To use the **YAML** example you'll need to have <a href="https://www.npmjs.org/package/yaml2json" target="_blank">yaml2json</a> converter installed.


When you start the application and register, your user account will have role "user" by default and you will not see admin panel. 

To create first admin, you first need to find your user ID. Open mongo shell and type:

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

