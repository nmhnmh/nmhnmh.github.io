### Task Dependencies

### Parallel vs Sequential

### Debug Tips

#### Check single task before compound task

Sometimes, you may hook several sub-tasks into a compound task,
a typical web development would include something like a **build** task,
which would probably include many other sub-task like *css-min*, *js-min*,
*image-min*, *uglify* etc, before you hook all these sub-tasks together,
you'd better make sure these sub-tasks works fine alone.

Read more here: https://gulp.readme.io/docs/
