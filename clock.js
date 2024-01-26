//    const clock =document.getElementById('clock')



//   setInterval(function(){
//    let date= new Date() //date humara pass by defeult oject hai
//    console.log(date.toLocaleDateString());
//   }, 1000)
//    //har bar time run k nay k leyh yhn pay humaray pass setinterval juh ki event control krta hai


const clock = document.getElementById('clock');

setInterval(function() {
  let date = new Date(); 
  // console.log(date.toLocaleDateString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
