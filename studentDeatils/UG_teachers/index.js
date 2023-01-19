const samsungPhons = [
  {
    image: "./photos/team2.jpg",
    id: 1,
    name: "Name: Nagendra",
    qualification: " Qualification: MAC, Phd, MPhil",
    gender: "Gender: Male",
    phone: "Phone: 9600887733",
    Email: "E-mail: Nagendra9606@gmail.com",
    experience: "Experience: 25years",
    Takeing: "Taking class: Bca Final Year",
    specialization: "Specialization: Unix,Micro Processor",
    spec: [],
  },
];
const phoneListElement = document.getElementById("phoneList");
let phoneList = "";
samsungPhons.map((phone, index) => {
  let specs = "";
  phone.spec.map((spc, index) => {
    specs += `<p>${spc}</p>`;
  });
  console.log(specs);
  phoneList += `
     <div class="container" id="item1">
            <div class="container-zero">
                <img src=${phone.image} alt="" width="400px" height="400px">
            </div>
            <div class="container-one">
                <h1>${phone.name}</h1>
                 <h1>${phone.qualification}</h1>
                  <h1>${phone.gender}</h1>
                   <h1>${phone.phone}</h1>
                    <h1>${phone.Email}</h1>
                     <h1>${phone.experience}</h1>
                      <h1>${phone.Takeing}</h1>
                       <h1>${phone.specialization}</h1>
                <button type="button"> ${specs} 
            </div>
        </div>

  `;
});
// console.log(phoneList);
console.log(phoneListElement);
phoneListElement.insertAdjacentHTML("afterbegin", phoneList);
