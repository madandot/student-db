const navbar = `

<header class="navbar">
<div class="logo">
    <h1>CANDLE WASTER</h1>
</div>
<div class="items">
    <ul>
        <li><a href="/index.html">Home</a></li>
        <li class="it">Departments
            <div class="dep">
                <ul>
                    <li><a href="#">Account department</a></li>
                    <li><a href="#">Hostel department</a></li>
                    <li><a href="#">Library department</a></li>
                    <li><a href="/studentDeatils/UG_teachers/bca/marks.html">marks calculator</a></li>
                    <li><a href="/studentDeatils/UG_teachers/bca/Attendance.html">attendance calculator</a></li>

                </ul>
            </div>
        </li>
        <li><a href="#con">Contacts</a></li>
        <li><i class="fa fa-user"></i><a href="/signIn/index.html">Signup</a></li>
    </ul>
</div>
</header>


`;
let oldelem = document.querySelector("script#replace_with_navbar");
let newelem = document.createElement("div");
newelem.innerHTML = navbar;
oldelem.parentNode.replaceChild(newelem, oldelem);
