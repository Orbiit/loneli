var settings={
  STAGE_WIDTH:400,
  STAGE_HEIGHT:225,
  TILE_SIZE:25
},
render={},
map={};
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
    render.c.fillRect(0,0,render.canvas.width,render.canvas.height);
  }
  var c;
  render.textures=document.getElementById('textures'),
  render.canvas=document.getElementById('stage'),
  render.c=c=render.canvas.getContext('2d'),
  // render.pxr=(window.devicePixelRatio||1)/(c.webkitBackingStorePixelRatio||c.mozBackingStorePixelRatio||c.msBackingStorePixelRatio||c.oBackingStorePixelRatio||c.backingStorePixelRatio||1);
  render.pxr=1; // mm
  window.addEventListener("resize",resizeCanvas,false);
  resizeCanvas();
  for (var i=0;i<160;i++) map[`${Math.floor(i/9)},${i%9}`]=Math.floor(Math.random()*3);
  scroll=[0,0];
  function draw() {
    renderTiles(render.c,render.textures,settings,map,scroll[0],scroll[1]);
    c.drawImage(textures,2*settings.TILE_SIZE,0,settings.TILE_SIZE,settings.TILE_SIZE,(render.canvas.width-settings.TILE_SIZE)/2,(render.canvas.height-settings.TILE_SIZE)/2,settings.TILE_SIZE,settings.TILE_SIZE);
    // window.requestAnimationFrame(draw);
  }
  window.requestAnimationFrame(draw);
},false);
