// let video = document.querySelector('video');

// playpause()
// // video.addEventListener("click",playpause);
// let captiontext = document.querySelector(".captiontext");
// let fullcaption = captiontext.innerText;
// let halfcaption = captiontext.innerText.substring(0,100)+"....";
// captiontext.innerText = halfcaption;
// captiontext.addEventListener("click",function(){
//     if(fullcaption != captiontext.innerText){
//     captiontext.innerText = fullcaption;
//     } else {
//         captiontext.innerText = halfcaption;
//     }
// });

// video.addEventListener("ended", () => {changevideo()});

// let changevideo = (e) =>{
//     console.log(e);
//     document.getElementById("vid2").style.transform = "translateY(-100%)";
// Function to get URL parameter by name
function getUrlParameter(name) {
  name = name.replace(/[\[\]]/g, '\\$&');
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  let results = regex.exec(window.location.href);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Function to set URL parameter
function setUrlParameter(key, value) {
  let url = new URL(window.location.href);
  url.searchParams.set(key, value);
  window.history.replaceState(null, null, url);
}
// }
let playpause = (video) => {
  // console.log(video);
  video.paused ? video.play() : video.pause();
  video.parentElement.parentElement.querySelector(".playbtn").style.opacity =
    video.paused ? 1 : 0;
  // video.parentElement.parentElement.querySelector('.playbtn').style.scale = (video.paused)?1:.9;
};

// document.querySelectorAll("video").forEach((video) => {
//   video.addEventListener("click", (e) => {
//     playpause(e.target);
//     //   window.video = e.target;
//   });
// });

// document.querySelectorAll("video").forEach((video) => {
//   video.addEventListener("loadedmetadata", (e) => {
//     //   playpause(e.target);
//     //   window.video = e.target;
//   });
// });

// document.querySelector(".wrapper").addEventListener("scroll", (e) => {
//   // Check if the element being scrolled is the video element
//   // if (e.target.tagName.toLowerCase() === 'video') {
//   //   // Do something with the scrolled video element
//   //   console.log(`Video with ID ${e.target.id} is being scrolled`);
//   // }

//   console.log(e.target);
// });

// document.addEventListener('scroll',(e)=>console.log(e.target));

let init = () => {
  let prevScrollPos = 0;
  const center = document.querySelector(".center");
  const videos = document.querySelectorAll("video");
  console.log(videos);
  // const directionDiv = document.getElementById('direction');

  center.addEventListener("scroll", function () {
    document.querySelector(".active video").play();
    var atSnappingPoint = center.scrollTop % center.offsetHeight === 0;
    var timeOut = atSnappingPoint ? 0 : 150; // Adjust timeout as needed
    
    clearTimeout(center.scrollTimeout); // Clear previous timeout

    center.scrollTimeout = setTimeout(function () {
      // Using the timeOut to evaluate scrolling state
      if (!timeOut) {
        console.log("Center snapped!");
        // integrate()
      } else {
        integrate2()
        console.log("User stopped scrolling on Center.");

      }
    }, timeOut);

    let currentScrollPos = center.scrollTop;
    let direction = currentScrollPos > prevScrollPos ? "down" : "up";
    prevScrollPos = currentScrollPos;

    let i = `Scroll Direction: ${direction}`;
    console.log(i);


    // Find the currently active video
    videos.forEach((video, index) => {
      const rect = video.getBoundingClientRect();
      const isFullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isFullyVisible) {
        // Video is fully in view
        video.classList.add("active");
        video.play();
        setUrlParameter("id",video.getAttribute("id"));
        
    } else {
        // Video is not fully in view
        video.classList.remove("active");
        video.pause();
      }
    });
  });
};
