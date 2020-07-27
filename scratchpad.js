const orm = require("./config/orm")

MVC Elements

1. Database: virtuous_circle_db
2. Table: foodbundles //has all the fields
3. ORM: orm.js //has connection.queries
4. Model: foodcircle.js //has functions to c.r.u.d
5. controller: controller.js //has api routes for get, post, put & delete


{{#if claimed}
{{>partials/bundle-block}}
{{/if}}
