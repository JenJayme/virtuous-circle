const orm = require("./config/orm")

MVC Elements

1. Database: virtuous_circle_db
2. Table: foodbundles //has all the fields
3. ORM: orm.js //has connection.queries
4. Model: foodcircle.js //has functions to c.r.u.d
5. controller: controller.js //has api routes for get, post, put & delete



<script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
<script>
Handlebars.registerPartial('bundle-block', '{{bundle-block}}');
