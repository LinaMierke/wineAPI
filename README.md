# Introduction

This porject was created using the data information from : 

*https://wineoclock.herokuapp.com/wine*

The Wine database contains a lib folder, where you can find the data, connections, schemas and routes. Each section contains a variety levels of code that will allow the user to understand how to conect to the localhost:3000 and access to it. 


# Objectives: 

1. Create a database about countries.
2. Have an accesible Api source for future projects.
3. Understand MongoDB-express and Node.
4. Create an API for the front end-group project.

# CRUD Functionality

|      URL                |  Path        |  Method       |   Action |   Description                 |
|-------------------------|--------------|---------------|----------|-------------------------------|
|       "/"               |   /          |   GET         |  #index  |  List all items of character  |
| "/country/:country"       |   /country    |   GET         |  #index  | Show resources by country |
| "/name/:name"           |   /name      |   GET         |  #index  | Show character by name        |
|       "/"               |   /          |   POST        |  #create | Create a new  wine entrance        |
| "/raiting/:raiting"         |   /raiting      |   PATCH / PUT |  #update | Update raitings             |
| "/delete/:id"           |   /id        |   DELETE      | #destroy | Delete by id                  |



# Documentation

The base data was obtained from https://wineoclock.herokuapp.com/wine, there the Api endpoint was All and we abstracted the info by Command+s and added as a Json documment to the project. 


# License

Private License

