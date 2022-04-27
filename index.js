let div_one = document.getElementById("div_one");
let div_two = document.getElementById("div_two");
let div_three = document.getElementById("div_three");
let div_four = document.getElementById("div_four");
var myHeaders = new Headers();
myHeaders.append("Authorization", "Client-ID 0a352154921e5ec");

var formdata = new FormData();

let requestType = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch(
  "https://api.imgur.com/3/gallery/top/viral/month/1?showViral=true&mature=true&album_previews=true",
  requestType,
)
  .then((res) => res.json())
  .then((res) => tagsDisplay(res.data)) // refer tagsDisplay Function
  .catch((err) => console.log("err:", err));

function tagsDisplay(tags) {
  let tag1 = tags.slice(0, 15);
  let tag2 = tags.slice(15, 30);
  let tag3 = tags.slice(30, 45);
  let tag4 = tags.slice(45, 60);

  tag1.forEach((el) => {
    if (el.images) {
      if (el.images[0].type === "image/jpeg") {
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = el.images[0].link;
        let h4 = document.createElement("h4");
        h4.textContent = el.title;
        h4.setAttribute("class", "name");
        div.append(image, h4);
        div_one.append(div);
      } else if (el.images[0].type === "video/mp4") {
        let video = document.createElement("video");
        video.src = el.images[0].link;
        video.controls = true;
      }
    } else if (el.link) {
      let div = document.createElement("div");
      let image = document.createElement("img");
      image.src = el.link;
      let h4 = document.createElement("h4");
      h4.textContent = el.title;
      h4.setAttribute("class", "name");
      div.append(image, h4);
      div_one.append(div);
    }
  });

  tag2.forEach((el) => {
    if (el.images) {
      if (el.images[0].type === "image/jpeg") {
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.images[0].link;

        let h4 = document.createElement("h4");
        h4.textContent = el.title;
        h4.setAttribute("class", "name");

        div.append(image, h4);
        div_two.append(div);
      } else if (el.images[0].type === "video/mp4") {
        let video = document.createElement("video");
        video.src = el.images[0].link;
        video.controls = true;
      }
    } else if (el.link) {
      let div = document.createElement("div");

      let image = document.createElement("img");
      image.src = el.link;

      let h4 = document.createElement("h4");
      h4.textContent = el.title;
      h4.setAttribute("class", "name");

      div.append(image, h4);
      div_two.append(div);
    }
  });

  tag3.forEach((el) => {
    if (el.images) {
      if (el.images[0].type === "image/jpeg") {
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.images[0].link;

        let h4 = document.createElement("h4");
        h4.textContent = el.title;
        h4.setAttribute("class", "name");

        div.append(image, h4);
        div_three.append(div);
      } else if (el.images[0].type === "video/mp4") {
        let video = document.createElement("video");
        video.src = el.images[0].link;
        video.controls = true;
      }
    } else if (el.link) {
      let div = document.createElement("div");

      let image = document.createElement("img");
      image.src = el.link;

      let h4 = document.createElement("h4");
      h4.textContent = el.title;
      h4.setAttribute("class", "name");

      div.append(image, h4);
      div_three.append(div);
    }
  });

  tag4.forEach((el) => {
    if (el.images) {
      if (el.images[0].type === "image/jpeg") {
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.images[0].link;

        let h4 = document.createElement("h4");
        h4.textContent = el.title;
        h4.setAttribute("class", "name");

        div.append(image, h4);
        div_four.append(div);
      } else if (el.images[0].type === "video/mp4") {
        let video = document.createElement("video");
        video.src = el.images[0].link;
        video.controls = true;
      }
    } else if (el.link) {
      let div = document.createElement("div");

      let image = document.createElement("img");
      image.src = el.link;

      let h4 = document.createElement("h4");
      h4.textContent = el.title;
      h4.setAttribute("class", "name");

      div.append(image, h4);
      div_four.append(div);
    }
  });
}
