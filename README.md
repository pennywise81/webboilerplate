# webboilerplate
Let's start something new

## NPM tasks

### Install

Installs dependencies in `./node_modules/`
```
npm install
```

### Start

Runs grunt's `build` tasks and starts a webserver on http://localhost:8080 with `./htdocs/` as entrypoint
```
npm start
```

## Grunt tasks

Compile jade templates.
```
grunt jade
```

Clean files and folders.
```
grunt clean
```

Run predefined tasks whenever watched files change.
```
grunt watch
```

Minify files with UglifyJS.
```
grunt uglify
```

Compile Sass to CSS
```
grunt sass
```

Copy files.
```
grunt copy
```

Clean dist dir and build all
```
grunt build
```

## To do
- [ ] update README