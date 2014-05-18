var through = require('through');
var Xstream = exports;

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
