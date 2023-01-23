const navbar = `
<header class="navbar">
        <div class="logo">
            <h1>CANDLE WASTER</h1>
        </div>
        <div class="items">
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li class="it">Academics
                    <div class="dep">
                        <ul>
                            <li><a href="#depart">UG</a></li>
                            <li><a href="#pg">PG</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#con">Contacts</a></li>
                <li><a href="https://apply.amcgroup.edu.in/">Admissions
                    </a></li>
                <li><i class="fa fa-user"></i><a href="/signIn/index.html">Login/Signup</a></li>
            </ul>
        </div>
    </header>
`;
let oldelem = document.querySelector("script#replace_with_navbar");
let newelem = document.createElement("div");
newelem.innerHTML = navbar;
oldelem.parentNode.replaceChild(newelem, oldelem);
