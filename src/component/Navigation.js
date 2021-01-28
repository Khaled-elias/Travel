const Navigation = () => {
    return ( 
        <nav class="Navi">
            
            <img src="./assets/img/logo.png" alt=""></img>
            <div class="Div_Navi">
            <ul class="Ul_Navi">
                <li><a href="/" class="homme">Home</a></li>
                <li><a href="/destinations">Destinations</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/partner">Partner</a></li>
            </ul>

            <button class="Login">Login</button>
            <button class="Register">Register</button>

            </div>
        </nav>
     );
}
 
export default Navigation;