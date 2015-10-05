# v8gc
Experiments with the V8 Garbage Collector

This repo is my "scratch pad" for playing with the V8 Garbage Collector.  After
struggling with memory management in Node and doing a lot of reading I came
across various ideas and techniques for dealing with memory in Node/V8.

This repo may change from time to time.

# The How To

The app is a simple http server that responds with the current memory usage. To
run the main app,
```
node app.js
```

To view the output, just visit http://localhost:8080 in a browser.  If you
refresh the page over and over, you'll see the memory usage slowly start to make
it's way higher.

To force a garbage collection, you need to run the same application with a flag:
```
node --expose-gc app.js
```
This flag allows us to call the gc() function whenever we wish. To call the gc()
function, we're going to send the application a signal.  To do that, you'll want
to open another terminal window and run the following:
```
kill -SIGUSR2 $(pgrep -lfa node | grep app.js | awk '{print $1}')
```
Note: the code that responds to this signal is in the app.js file.
