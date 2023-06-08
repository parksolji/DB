const $comEdit = document.getElementById("comEdit");
let priBoxes;

function editProfile() {
  // edit 버튼이 이미 눌린 상태인 경우에는 함수를 종료합니다.
  if (editButton.classList.contains("active")) {
    return;
  }

  // priBox 요소들을 가져옵니다.
  const priBoxes = document.querySelectorAll(".priBox");

  // 각 priBox 요소에 대해 반복합니다.
  priBoxes.forEach((priBox) => {
    // priBox 내의 b3 요소를 가져옵니다.
    const b3 = priBox.querySelector("b3");

    // 기존 값이 없을 경우에만 디폴트 값을 설정합니다.
    if (!priBox.hasAttribute("data-default-value")) {
      priBox.setAttribute("data-default-value", b3.textContent);
    }

    // b3 요소의 텍스트 값을 가져와서 디폴트 값으로 설정합니다.
    const defaultValue = priBox.getAttribute("data-default-value");

    // b3 요소를 input 요소로 교체합니다.
    b3.innerHTML = `<input type="text" class="inputB3" value="${defaultValue}" style="font-size: 0.9em; background-color: rgb(243, 243, 243); max-width: 300px; border:none" />`;

    $comEdit.style.display = "flex";
  });
}

const $save = document.getElementById("saveBtn");
function saveProfile() {
  // priBox 요소들을 가져옵니다.
  const priBoxes = document.querySelectorAll(".priBox");

  // 각 priBox 요소에 대해 반복합니다.
  priBoxes.forEach((priBox) => {
    // priBox 내의 input 요소를 가져옵니다.
    const inputB3 = priBox.querySelector(".inputB3");

    // input 요소의 값을 b3 요소로 변경합니다.
    const newValue = inputB3.value;
    inputB3.outerHTML = `<b3 class="inputB3">${newValue}</b3>`;
    $comEdit.style.display = "none";
  });
}

$save.addEventListener("click", saveProfile);

const $cancel = document.getElementById("cancel");
function cancelEdit() {
  // priBox 요소들을 가져옵니다.
  const priBoxes = document.querySelectorAll(".priBox");

  // 각 priBox 요소에 대해 반복합니다.
  priBoxes.forEach((priBox) => {
    // priBox 내의 b3 요소를 가져옵니다.
    const b3 = priBox.querySelector("b3");

    // 기존 값이 없을 경우에만 디폴트 값을 설정합니다.
    if (!priBox.hasAttribute("data-default-value")) {
      priBox.setAttribute("data-default-value", b3.textContent);
    }

    // b3 요소의 텍스트 값을 가져와서 디폴트 값으로 설정합니다.
    const defaultValue = priBox.getAttribute("data-default-value");

    // b3 요소를 input 요소로 교체합니다.
    b3.innerHTML = `<b3 class="inputB3" style="font-size: 0.9em; background-color: rgb(243, 243, 243); max-width: 300px; border:none">${defaultValue}</b3>`;

    $comEdit.style.display = "none";
  });
}
$cancel.addEventListener("click", cancelEdit);

// edit 버튼 클릭 시 프로필 정보를 수정 가능하도록 합니다.
const editButton = document.getElementById("edit");
editButton.addEventListener("click", editProfile);

const li = document.getElementById("btnSet");
const $profile = document.getElementById("profile");
const $bt = document.getElementById("bottomBox");
const $listBtn = document.getElementById("listBtn");

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
