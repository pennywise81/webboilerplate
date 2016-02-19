# webboilerplate
Let's start something new

## Download
```
git clone git@github.com:pennywise81/webboilerplate.git PROJECTNAME
```

## Download without version control
```
git clone --depth=1 git@github.com:pennywise81/webboilerplate.git PROJECTNAME && rm -rf PROJECTNAME/.git
```

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
- [ ] enable Grunt staging
- [ ] enable livereload "on-the-fly" in dev mode
- [ ] update package.json
- [ ] update README
