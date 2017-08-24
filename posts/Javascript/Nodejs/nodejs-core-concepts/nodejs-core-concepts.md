---
id: nodejs-core-concepts
title: Nodejs Core Concpets
date:
---

[EventEmitter][]
================================================================================
In Nodejs, All objects that emit events are intance of EventEmitter. These objects expose an `on(eventName, eventHandler)` method, which could be called to register listeners for an specific event, when the object emits an event, all registered handlers for the event will be called **synchronously**, return value of event handlers will be ignored, if any of the eventHandler throws an exception, the handlers after it will not be called.

```js
[[file: custom_event.js]]
```

```js
[[file: event_async.js]]
```

```js
[[file: event_handler_params.js]]
```

```js
[[file: event_errors.js]]
```

Stream
================================================================================
All streams are instances of EventEmitter. All streams create by Nodejs api works exclusively with strings or [Buffer][] object. Custom stream types could work with other types of js values(except `null`, which has a special meaning in stream, read or write with null values usually indicates end of stream), these stream are considered to be working in **Object Mode**.

Four types of stream:
- **Readable** Stream(R), like [fs.createReadStream][]
- **Writable** Stream(W), like [fs.createWriteStream][]
- **Duplex** Stream(RW), like [net.Socket][]
- **Transform** Stream(RWM), like [zlib.createDeflate][]

Writable Stream Events and Methods
--------------------------------------------------------------------------------

- close
- finish
- drain
- end
- error
- pipe
- unpipe
- end()
- write()
- cork()
- uncork()
- setDefaultEncoding()

Readable Stream
--------------------------------------------------------------------------------
Readable streams has two mode: **flowing** and **puased**. All streams start with paused mode, but could be switched to flowing mode later. In **flowing** mode, data is read automatically and emit via 'data' events as soon as possible. In **paused** mode, stream.read() method must be called to get data chunks from stream. Internally, readable streams has three states: **not generating data**, **generating but not emitting data**, **generating and emitting data**.

To consume stream data, there are three different ways:
* `pipe()` and `unpipe()`
* add `data` event handlers
* `stream.pause()` and `stream.resume()`

Readable stream events and methods:
* close
* data
* end
* error
* readable
* isPaused()
* pause()

Packages that make stream jobs easier:
* [stream-combiner](https://github.com/dominictarr/stream-combiner): turn a pipeline into a single stream
* [through](https://github.com/dominictarr/through): create a generic R/W(Transform) stream with one line
* [split](https://github.com/dominictarr/split): break up stream and reassemble into chunks based on lines
* [duplexer](https://github.com/Raynos/duplexer): create a duplex stream
* [stream-spec](https://github.com/dominictarr/stream-spec): Executable specs for streams(for testings etc)
* [emit-stream](https://github.com/substack/emit-stream): turn event emitters into streams and streams into event emitters
* [event-stream](https://github.com/dominictarr/event-stream): ?
* [mux-demux](https://github.com/dominictarr/mux-demux): multiplex/demultiplex multiple streams
* [deplex-emitter](https://github.com/pgte/duplex-emitter): Turn a stream into an event emitter

Callback
================================================================================
```js
function(err, data){
}
```

[async](https://github.com/caolan/async): Async utility for js

Buffer
================================================================================

Event Loop
================================================================================

[Modules][]
================================================================================
In Nodejs, there are **built-in modules(aka: core modules)** and **custom modules**. Nodejs modules by default, could be files with `js` `json` `node` extensions, or sometimes, even with no extensions at all. It could also be a directory, then `package.json` is parsed, and the `main` field is taken as entry point, if no `package.json` file presents, then `index.js` `index.json` or `index.node` is taken as entry point if one of them exists.

You can determine whether a module is ran directly or required by other modules by check `require.main` and `module` equality, in other languages like Python, we use a similar technique by checking if `__name__ == '__main__'`:
```js
if(require.main === module){
  // if require.main is set to module, then module is called directly
} else {
  // module required by others, should export
}

// another way to do this

if(!module.parent){
  // run directly, when module.parent is null
} else {
  // required by others
}
```

Every nodejs module's code is wrapped by Nodejs, this helps isolate module variables, and also provides some common helper variables like `require` `module` `exports` `__filename` `__dirname`.
```js
(function (exports, require, module, __filename, __dirname) {
// Your module code actually lives in here
});
```

Process.nextTick();
setImmediate();

http://www.joyent.com/blog/streams-in-node

[EventEmitter]: https://nodejs.org/dist/latest-v7.x/docs/api/events.html#events_class_eventemitter
[Modules]: https://nodejs.org/dist/latest-v7.x/docs/api/modules.html
[Buffer]: https://nodejs.org/dist/latest-v7.x/docs/api/buffer.html
[net.Socket]: https://nodejs.org/dist/latest-v7.x/docs/api/net.html#net_class_net_socket
[fs.createReadStream]: https://nodejs.org/dist/latest-v7.x/docs/api/fs.html#fs_fs_createreadstream_path_options
[fs.createWriteStream]: https://nodejs.org/dist/latest-v7.x/docs/api/fs.html#fs_fs_createwritestream_path_options
[zlib.createDeflate]: https://nodejs.org/dist/latest-v7.x/docs/api/zlib.html#zlib_zlib_createdeflate_options
