/**
 * Created by marcoramires on 2/02/15.
 */

'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

// express generator
gulp.task('server', function () {
    nodemon({
        script: './bin/www',
        env: { 'NODE_ENV': 'development' },
        nodeArgs: ['--debug']
    });
});

//default
gulp.task('default', ['server'], function() {

});