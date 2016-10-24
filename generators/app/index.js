/**
 * Created by jiangyang on 16/10/24.
 */
var path = require('path');
var chalk = require('chalk');
var util = require('util');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var h5workflow = yeoman.Base.extend({
    info: function () {
        this.log(chalk.green(
            'I am going to build your project!'
        ));
    },
    generateBasic: function () {
        this.directory('src', 'src');
        this.copy('package.json', 'package.json');
        this.copy('index.html', 'index.html');
        this.copy('gulpfile.js', 'gulpfile.js');
    },
    install: function () {
        this.installDependencies({
            // skipInstall: this.options['skip-install']
        });
    },
    end: function () {
        this.log(yosay(
            'Your app has been created successfully!'
        ));
    }
});
module.exports = h5workflow;