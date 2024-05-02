
// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/tap-sphere-ball/id6499512976";
}


// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/80/74/d6/8074d6fe-da84-d12b-3f02-14f37711b666/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp",
};

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;



// ======== get images URL ========
imageUrl = {
  image1: "https://vn-appstore.com/id010597666/images/photo1.png",
  image2: "https://vn-appstore.com/id010597666/images/photo2.png",
  image3: "https://vn-appstore.com/id010597666/images/photo3.png",
  image4: "https://vn-appstore.com/id010597666/images/photo4.png",
  image5: "https://vn-appstore.com/id010597666/images/photo5.png",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/be/b7/14/beb71493-1ffc-d7c7-6d52-59f9688f4276/17001e1f-38ba-4118-a27a-b03eac2929e6_Des_11.jpg/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/17/a6/85/17a685aa-5bd4-ac1e-08c3-493dd09e648f/3f22bf65-05ad-43e9-acb5-51ecfd00ffc8_Des_12.jpg/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/1c/bb/b2/1cbbb25c-ef1d-c7ab-7f0b-3a001cb4613d/2e1d2b8f-a313-4254-a828-3450d6e45250_Des_13.jpg/434x0w.webp",
};

var getImg = imageUrl;
document.getElementById('img1').src = getImg.image1
document.getElementById('img2').src = getImg.image2
document.getElementById('img3').src = getImg.image3
document.getElementById('img4').src = getImg.image4
document.getElementById('img5').src = getImg.image5

document.getElementById('pic1').src = getImg.appImg1
document.getElementById('pic2').src = getImg.appImg2
document.getElementById('pic3').src = getImg.appImg3

