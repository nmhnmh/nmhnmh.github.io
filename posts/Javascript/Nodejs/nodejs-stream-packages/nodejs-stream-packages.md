---
id: nodejs-stream-packages
title: Nodejs Stream Packages
date: 
---

[Streams][] are essential in Nodejs apps, for something essential, there must exist some helpers and utility packages for it, this post is about Nodejs packages related to Streams. In most cases, we are just consuming streams, so we are not even aware of their existence. But if you are creating a library, you probably need to implement the Stream API, and thus need to scratch the surface and touch the details of streams.

Below is a list of Nodejs packages that can help you with Streams:

## [from][]: Easy Way To Create A Readable Stream

<!--display with runkit lazily with runkit sdk-->
<code class="runkit" data-file="from.js"></code>

## [through][]: Easy Way to Create a Readable&Writable Stream

[Streams]: https://nodejs.org/api/stream.html "Nodejs Streams"

[from]: https://github.com/dominictarr/from
[from2]: https://github.com/hughsk/from2
[stream-from]: https://github.com/schnittstabil/stream-from
[pull-stream]: https://github.com/pull-stream/pull-stream
[through]: https://github.com/dominictarr/through
[through2]: https://github.com/rvagg/through2
[event-stream]: https://github.com/dominictarr/event-stream
[mississippi]: https://github.com/maxogden/mississippi
[duplexer]: https://github.com/Raynos/duplexer
[shoe]: https://github.com/substack/shoe
[mux-demux]: https://github.com/dominictarr/mux-demux
[duplex-emitter]: https://github.com/pgte/duplex-emitter
[split]: https://github.com/dominictarr/split
