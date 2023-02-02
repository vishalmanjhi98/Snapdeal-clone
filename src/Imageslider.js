// import React from 'react'
// import HeroSlider, { Slider } from 'hero-slider';

// const image1 = "https://n3.sdlcdn.com/imgs/k/f/v/12_april_WB_Breezy_Dresses_WEB-5febf.jpg&quot";
// const image2 = "https://n3.sdlcdn.com/imgs/k/f/v/12_april_WB_Breezy_Dresses_WEB-5febf.jpg&quot";
// const image3 = "https://n3.sdlcdn.com/imgs/k/f/v/12_april_WB_Breezy_Dresses_WEB-5febf.jpg&quot";

// const Imageslider = () => {
//   return (
//     <HeroSlider
//     slidingAnimation="left_to_right"
//     orientation="horizontal"
//     initialSlide={1}
//     onBeforeChange={(priviousSlide,nextSlide) => console.log("onBeforeChange",previousSlide.nextSlide)}
//     OnChange ={nextSlide => console.log("onChange",nextSlide)}
//     onAfterChange={nextSlide => console.log("onAfterChange",nextSlide)}
//     style={{
//       backgroundColor:"rgba(0,0,0,0.33)"
//     }}
//     settings={{
//       slidingDuration: 250,
//       slidingDelay: 100,
//       shouldAutoplay: true,
//       shouldDisplayButtons: true,
//       autoplayDuration: 5000,
//       height: "100vh"
//     }}
//     >
//       <Slide
//           background={{
//             backgroundImage: image1,
//             backgroundAttachment: "fixed"
//           }}
//       />
//       <Slide
//           background={{
//             backgroundImage:image2,
//             backgroundAttachment: "fixed"
//           }}
//       />
//       <Slide
//           background={{
//             backgroundImage: image3,
//             backgroundAttachment: "fixed"
//           }}
//       />
//     </HeroSlider>
//   )
// }

// export default Imageslider