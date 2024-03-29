import gulp from "gulp";
import gulpTypescript from "gulp-typescript";
import {deleteAsync} from "del";

const tsProject = gulpTypescript.createProject("tsconfig.json");

// Task which would transpile typescript to javascript
gulp.task("typescript", function () {
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
});

// Task which would delete the old dist directory if present
gulp.task("clean", async function () {
    return await deleteAsync("./dist");
});

// Task which would just create a copy of the current views directory in dist directory
gulp.task("views", function () {
    return gulp.src("./src/views/**/*.ejs").pipe(gulp.dest("./dist/views"));
});

// Task which would just create a copy of the current static assets directory in dist directory
gulp.task("public", function () {
    return gulp.src("./src/public/**/*").pipe(gulp.dest("./dist/public"));
});

// The default task which runs at start of the gulpfile.js
gulp.task("default", gulp.series("clean", "typescript", "views", "public"), () => {
    console.log("Gulp process done");
});
