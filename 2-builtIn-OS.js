const OS= require('os');
const user=OS.userInfo()
console.log(user);

//This method returns the system Uptime in seconds

console.log(`The system is up and running from last ${OS.uptime()/3600} hours`);

const CurrentOSData={
    name:OS.type(),
    release:OS.release(),
    totalMem:OS.totalmem(),
    freeMem:OS.freemem()
}

console.log(CurrentOSData);