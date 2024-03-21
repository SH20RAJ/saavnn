// let apiurl = "https://saavn.dev/api/";
let page = 1;
let apiurl = "https://saavn.dev/api/search/songs?query=darshan%20raval&page="+page+"&limit=2";
let songid = "tp4MeI1Y";


let allvideos = [];
let newvideos = [];
let arr=[];
localStorage.arr = [1,2];
// let localarr = JSON.parse(localStorage.arr);
let numvideoatatime = 2;
const getnextvideos = async (n) => {
    try {
        let options = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: n || 20,
                filter:  arr.filter((item, index) => arr.indexOf(item) === index)
            })
        };

        let res = await fetch(apiurl, options);

        // let res = await fetch(apiurl);
        let json = await res.json();
        console.log(json);
        

            allvideos = allvideos.concat(json.data);
            newvideos = json.data;
            newvideos = json.data.slice().sort(() => Math.random() - 0.5);
            arr = allvideos.map(video => video.video_id);
            console.log('arr', arr);


            localStorage.allvideos = JSON.stringify(allvideos);
            localStorage.arr = JSON.stringify(arr);

    } catch (error) {
        console.error("Error fetching videos:", error);
        throw error;
    }
};

const getrandomvideos = async (tag) => {
    try {
        let apiurl = "https://saavn.dev/api/search/songs?query=darshan%20raval&page="+page+"&limit=2";
        let res = await fetch(apiurl);
        console.log(apiurl)

        // let res = await fetch(apiurl);
        let json = await res.json();
        console.log(json);
            newvideos = json.data.results;
            allvideos.push(...newvideos)
            page++
            console.log(page)

    } catch (error) {
        console.error("Error fetching videos:", error);
        throw error;
    }
};



let integrate2 = async (n) => {
    try {
        await getrandomvideos(n);
        console.log("All videos:", allvideos);
        console.log("New videos:", newvideos);
        newvideos.forEach((e)=>{
            document.querySelector(".center").insertAdjacentHTML( 'beforeend', createcard2(e)); 
        });

        document.querySelectorAll("video").forEach(video => {
            video.addEventListener("click", (e) => {
              playpause(e.target);
            //   window.video = e.target;
            });
          });
          init();
        
        


    } catch (error) {
        console.error("Error getting videos:", error);
    }
};

let createcard2 = (video)=>
html = `<div id="vid" class="wrapper" >
<div class="wrapper_header">
   <a href="">following</a> | <a href="">feeds</a>
</div>
<div class="video-container active">
   <div class="playbtn">
       <i class=" fa fa-play"></i>
   </div>

   <div class="video-player" style="background: url(${video.image[2].url});" data-bg="${video.image[2].url}">
       <video controls preload="none" poster="${video.image[2].url}" src="${video.downloadUrl[4].url}" playsinline id="${video.id}" width="100%" loading="lazy" loop></video>
   </div>
</div>
<div class="cations">
   <div class="author"><img src="logo.png" alt=""> <span>@</span>GliiJoy </div>
   <div class="captiontext">${video.name +" - "+ video.label}</div>
</div>
<div class="tools">
   <i class="fa fa-heart-o"></i>
   <i class="fa fa-comment-o"></i>
   <i class="fa fa fa-share"></i>
</div>
<div class="comments">
   <div class="comment">
       <div class="comment_author">@ravi</div>
       <div class="comment_content">This is a great video! Keep up the good work.</div>
   </div>
</div>
</div> `;


integrate2()