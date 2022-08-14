const sDate = document.getElementById("startDate");
const eDate = document.getElementById("endDate");

let currentTime = new Date();
let date = currentTime.getDate();
let monthIndex = currentTime.getMonth() + 1;
let year = currentTime.getFullYear();
let fullTimeStart = `${year}-${"0" + monthIndex}-${date}`;
let fullTimeEnd = `${year}-${"0" + monthIndex}-${date + 3}`;
sDate.setAttribute("min", fullTimeStart);
eDate.setAttribute("min", fullTimeEnd);

let objData = [];

function myProject() {
  const date1 = new Date(sDate.value);
  const date2 = new Date(eDate.value);
  const time = Math.abs(date2 - date1);
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const projectName = document.getElementById("name").value;
  const desc = document.getElementById("message").value;
  let image = document.getElementById("inputImg").files;
  image = URL.createObjectURL(image[0]);

  let node = document.getElementById("nodeJs").checked;
  let laravel = document.getElementById("laravel").checked;
  let react = document.getElementById("reactJs").checked;
  let bootstrap = document.getElementById("bootStrap").checked;

  node ? (node = document.getElementById("nodeJs").value) : "";
  laravel ? (laravel = document.getElementById("laravel").value) : "";
  react ? (react = document.getElementById("reactJs").value) : "";
  bootstrap ? (bootstrap = document.getElementById("bootStrap").value) : "";


  let objValue = {
    projectName,
    desc,
    image,
    days,
    node,
    laravel,
    react,
    bootstrap,
  };

  objData.push(objValue);

  console.log(objData);
  render();
}




function render() {
  
  const card = document.querySelector(".mainGallery");
  card.innerHTML = "";
  for (let i = 0; i < objData.length; i++) {

    function forDays() {

      if(sDate.value == 0 || eDate.value == 0) {
        return "Lebih Baik Diisi"
      }
      return objData[i].days
    }

    card.innerHTML += `
    <div id="card">
        <a href="./detail/detail.html">
          <img src="${objData[i].image}" alt="Foto Project">
        </a>
        <h1>${objData[i].projectName}</h1>
        <p id="durasi">Durasi ${forDays()} Hari</p>

        <p>${objData[i].desc}</p>

        <div class="icon">
          <i class="fa-brands fa-${objData[i].node}"></i>
          <i class="fa-brands fa-${objData[i].laravel}"></i>
          <i class="fa-brands fa-${objData[i].react}"></i>
          <i class="fa-brands fa-${objData[i].bootstrap}"></i>
        </div>

        <div class="btn">
            <button id="btnEdit">Edit</button>
            <button id="btnDelete" class="delete" onclick="location.reload()">Delete</button>
        </div>
    </div>
    `;
  }
}