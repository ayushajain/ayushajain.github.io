module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                compress: true
            },
            applib: {
                src: [
                    ['src/js/*.js']
                ],
                dest: 'js/applib.js'
            }
        },
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            build:{
                cwd: 'src',
                src: ['*.html'],
                dest: '',
                ext: '.html',
                expand: true
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, flatten: true, src: ['src/css/skrollr-styles.css'], dest: 'css', filter: 'isFile'},
                ],
            },
        },
        cssmin: {
            options: {
                removeComments: true,
                collapseWhitespace: false
            },
            build:{
                cwd: 'src/css',
                src: ['styles.css'],
                dest: 'css',
                ext: '.min.css',
                expand: true
            }
        },watch: {
            scripts: {
                files: ['src/**'],
                tasks: ['cssmin', 'copy', 'htmlmin', 'uglify'],
                options: {
                    spawn: false,
                },
            },
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks('grunt-contrib-watch')
    // Default task(s)
    grunt.registerTask('default', ['uglify', 'htmlmin', 'cssmin', 'copy', 'watch']);

};
