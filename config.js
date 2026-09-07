/* Space & Matter — default tour (shown by plain viewer.html).
   Your real tours are margriettoren.js and zeist.js (opened via ?tour=...). */
window.TOUR = {
  title: "Space & Matter",
  settings: {
    fovMin: 40, fovMax: 100,
    yawLimited: false, yawRange: 200,
    pitchLimited: true, pitchUp: 55, pitchDown: 30
  },
  scenes: [
    { id: "margriettoren", name: "Margriettoren",  file: "panos/margriettoren-01.jpg",  front: { yaw: 0, pitch: 0 } },
    { id: "zeist-1",       name: "Zeist — view 1", file: "panos/zeist-panorama-01.jpg", front: { yaw: 0, pitch: 0 } },
    { id: "zeist-2",       name: "Zeist — view 2", file: "panos/zeist-panorama-03.jpg", front: { yaw: 0, pitch: 0 } }
  ]
};
