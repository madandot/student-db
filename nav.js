const navbar = `
 



    <header class="navbar">
        <div class="logo">
            <a href="#"><h1>CANDLE WASTER</h1></a> 
        </div>
        <div class="items">
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li class="it">Departments
                    <div class="dep">
                        <ul>
                            <li><a href="./accounts/index.html">Account department</a></li>
                            <li><a href="/hostel/index.html">Hostel department</a></li>
                            <li><a href="/librarys/index.html  ">Library department</a></li>
                            <li><a href="/hostel/register/form.html">application from</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#con">Contacts</a></li>
                <li><i class="fa fa-user"></i><a href="./signIn/index.html">Signup</a></li>
            </ul>
        </div>
    </header>





`;
let oldelem = document.querySelector("script#replace_with_navbar");
let newelem = document.createElement("div");
newelem.innerHTML = navbar;
oldelem.parentNode.replaceChild(newelem, oldelem);
