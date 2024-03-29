# Ecommerce API
# Hosted Link : https://e-commerce-api-2t0k.onrender.com
# ABOUT
This is an E-commerce API made using Node.Js & MongoDB. 
STEPS TO USE THE API:
1) run "npm init" command on terminal in this projects directory
2) start the server using node index.js
3) Open postman
4) Make a GET request on localhost:8000/products
5) The products should be visible

STEPS TO CREATE A NEW PRODUCT: 
1) start the server using node index.js
2) Open postman
3) put localhost:8000/products/create as the url. 
4) Select Body tab below the url textarea and then select x-www-form-urlencoded
5) Add name & quantity as the keys and set the desired values for the keys.
6) Make a POST request.
7) If you recieve the message saying new product added successfully then you have done everything correct.
8) The product is created. Check it out by making a GET request at localhost:8000/products

STEPS TO DELETE A PRODUCT:
1) copy the object id of the product you want to delete.
2) add the id after localhost:8000/products/
3) Make a DELETE request.
4) You will recieve a message saying deleted successfully.

STEPS TO UPDATE THE QUANTITY OF A PRODUCT:
1) Copy the object id of the product whose quantity you want to update
2) Put the id after localhost:8000/products/
3) After putting the id add /update_quantity/?number={x} in the url where x is the updated quantity of product 
4) the url should be looking like localhost:8000/products/{id}/update_quantity/?number={x}
5) Make a POST request and you should get a message containing the update product
Install the required dependencies using the following command:

$ npm install Start the application using the following command:

$ npm start Open POSTMAN on this port, and follow the command in the features section:

$ http://localhost:8000 Features To create a product -> POST: http://localhost:8000/products/create To view all products -> GET: http://localhost:8000/products To update a product's quantity -> POST: http://localhost:8000/products/id/quant?quantity=value (id represents the id of the product, value is the desired quantity) To delete a product -> DELETE: http://localhost:8000//products/:id Folder Structure eCommerceAPI | |--->config---->|--->mongoose.js | | |-->home_controller.js |--->controllers-->| | |-->product_controller.js | |--->models---->|-->product.js | | |-->index.js |--->routes---->| | |-->product.js | | |-->node_modules |-->.gitignore |--> index.js |--> package-lock.json |-->package.json


