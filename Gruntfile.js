module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      build: {
        src: 'public/unminified.js',
        dest: 'public/minified.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['uglify']);

};
