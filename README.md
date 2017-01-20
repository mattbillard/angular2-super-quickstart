#Angular2 Super Quickstart

A suped up version of the Angular2 Quickstart. It has examples of many of the basic pieces of Angular2:
- Modules and submodules
- Components
- "Views" (components that are rendered in the router)
- Routes
- Child / Nested routes 
- Services
- Pipes
- HTTP with Observables, Promises, and Async
- Styles
- Lazy loaded module
- Router guards (requiring authentication) and login


##Install
```
npm install
```

##Run
```
npm start
```
Cleans old .js, compile .ts -> .js, watch for changes to .ts files, start liteserver, open a new browser tab and point it to the web app:


##Development
The run command should be sufficient, but here are some other useful commands.
```
npm run clean
```
Cleans (remove) generated .js and .js.map files. (Very useful if you're moving back to older git commits and have extra files all over the place.)

```
npm run tsc
```
Compiles .ts -> .js

```
npm run tsc:w
```
Watchs for changes to .ts files and compile them

##Use
This code probably has 3 principal uses:
1) Learn from example code
2) Use it as a starter for a simple "brochure" website: delete everything in app/ except for app/core/ . Modify app/core/app.module to remove imports that no longer exist
3) Use it as a starter for an app. Each feature section of the app should be its own module. Take code from each of the modules as needed.
