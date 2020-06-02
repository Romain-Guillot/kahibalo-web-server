# WebClient Server

Simple server for rendering HTML pages.  
Render HTML page thanks to the template engine Handlebars. It uses the 
[data server]() which is responsible for managing the data. This server is
responsible for:
- calling the **data server** to get data
- handling the markdown -> html conversion
- rendering the html pages for the web clients

**See the [data server]() for information about the data processing.** 

## Technologies
- **[Node.js]():**
- **[Nest.js]():**
- **[Jade / Pug]():**
- **[SCSS]():**


## Structure

```
|- src                  # Server node.js sources
|----- admin            # module to handle the restricted routes
|----- public           # module to handle the public routes
|- views                # pug files
|----- shared           # general templates and components
|----- pages            # main pages layout
|- public               # static ressources
|----- stylesheets      # Stylsheets files (.scss and the generated .css)
|--------- pages        # Style specific to a page
|----- assets           # static assets (images, ...)
```

## Installation

```bash
$ npm install
```

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```