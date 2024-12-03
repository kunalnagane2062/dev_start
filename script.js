const videos = [
    {
      image: "images/ajit.png",
      channelLogo: "images/abj_majha.png",
      title: "Ajit Pawar NCP Live | Likely List of Ministers to be announced"
    },
    {
      image: "images/sky.png",
      channelLogo: "images/abj_majha.png",
      title: "Sky News Update | Latest Global Events"
    },
    {
      image: "images/tanmay.png",
      channelLogo: "images/abj_majha.png",
      title: "Tanmay's Comedy Special | Full Episode"
    },
    {
      image: "images/tanmay.png",
      channelLogo: "images/abj_majha.png",
      title: "Jamla Ekdacha Ky Tar "
    },
    {
        image: "images/tanmay.png",
        channelLogo: "images/abj_majha.png",
        title: "Jamla Ekdacha Ky Tar "
    },
    {
        image: "images/tanmay.png",
        channelLogo: "images/abj_majha.png",
        title: "Jamla Ekdacha Ky Tar "
    }
  ];
  
  const contentDiv = document.querySelector('.content');
  
  videos.forEach(video => {
    const windowDiv = document.createElement('div');
    windowDiv.className = 'window';
  
    windowDiv.innerHTML = `
      <div>
        <img src="${video.image}" alt="Video Thumbnail" class="image_div">
      </div>
      <div class="window_info">
        <div class="channel_logo">
          <img src="${video.channelLogo}" alt="Channel Logo">
        </div>
        <div class="video_title">
          <p>${video.title}</p>
        </div>
      </div>
    `;
  
    contentDiv.appendChild(windowDiv);
  });
  