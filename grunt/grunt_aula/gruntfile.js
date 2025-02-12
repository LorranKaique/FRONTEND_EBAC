module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'main.min.css': 'main.less'
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'main2.css': 'main.scss'
                }
            }
        },
        concurrent: {
            target: ['tarefaDemorada','olaGrunt','less','sass']
        }
    })

    grunt.registerTask('olaGrunt', function() {
        const done = this.async();
        setTimeout(function() {
            console.log('olá, Grunt!');
            done();
        }, 3000)
    })

    grunt.registerTask('tarefaDemorada',function(){
        const done = this.async();
        setTimeout(function(){
            console.log('Essa foi demoradinha');
            done();
        }, 6000)
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['concurrent']);


    //começando a instalar o grunt:
    /* 
    no terminal central:
    npm i -g grunt-cli
    npm init
    npm i --save-dev grunt

    no terminal local:
    npm run grunt

        para instalar o less:
        npm install --save-dev grunt-contrib-less

        para instalar o sass:
        npm install --save-dev grunt-contrib-sass

        para executar o grunt de forma paralela:
        npm install --save-dev grunt-concurrent
    */
}