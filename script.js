
const toggle = document.querySelector('.toggle')
const toggleicon = document.querySelector('.toggle i')
const drop = document.querySelector('.drop_down')

toggle.onclick = function(){
    drop.classList.toggle('open')
    const isopen =drop.classList.contains('open')


    toggleicon.classList = isopen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}


// Automatic Background Image change 

  const backgroundImages = [
    'url("images/1471792.jpg")',
    'url("images/Roger vs Wb.jpg")',
    'url("images/straw-hats.jpg")',
    'url("images/zoro&sanji.jpg")'

  ];

 
  let currentIndex = 0;

  
  function changeBackground() {
    document.body.style.backgroundImage = backgroundImages[currentIndex];
    currentIndex = (currentIndex + 1) % backgroundImages.length;
  }

  
  setInterval(changeBackground, 3000);

  changeBackground();





