module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    copy: {
      html: {
        expand: true,
        cwd: "client/views",
        src: ["index.html",
              "**/*.html"],
        dest: "server/public/views/"
      },
      css: {
        expand: true,
        cwd: "client/styles",
        src: ["style.css"],
        dest: "server/public/styles/"
      },
      js: {
        expand: true, 
        cwd: "client/scripts",
        src: ["client.js"],
        dest: "server/public/scripts/"
      }
    },
    watch: {
      files: [
        "client/**/*.*"
      ],
      tasks: ["copy"]
    }
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["copy", "watch"]);
};
