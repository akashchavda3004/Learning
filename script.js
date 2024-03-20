// /* to set current time */
// const time = new Date();
// const hour = -3600 * (time.getHours() % 12);
// const mins = -60 * time.getMinutes();
// app.style.setProperty('--_dm', `${mins}s`);
// app.style.setProperty('--_dh', `${(hour+mins)}s`);


setInterval(() =>{
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrotation=30*htime + mtime/2;
    mrotation= 6*mtime;
    srotation= 6*stime;
    hour.style.transform=`rotate(${hrotation}deg)`;
    minutes.style.transform=`rotate(${mrotation}deg)`;
    seconds.style.transform=`rotate(${srotation}deg)`;
console.log(stime);
},1000)