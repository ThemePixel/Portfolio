"use strict"
const isMobile = {
    Android:function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry:function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS:function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera:function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows:function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};


if (isMobile.any()) {
    document.body.classList.add('_mobile_added');
    let menuArrows = document.querySelectorAll('.submenu_arrow_span');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
} else {
    
    document.body.classList.add('_pc_added');
}


const menuLinks = document.querySelectorAll('.menulink_li-a[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

			if (iconMenux.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenux.classList.remove('_active');
                navMenu.classList.remove('_active');

            }

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

const iconMenux = document.querySelector('.menu_icon_div');
const navMenu = document.querySelector('.nav_menu_nav');
if (iconMenux) {
    
    iconMenux.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenux.classList.toggle('_active');
        navMenu.classList.toggle('_active');
    });
}






