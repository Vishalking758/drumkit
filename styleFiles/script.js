window.addEventListener('keydown', function(affect){
    let btn=document.querySelector(`.btn[data-key="${affect.keyCode}"]`);
    var sound = document.querySelector(`audio[data-key="${affect.keyCode}"]`);
    if(sound){
sound.currentTime=0;
sound.play();
btn.classList.add('btn-affect');}
return;
})
