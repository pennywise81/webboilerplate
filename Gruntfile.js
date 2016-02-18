module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    // compiling pages
    ,jade: {
      compile: {
        files: [{
          expand: true,
          cwd: 'pages/',
          src: ['**/*.jade'],
          dest: 'htdocs',
          ext: '.html'
        }]
      }
    }

    // compiling sass
    ,sass: {
      dist: {
        options: {},
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['**/*.scss'],
          dest: 'htdocs/css',
          ext: '.min.css'
        }]
      }
    }

    // uglifying scripts
    ,uglify: {
      app: {
        files: {
          'htdocs/javascript/all.min.js': [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
            'javascript/**/*.js'
          ]
        }
      }
    }

    // Clean the build dir
    ,clean: ["htdocs"]

    // Copy files
    ,copy: {
      "bootstrap-fonts": {
        expand: true,
        cwd: 'node_modules/bootstrap-sass/assets/fonts/',
        src: '**',
        dest: 'htdocs/fonts/'
      }
    }

    // defining watchers
    ,watch: {
      options: {
        livereload: true
      },
      // JADE
      jade: {
        files: ['pages/**/*.jade', 'templates/**/*.jade'],
        tasks: ['jade']
      },
      // JAVASCRIPT
      javascript: {
        files: ['javascript/**/*.js'],
        tasks: ['uglify:app']
      },
      // SASS
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', 'Clean dist dir and build all',
    ['clean', 'jade', 'uglify', 'sass', 'copy']);
  grunt.registerTask('default', []);

};