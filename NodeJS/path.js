var path=require('path');
// myfile.html
console.log(path.basename('C:\\temp\\myfile.html'));
// quux
console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html'));
// /foo/bar/baz/asdf
console.log(path.dirname('/foo/bar/baz/asdf/quux.js'));
// .html
console.log(path.extname('/foo/bar/baz/asdf/index.js.css.html'));
