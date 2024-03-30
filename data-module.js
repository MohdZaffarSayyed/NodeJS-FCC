const d = new Date()
const data={
    name:"Zaffar Sayyed",
    yob: 2001,
    designation:"developer",
    getAge: function(){
      return( parseInt(d.getFullYear())- this.yob);
    },
    age:0
}

data.age= data.getAge();

module.exports=data;