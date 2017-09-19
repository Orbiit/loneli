var settings={
  STAGE_WIDTH:400,
  STAGE_HEIGHT:225
},
render={};
window.addEventListener("load",e=>{
  function resizeCanvas() {
    var w,h; // if screen too small, resize proportionally to fit
    if (window.innerWidth<settings.STAGE_WIDTH) w=window.innerWidth,h=settings.STAGE_HEIGHT*window.innerWidth/settings.STAGE_WIDTH;
    else if (window.innerHeight<settings.STAGE_HEIGHT) w=window.innerHeight/settings.STAGE_HEIGHT*settings.STAGE_WIDTH,h=window.innerHeight;
    else w=settings.STAGE_WIDTH,h=settings.STAGE_HEIGHT;
    render.canvas.width=w*render.pxr;
    render.canvas.style.width=w+'px';
    render.canvas.height=h*render.pxr;
    render.canvas.style.height=h+'px';
    render.c.scale(render.pxr,render.pxr);
    render.c.fillStyle='#333';
    render.c.fillRect(0,0,render.canvas.width,render.canvas.height);
  }
  var c;
  render.textures=document.getElementById('textures'),
  render.canvas=document.getElementById('stage'),
  render.c=c=render.canvas.getContext('2d'),
  render.pxr=(window.devicePixelRatio||1)/(c.webkitBackingStorePixelRatio||c.mozBackingStorePixelRatio||c.msBackingStorePixelRatio||c.oBackingStorePixelRatio||c.backingStorePixelRatio||1);
  window.addEventListener("resize",resizeCanvas,false);
  resizeCanvas();
},false);
