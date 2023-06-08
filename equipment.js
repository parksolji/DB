const li = document.getElementById("btnSet");
const $listBtn = document.getElementById("listBtn");
const listName = []; // 최종 이름들이 담긴 리스트!!!!

function toggle() {
  if (li.style.display !== "none") {
    $profile.style.opacity = 1;
    $bt.style.opacity = 1;
    li.style.display = "none";
  } else {
    $profile.style.opacity = 0.4;
    $bt.style.opacity = 0.4;
    li.style.opacity = 1;
    li.style.display = "flex";
  }
}
$listBtn.addEventListener("click", toggle);

const IMG = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxmdxCmaF0aRGN4gUi2o3xueEigSn5F9ymA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxmdxCmaF0aRGN4gUi2o3xueEigSn5F9ymA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxmdxCmaF0aRGN4gUi2o3xueEigSn5F9ymA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxmdxCmaF0aRGN4gUi2o3xueEigSn5F9ymA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxmdxCmaF0aRGN4gUi2o3xueEigSn5F9ymA&usqp=CAU",
];

const equipmentName = [
  "PullUpBar",
  "ShoulderPressMachine",
  "AssistPullUpMachine",
  "BenchPress",
  "SquatMachine",
];

const exercisePart = ["Back", "Shoulder", "Back", "Chest", "Hip"];

const container = document.querySelector("#container");
for (let i = 0; i < IMG.length; i++) {
  const img = document.createElement("img");
  img.setAttribute("class", "eqp");
  img.setAttribute("src", IMG[i]);
  const data = document.createElement("span");
  data.textContent = equipmentName[i];

  const bigContainer = document.createElement("div");
  const imgContainer = document.createElement("div");
  const dataContainer = document.createElement("div");

  bigContainer.style.display = "flex";
  bigContainer.style.flexDirection = "row";
  bigContainer.style.alignItems = "center";
  dataContainer.style.fontSize = "20px";
  dataContainer.style.fontWeight = "550";

  dataContainer.appendChild(data);
  imgContainer.appendChild(img);
  bigContainer.append(imgContainer, dataContainer);
  container.appendChild(bigContainer);
  img.addEventListener("click", (e) => goCart(img, data));
}

const cart = document.querySelector("#cart");

function goCart(i, j) {
  cart.appendChild(i);
  cart.appendChild(j);
  const bigContainer = document.createElement("div");
  const imgContainer = document.createElement("div");
  const dataContainer = document.createElement("div");

  bigContainer.style.display = "flex";
  bigContainer.style.flexDirection = "column";
  bigContainer.style.alignItems = "center";
  bigContainer.style.fontSize = "15px";
  bigContainer.style.fontWeight = "550";

  dataContainer.appendChild(j);
  imgContainer.appendChild(i);
  bigContainer.append(i, j);
  cart.appendChild(bigContainer);
  if (!listName.includes(j.innerText)) {
    listName.push(j.innerText);
    console.log(listName);
  }

  i.addEventListener("click", (e) => delImg(i, j));
}

function delImg(i, j) {
  container.append(i);
  container.append(j);
  const bigContainer = document.createElement("div");
  const imgContainer = document.createElement("div");
  const dataContainer = document.createElement("div");

  bigContainer.style.display = "flex";
  bigContainer.style.flexDirection = "row";
  bigContainer.style.alignItems = "center";
  bigContainer.style.fontSize = "20px";
  bigContainer.style.fontWeight = "550";

  dataContainer.appendChild(j);
  imgContainer.appendChild(i);
  bigContainer.append(i, j);
  container.appendChild(bigContainer);
  const index = listName.indexOf(j.innerText);
  if (index !== -1) {
    listName.splice(index, 1);
  }
  console.log(listName);
  i.addEventListener("click", (e) => goCart(i, j));
}
