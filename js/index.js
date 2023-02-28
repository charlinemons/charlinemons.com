document.addEventListener('DOMContentLoaded', function(){
    var trigger = new ScrollTrigger();
});
  
  
  const menuItem = document.querySelector(".shonen");
  
  function followImageCursor(event, menuItem) {
    const contentBox = menuItem.getBoundingClientRect();
    const dx = event.pageX - contentBox.x;
    const dy = event.pageY - contentBox.y;
    menuItem.children[1].style.transform = `translate(${dx}px, ${dy}px)`;
  }
  
  menuItem.addEventListener("mousemove", (event) => {
    setInterval(followImageCursor(event, menuItem), 1000);
  });

  document.getElementById("year").innerHTML = new Date().getFullYear();
