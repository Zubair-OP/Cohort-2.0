const videos = [
  {
    profileName: "hamza_khan",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    caption: "Weekend vibes! 🌴✨",
    likeCount: 1200,
    commentCount: 340,
    shareCount: 85,
    isFollow: true,
    video: "./13244096_1080_1920_30fps.mp4"
  },
  {
    profileName: "techwith_ali",
    profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    caption: "AI tool that will change everything! 🤖",
    likeCount: 980,
    commentCount: 120,
    shareCount: 45,
    isFollow: false,
    video: './14755607_1080_1920_50fps.mp4'
  },
  {
    profileName: "foodie_world",
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    caption: "Street food tour in Lahore! 🍢🔥",
    likeCount: 2500,
    commentCount: 560,
    shareCount: 210,
    isFollow: true,
    video: './19843521-hd_1080_1920_60fps.mp4'
  },
  {
    profileName: "travel_girl",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    caption: "Skardu is heaven on earth! 🏔️❄️",
    likeCount: 3300,
    commentCount: 670,
    shareCount: 150,
    isFollow: false,
    video: "./13244096_1080_1920_30fps.mp4"
  },
  {
    profileName: "fitness_freak",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    caption: "No days off! 💪🔥",
    likeCount: 1900,
    commentCount: 260,
    shareCount: 90,
    isFollow: true,
     video: './14755607_1080_1920_50fps.mp4'
  },
  {
    profileName: "coding_with_zubair",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    caption: "Learning JavaScript loops today 🧠💻",
    likeCount: 640,
    commentCount: 80,
    shareCount: 20,
    isFollow: false,
    video: './19843521-hd_1080_1920_60fps.mp4'
  },
  {
    profileName: "funny_bro",
    profileImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop",
    caption: "POV: Jab teacher attendance le raha hota hai 😂",
    likeCount: 5000,
    commentCount: 850,
    shareCount: 310,
    isFollow: true,
    video: "./13244096_1080_1920_30fps.mp4"
  },
  {
    profileName: "fashion_queen",
    profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    caption: "New winter collection ❄️🧥",
    likeCount: 2750,
    commentCount: 430,
    shareCount: 130,
    isFollow: true,
    video: './14755607_1080_1920_50fps.mp4'
  },
  {
    profileName: "gamer_ahmed",
    profileImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop",
    caption: "PUBG clutch moment! 🔥",
    likeCount: 3600,
    commentCount: 500,
    shareCount: 200,
    isFollow: false,
    video: './19843521-hd_1080_1920_60fps.mp4'
  },
  {
    profileName: "nature_lens",
    profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    caption: "Rainy day aesthetic 🌧️🌿",
    likeCount: 1500,
    commentCount: 210,
    shareCount: 60,
    isFollow: true,
    video: "./13244096_1080_1920_30fps.mp4"
  }
];



let clutter = '';

videos.forEach(function (video) {
    clutter += `<div class="reel">
                    <video autoplay loop muted src="${video.video}"></video>
                    <div class="bottom">
                        <img src="${video.profileImage}" alt="">
                        <h2>${video.profileName}</h2>
                        <button>${video.isFollow ? 'Following' : 'Follow'}</button>
                    </div>
                    <div class="caption"><p>${video.caption}</p></div>
                    <div class="right">
                        <div class="like icon">
                            <i class="ri-heart-3-line"></i>
                            <span>${video.likeCount}</span>
                        </div>
                        <div class="comment icon">
                            <i class="ri-chat-3-line"></i>
                            <span>${video.commentCount}</span>
                        </div>
                        <div class="share icon">
                            <i class="ri-share-forward-line"></i>
                            <span>${video.shareCount}</span>
                        </div>
                        <div class="menu icon">
                            <i class="ri-more-2-fill"></i>
                        </div>
                    </div>
                </div>`;
});

document.querySelector('.all-reels').innerHTML = clutter;