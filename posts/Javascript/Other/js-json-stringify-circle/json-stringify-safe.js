exports = module.exports = stringify
exports.getSerialize = serializer

function stringify(obj, replacer, spaces, cycleReplacer) {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces)
}

function serializer(replacer, cycleReplacer) {
  // keep track of the object keys and values
  var stack = [], keys = []

  // default cycle replacer
  if (cycleReplacer == null) cycleReplacer = function(key, value) {
    // single level circle
    if (stack[0] === value) return "[Circular ~]"
    return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]"
  }

  return function(key, value) {
    if (stack.length > 0) {
      // this pointer always point to the containing object of current key, value
      // so its value changes when different key, value are processed
      let thisPos = stack.indexOf(this);
      let alreadyQueued = thisPos > -1;
      // if current this object saved in the stack, clear everything after it in the stack
      // if not, save it in the stack
      alreadyQueued ? stack.splice(thisPos + 1) : stack.push(this);
      // if current this object saved in the stack, clear previous processed keys
      // make sure current processed key is the last on in the stack
      alreadyQueued ? keys.splice(thisPos, Infinity, key) : keys.push(key);
      // check if value is a circle ref, there will be a circle if one of the child
      // refers its containing parent value(direct or indirect)
      // when a circle if found, call the cycleReplacer function to process it
      if (stack.indexOf(value)!==-1)
        value = cycleReplacer.call(this, key, value);
    } else {
      // first value, the outmost object itself, just save it on the stack
      stack.push(value);
    }

    // call user replacer function
    return replacer == null ? value : replacer.call(this, key, value)
  }
}
