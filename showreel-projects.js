/* Space & Matter showreel - extra projects (stills + video) and the play order.

   These are NOT Marzipano panorama tours: each scene is a plain image or video shown
   full-bleed, images with a slow zoom. They have NO QR code (the panorama projects in
   tours.js keep theirs).

   To add a project: drop files in stills/ or video/, add an entry below, then add its id
   to SHOWREEL_ORDER. Scene `type` is 'image' or 'video'.

   Optional, per image:
     focus: "X% Y%"   point of interest - the zoom heads there and the crop favours it.
                      "50% 50%" is the centre (default); "50% 75%" = centred, 3/4 down.
     zoom:  "in"|"out" force the direction (default alternates in/out along the reel).
     scale: [from, to] exact zoom range instead, e.g. [1.30, 1.48] starts already zoomed in.
   Optional, per video:
     stepped: true     a frame-by-frame animation - it slows down with the rest of the reel.

   An entry whose id matches a panorama tour (e.g. "margriettoren") is not a new project; it
   keeps the tour's name and QR code, and either:
     - adds its scenes to the END of that tour, or
     - if it contains { type:"pano", scene:"<scene id>" } entries, sets the tour's complete
       sequence in the showreel (panoramas not listed are left out of the reel only - the
       QR panorama tour itself is unchanged).

   SHOWREEL_CLOSING (bottom of this file) is the closing card that ends every loop. */
window.SHOWREEL_PROJECTS = [
  { id:"blok-16", name:"Blok 16", scenes:[
      { type:"image", file:"stills/blok-16-01.webp", focus:"50% 90%", zoom:"in" },
      { type:"image", file:"stills/blok-16-model.webp", zoom:"out" },
      { type:"image", file:"stills/blok-16-03.webp", zoom:"in" },
  ] },
  { id:"common-woods", name:"Common Woods", scenes:[
      { type:"image", file:"stills/common-woods-01.webp" },
      { type:"image", file:"stills/common-woods-02.webp", focus:"50% 95%" },
  ] },
  { id:"e-buurt", name:"E-buurt", scenes:[
      { type:"image", file:"stills/e-buurt-01.webp" },
  ] },
  { id:"edisonweg", name:"Edisonweg", scenes:[
      { type:"image", file:"stills/edisonweg-01.webp", focus:"50% 95%", zoom:"in" },
      { type:"image", file:"stills/edisonweg-02.webp" },
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
      // Starts already zoomed in so the Gemini mark (bottom-right) is never on screen;
      // it stays off-screen for any zoom of 1.29 or more with this focus.
      { type:"image", file:"stills/wittenborg-01.webp", focus:"45% 60%", scale:[1.30, 1.48] },
  ] },
  // Added to the HBW75 (margriettoren) panorama tour: plays right after its rendered video.
  // High-res rebuild of Margriet-360.gif - same 16 turntable frames, same order and timing.
  { id:"margriettoren", scenes:[
      { type:"video", file:"video/margriettoren-360.mp4", stepped:true },
  ] },
  // Slotlaan, Zeist panorama tour - showreel sequence: the Slotlaan model photo replaces the
  // second panorama (zeist-panorama-01). The QR tour still has all three panoramas.
  { id:"zeist", scenes:[
      { type:"pano",  scene:"zeist-panorama-03" },
      { type:"image", file:"stills/zeist-slotlaan-01.webp" },
      { type:"pano",  scene:"zeist-panorama-02" },
  ] },
  { id:"delft-veld-6-7", name:"Delft veld 6.7", scenes:[
      { type:"image", file:"stills/delft-veld-6-7-01.webp" },
      { type:"video", file:"video/delft-veld-6-7.mp4" },
  ] },
  // Kavel 17.3 - shares its id with the "kavel17-3" panorama tour, so it shows that tour's QR
  // code. sequence:true = these scenes are the project's whole showreel sequence: the Enscape
  // render stands in for the panorama (the QR tour itself still has the panorama).
  // Corner view (01): Photoshop Generative Expand to 16:9 of the CMYK print file, colour-managed
  // (U.S. Web Coated SWOP v2) to sRGB; zooms in on the ground floor.
  { id:"kavel17-3", name:"Kavel 17.3", sequence:true, scenes:[
      { type:"image", file:"stills/kavel17-3-01.webp?v=2", zoom:"in", focus:"46% 92%" },
      { type:"image", file:"stills/kavel17-3-render.webp", zoom:"out" },
      { type:"image", file:"stills/kavel17-3-02.webp", zoom:"in", focus:"55% 90%" },
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
  "kavel17-3",
  "blok-16",
  "schiphol-c-pier",
  "zeist",
  "delft-veld-6-7",
];

/* Closing card, played after the last project before the reel loops. No logo box, no QR.
   VIDEO closer (current): the clip fades in over the last project and plays at its own speed;
   the BLACK logo fades in at `logoAt` seconds into the clip, centred on `logoTop` % from the top
   (the empty wall above the model); when the clip ends it fades out to white while the logo
   glides to the centre, stays alone for `logoHold` s (doubled by the reel's SLOW factor), then
   fades out and the first project fades in.
   (Old image closer: set image:"stills/closing.webp" and drop `video` - white logo on black.) */
window.SHOWREEL_CLOSING = {
  video: "video/closing.mp4",   // MVI_5342.MP4 with the first 3 s cut (38 s, 1440p)
  logoAt: 16,                   // = 0:19 in the original clip
  logoTop: 12.5,                // % from the top while the clip plays (50 = centre)
  logoHold: 3,                  // x SLOW (2) = ~6 s of logo alone on white after the fade
};
