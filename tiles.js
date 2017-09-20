var tiles=[];
tiles.add=(name,colour,x,y)=>{
  var r={name:name,colour:colour};
  if (x!==undefined&&y!==undefined) r.texture=[x,y];
  tiles.push(r);
};
function renderTiles(c,textures,settings,grid,offsetx=0,offsety=0) {
  var x=Math.floor(offsetx/settings.TILE_SIZE),
  y=Math.floor(offsety/settings.TILE_SIZE);
  offsetx=x*settings.TILE_SIZE-offsetx,
  offsety=y*settings.TILE_SIZE-offsety;
  var width=settings.STAGE_WIDTH/settings.TILE_SIZE+(offsetx!==0),
  height=settings.STAGE_HEIGHT/settings.TILE_SIZE+(offsety!==0),
  t;
  for (var i=0;i<width;i++) for (var j=0;j<height;j++) {
    if ((t=tiles[grid[`${i+x},${j+y}`]])!==undefined) {
      if (t.colour) {
        c.fillStyle=t.colour;
        c.fillRect(i*settings.TILE_SIZE+offsetx,j*settings.TILE_SIZE+offsety,settings.TILE_SIZE,settings.TILE_SIZE);
      }
      if (t.texture)
        c.drawImage(textures,t.texture[0]*settings.TILE_SIZE,t.texture[1]*settings.TILE_SIZE,settings.TILE_SIZE,settings.TILE_SIZE,i*settings.TILE_SIZE+offsetx,j*settings.TILE_SIZE+offsety,settings.TILE_SIZE,settings.TILE_SIZE);
    }
  }
}

/*
   _____                   _         _                     _     _   _                  _
  |  __ \                 (_)       | |                   | |   (_) | |                | |
  | |__) |   ___    __ _   _   ___  | |_    ___   _ __    | |_   _  | |   ___   ___    | |__     ___   _ __    ___
  |  _  /   / _ \  / _` | | | / __| | __|  / _ \ | '__|   | __| | | | |  / _ \ / __|   | '_ \   / _ \ | '__|  / _ \
  | | \ \  |  __/ | (_| | | | \__ \ | |_  |  __/ | |      | |_  | | | | |  __/ \__ \   | | | | |  __/ | |    |  __/
  |_|  \_\  \___|  \__, | |_| |___/  \__|  \___| |_|       \__| |_| |_|  \___| |___/   |_| |_|  \___| |_|     \___|
                   __/ |
                  |___/
  Register tiles here

  Use tiles.add to add in the tiles. Please don't change the order!
*/
tiles.add('grass','#4bbf43');
tiles.add('house','#4bbf43',0,0);
tiles.add('tree','#4bbf43',1,0);
