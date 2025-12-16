import React from "react";

function Footer(){
    const date = new Date().getFullYear();
    return(
        <footer className="w-full bg-main py-5 lg:py-10 text-center text-white">
            <p>© {date} Jacob Eaton. All Rights Reserved.</p>

        </footer>
    );
}

export default Footer;