const names=require('./1.module-names');
const sayHi=require('./1-modules-utils');
console.log(names);

sayHi('Moazzam');
sayHi(names.Zaffar);
sayHi(names.Yash);
require('./1-modules-explicit');