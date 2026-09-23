/* Space & Matter showreel - extra projects (stills + video) and the play order.

   These are NOT Marzipano panorama tours: each scene is a plain image or video shown
   full-bleed, images with a slow zoom. They have NO QR code (the panorama projects in
   tours.js keep theirs).

   To add a project: drop files in stills/ or video/, add an entry below, then add its id
   to SHOWREEL_ORDER. Scene `type` is 'image' or 'video'.

   Optional, per image:
     focus: "X% Y%"   point of interest - the zoom heads there and the crop favours it.
                      "50% 50%" is the centre (default); "50% 75%" = centred, 3/4 down.
     zoom:  "in"|"out" force the direction (default alternates in/out along the reel). */
window.SHOWREEL_PROJECTS = [
  { id:"blok-16", name:"Blok 16", scenes:[
      { type:"image", file:"stills/blok-16-01.webp", focus:"50% 90%", zoom:"in" },
      { type:"image", file:"stills/blok-16-02.webp", zoom:"out" },
      { type:"image", file:"stills/blok-16-03.webp", zoom:"in" },
  ] },
  { id:"common-woods", name:"Common Woods", scenes:[
      { type:"image", file:"stills/common-woods-01.webp" },
      { type:"image", file:"stills/common-woods-02.webp" },
  ] },
  { id:"e-buurt", name:"E-buurt", scenes:[
      { type:"image", file:"stills/e-buurt-01.webp" },
  ] },
  { id:"edisonweg", name:"Edisonweg", scenes:[
      { type:"image", file:"stills/edisonweg-01.webp", focus:"50% 95%", zoom:"in" },
  ] },
  { id:"lincolnpark", name:"Lincolnpark", scenes:[
      { type:"image", file:"stills/lincolnpark-01.webp" },
      { type:"image", file:"stills/lincolnpark-02.webp" },
  ] },
  { id:"schiphol-c-pier", name:"Schiphol C-Pier", scenes:[
      { type:"image", file:"stills/schiphol-c-pier-01.webp", zoom:"out" },
      { type:"image", file:"stills/schiphol-c-pier-02.webp", zoom:"in" },
  ] },
  { id:"strandeiland", name:"Strandeiland", scenes:[
      { type:"image", file:"stills/strandeiland-01.webp", zoom:"out" },
      { type:"image", file:"stills/strandeiland-02.webp", zoom:"in" },
  ] },
  { id:"wittenborg", name:"Wittenborg", scenes:[
      { type:"image", file:"stills/wittenborg-01.webp" },
  ] },
  { id:"silo", name:"SILO", scenes:[
      { type:"video", file:"video/silo.mp4" },
  ] },
];

/* Play order across ALL projects, panorama tours included. Randomised once -
   reorder these lines freely. Any project missing from this list plays last. */
window.SHOWREEL_ORDER = [
  "e-buurt",
  "silo",
  "edisonweg",
  "margriettoren",
  "strandeiland",
  "wittenborg",
  "omval",
  "lincolnpark",
  "common-woods",
  "blok-16",
  "schiphol-c-pier",
  "zeist",
];
