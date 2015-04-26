/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compress');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ["dist", "temp"],
    concat: {
      dist: {
        src: ['src/core.js', 'src/lang.js', 'src/main.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      dist: {
        options: {
          banner: "/*! xhEditor v<%= pkg.version %> | (c) 2009, 2013 xheditor.com.\r\nLicence: http://xheditor.com/license/lgpl.txt */\n",
          beautify: {
            ascii_only: true
          }
        },
        files: {
          'dist/<%= pkg.name %>-<%= pkg.version %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    copy: {
      release: {
        options: {
          processContentExclude: ['**/*.gif','**/*.png','**/*.swf'],
          processContent: function(content, filename){
            var pkg = grunt.config( "pkg" );
            if(/\.min\.js$/i.test(filename)){
              content = content.replace(/@VERSION/g,pkg.version);
              content = content.replace(/@BUILDDATE/g,grunt.template.today("yymmdd"));
            }
            else if(/\.html$/i.test(filename)){
              content = content.replace(/xheditor\.js"/g, pkg.name + '-' + pkg.version + '.min.js"');
            }
            return content;
          }
        },
        files: [
          {src: ['dist/<%= pkg.name %>-<%= pkg.version %>.min.js'], dest: 'temp/xheditor-<%= pkg.version %>/<%= pkg.name %>-<%= pkg.version %>.min.js'},
          {expand: true, src:['xheditor_lang/**'], dest: 'temp/xheditor-<%= pkg.version %>/'},
          {expand: true, src:['xheditor_skin/**'], dest: 'temp/xheditor-<%= pkg.version %>/'},
          {expand: true, src:['xheditor_emot/**'], dest: 'temp/xheditor-<%= pkg.version %>/'},
          {expand: true, src:['xheditor_plugins/**'], dest: 'temp/xheditor-<%= pkg.version %>/'},
          {expand: true, src:['demos/**'], dest: 'temp/xheditor-<%= pkg.version %>/'},
          {expand: true, src:['jquery/**'], dest: 'temp/xheditor-<%= pkg.version %>/'},
          {expand: true, src:['serverscript/**'], dest: 'temp/xheditor-<%= pkg.version %>/'},
          {expand: true, src:['CHANGE.md', 'LGPL-LICENSE.txt', 'README.md', 'THANKS.md', 'TODO.md', 'wizard.html'], dest: 'temp/xheditor-<%= pkg.version %>/'}
        ]
      }
    },
    compress: {
      'zip': {
        options: {
          archive: 'release/<%= pkg.name %>-<%= pkg.version %>.zip'
        },
        files: [
          {expand:true, cwd: 'temp', src: ['xheditor-<%= pkg.version %>/**'], dest: '/'},
        ]
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['clean', 'concat', 'uglify', 'copy', 'compress',]);

};
