#Ember.JS

##Init
- Install Node.js
   - check version
      - node -v
      - npm -v
      - module versions
         - npm list [-g] [ember-cli]
      - module installation dir
         - C:\Users\G\AppData\Roaming\npm
- Install Ember.js
   - npm install -g ember-cli
- Install Ember inspector addon in Chrome
   - Make sure the Allow access to file URLs is check in the Extensions options for Ember Inspector
- Upgrade Ember.js (You can also try to use phpStorm - Settings - Languages & Frameworks - Node.js and NPM)
   - npm uninstall -g ember-cli
   - npm cache clean
   - npm install -g ember-cli
- New Ember app
   - in the directory where you want the app run (it will create a new dir):
      - ember new <app-name>
   - remove ember welcome page from package.json and app\templates\application.hbs
- Add modules
   - use ember install instead of npm install
   - ember install ember-cli-mirage (Not for production)
      - copy D:\Graphical Design\Lynda\WebDesign\EmberJSEssentialTraining\Exercise Files\Ch03\03_07\mirage
         to your project folder

- content in public folder will be copied into the dist folder
- the dist folder is the root of your web site
- run phpStorm as administrator the give the terminal window elevated privileges

##Rendering

- wrapping for index route if present (you need to add it yourself)
   - app/templates/application.hbs (outer shell) by {{outlet}}
   - app/templates/index.hbs has {{outlet}} for sub routes
   - app/templates/bookmarks/new.hbs will be displayed in the {{outlet}} of bookmarks.hbs
   - templates can use components or helpers see about:
      - template: app/templates/about.hbs
      - component: app/templates/components/bookmark-listing.hbs {{yield}} ??
      - helper: app/helpers/bookmark-title.js

##ember generate

- ember g -h for help

- generate a route
   - ember g route about -> will generate:
      - app/routes/about.js (where you can add the model hook, to get you data)
      - app/templates/about.hbs (handlebars template)
      - add a route to app/router.js
   - ember g route index
      - by default the application shows the content of application.hbs
      - there are no templates/index.hbs or routes/index.js
   - ember g route bookmarks/new (generate sub route)
   - ember g route bookmarks/edit -path /edit/:bookmark_id (sub route with parameter)
   - ember g route page-not-found --path /*wildcard
- ember g component bookmark-listing
   - a dash is required to avoid conflict
- ember g helper bookmark-title
- ember g model bookmark
   - app/models/bookmark.js
- ember g controller users/index
   - app/controllers/users/index.js

##ember tests

- localhost:4200/tests will show a overview / result page of all tests