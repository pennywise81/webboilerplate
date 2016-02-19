module.exports = function(grunt) {
  var vars = {
    javascriptOutFiles: [] // holds all js-files for template usage
    ,environment: 'development' // development | production | others may come...
    ,distributionDir: 'htdocs' // output dir for build
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    ,vars: vars

    // compiling pages
    ,jade: {
      compile: {
        options: {
          pretty: true,
          data: {
            javascriptOutFiles: '<%= vars.javascriptOutFiles %>'
          }
        },
        files: [{
          expand: true,
          cwd: 'pages/',
          src: ['**/*.jade'],
          dest: '<%= vars.distributionDir %>',
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
          dest: '<%= vars.distributionDir %>/css',
          ext: '.min.css'
        }]
      }
    }

    // uglifying scripts
    ,uglify: {
      app: {
        files: {
          '<%= vars.distributionDir %>/javascript/all.min.js': [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
            'javascript/**/*.js'
          ]
        }
      }
    }

    // Clean the build dir
    ,clean: ['<%= vars.distributionDir %>']

    // Copy files
    ,copy: {
      "bootstrap-fonts": {
        expand: true,
        cwd: 'node_modules/bootstrap-sass/assets/fonts/',
        src: '**',
        dest: '<%= vars.distributionDir %>/fonts/'
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
        tasks: ['uglify', 'collectFiles', 'jade']
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
    ['clean', 'uglify', 'collectFiles', 'jade', 'sass', 'copy']);

  grunt.registerTask(
    'collectFiles',
    'looks for javascript files and stores them in array',
    function() {
      var javascriptFiles = grunt.file.expand(vars.distributionDir +
        '/javascript/**/*.js');

      for (var i = 0; i < javascriptFiles.length; i++) {
        vars.javascriptOutFiles.push(javascriptFiles[i].substr(
          vars.distributionDir.length));
      }
    });

  grunt.registerTask('default', []);

};
