Admin panel example
===================

This example will build meteor application with user account system and admin panel.

To generate and run application, inside this directory type:

```
meteor-kitchen ./example-admin.json ./example-admin
cd ./example-admin
meteor
```

When you start application and register, your user account will have role "user" by default and you will not see admin panel. 

To create first admin, open mongo shell and type:

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

