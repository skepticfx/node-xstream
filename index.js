var through = require('through');
var Xstream = exports;

// custom_function accepts and returns buffer.
Xstream.hookBuffer = function(custom_function){

  function t_write(data){
    data = custom_function(data);
    var buf = new Buffer(data);
    this.emit('data', buf);
  }

  function t_end(){
    this.emit('end');
  }
return through(t_write, t_end);
}

Xstream.hookString = function(custom_function){

  function t_write(data){
    var str = data.toString('utf8');
    str = custom_function(str);
    var buf = new Buffer(str);
    this.emit('data', buf);
  }

  function t_end(){
    this.emit('end');
  }
return through(t_write, t_end);
}


Xstream.hook = function(custom_function){

  function t_write(data){
    var str = data.toString('utf8');
    str = custom_function(str);
    var buf = new Buffer(str);
    this.emit('data', buf);
  }

  function t_end(){
    this.emit('end');
  }
return through(t_write, t_end);
}

Xstream.replace = function(a, b){

  function t_write(data){
    var str = data.toString('utf8');
    str = str.replace(a, b);
    var buf = new Buffer(str);
    this.emit('data', buf);
  }

  function t_end(){
    this.emit('end');
  }
return through(t_write, t_end);
}
