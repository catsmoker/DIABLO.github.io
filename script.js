let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let section =document.querySelectorAll('section');
let navlinks =document.querySelectorAll('header nav ul li a');

windows.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollv;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= ofsset && top , ofsset + height) {
            navlinks.forEach(links => {
                links.classList.remouve('active');
                document.querySelector('header nav ul li a[href*='+id+']').classList.add(active)
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar,classList.toggle('active');
}