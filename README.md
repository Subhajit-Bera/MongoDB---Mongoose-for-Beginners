# MongoDB
**MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.
MongoDB stores data records as BSON documents. BSON is a binary representation of JSON documents, though it contains more data types than JSON.**
![image](https://github.com/Subhajit-Bera/MongoDB---Mongoose-for-Beginners/assets/103336107/ec7ccb7e-e87a-4254-884a-601a4d98b8e8)


### How to install MongoDB?
Go to browser & search --> mongodb server download --> Select version and platform --> Download
After that install it.


For Starting MongoDB:</br>
1.go to terminal type mongod -> now the terminal is connected to server</br>
2.go to another tab of the terminal type mongo -> to connect to mongo shell</br>

If MongoDB version is above 5 then mongo command will not run.We have to download mongo shell seperately. 

* mongod -> server
* mongo -> mongo cell
* mongodb compass ->GUI

### How is data stored inside mongoDB ?

**Database  -> Collections(Can have multiple collections)  -> Document(One record/entry into a collection,in which data stored in field and value manne).**

* MongoDB can have multiple databases .
* A database can have multiple collections.
* One single collection can have multiple documents.

### Let's understand with an example: 
**Let's consider that we are building an e-commerce website with a MongoDB database named 'Ecommerce.' Inside this database, we have different collections: 'Admin' for administrators, 'User' for users, and 'Product' for all the products. Each of these collections can have multiple documents. Administrators can have multiple documents, users can have multiple documents, and products can also have multiple documents.**

![image](https://github.com/Subhajit-Bera/MongoDB---Mongoose-for-Beginners/assets/103336107/38136d1a-54a8-4213-965c-919d43e3b259)

### **How does a collection differ from a table?**

* Instead of tables, a MongoDB database stores its data in [collections](https://www.mongodb.com/docs/manual/reference/glossary/#std-term-collection). 
* A collection holds one or more [BSON documents](https://www.mongodb.com/docs/manual/core/document/#std-label-bson-document-format). 
* Documents are analogous to records or rows in a relational database table. 
* Each document has [one or more fields](https://www.mongodb.com/docs/manual/core/document/#std-label-document-structure); fields are similar to the columns in a relational database table.

## Getting started with MongoDB 
### **For Showing Databases :** show dbs 
![image](https://github.com/Subhajit-Bera/MongoDB---Mongoose-for-Beginners/assets/103336107/a6c749e3-8695-4e13-aa79-392771615d61)

These are the databases that already exist in the system.

###  Create a database : use datatbase_name 
```
use newDB
```
![image](https://github.com/Subhajit-Bera/MongoDB---Mongoose-for-Beginners/assets/103336107/f482fde5-091c-4677-8564-55859844b19b)

* We can switch database using **use databae_name** keyword.
* **But if a database does not exist in that case MongoDB creates a new database with the given name.**

### Viewing the Current Database: run the command db
```
db
```

#### Now if we run : 
```
show dbs
```
![image](https://github.com/Subhajit-Bera/MongoDB---Mongoose-for-Beginners/assets/103336107/e0e500b1-089e-46e4-96d6-a8dec4ffc721)</br>
####  Still, it isn't showing the newly created database which is newDB :It is beacuse :
**In MongoDB, a database may not appear in the list of databases until there is some data (i.e., documents) inserted into it or a collection is explicitly created within it. MongoDB follows a **lazy** approach to database creation, meaning that a database isn't created physically until there's some data to store.**


## Collections: 
**Collections in MonogoDB is kind of similar to tables int the SQL world.A collection can contain multiple documents and a document is simply just a single data record.**
### Create Collection in Database and Insert Single Document or Data record: db.collection_name.insertOne({})
Let's create a collection named students inside and insert a documen/record:
```
db.students.insertOne({name : " Subhan , role : "Developer"} )
```
![image](https://github.com/Subhajit-Bera/MongoDB---Mongoose-for-Beginners/assets/103336107/2fb736f2-2a96-42bf-a4bc-fe9116ad31ff)

**If a collection does not exist, MongoDB creates the collection when data is inserted into the collection for the first time.**

* Here db.strudents.insertOne({}) method creates the collection named *students* if it does not already exist.
* We will pass an object inside insertOne({}), and that object will contain fields and their corresponding values for the document or record.
* acknowledge : true -> operation is done  successfully
* We also get an object id associated with the document.

### To show a list of collections : 
```
show collections
```

