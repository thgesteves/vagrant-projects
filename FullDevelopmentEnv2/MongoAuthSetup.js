db.createUser(
  {
    user: "mongoadmin",
    pwd: "mongoadminpass",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
  }
)
