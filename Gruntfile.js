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
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    'index.html': 'src/index.html',
                    'about.html': 'src/about.html'
                }
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
            },
            build:{
                cwd: 'src/css',
                src: ['about.css', 'styles.css'],
                dest: 'css',
                ext: '.min.css',
                expand: true
            }
        },watch: {
            scripts: {
                files: ['src/**'],
                tasks: ['cssmin', 'copy', 'htmlmin', 'uglify'],
                options: {
                    spawn: false
                },
            },
            options: {
                livereload: true
            }
        },express: {
            options: {
                // Override defaults here
            },
            dev: {
                options: {
                    script: 'webserver.js'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task(s)
    grunt.registerTask('default', ['uglify', 'htmlmin', 'cssmin', 'copy', 'express', 'watch']);

};
