if (window.localStorage.getItem("theme") === "dark") {
    document.documentElement.setAttribute("data-bs-theme", "dark");
}

document.addEventListener("DOMContentLoaded", function () {
    function heroPaddingFun() {
        if ($(".header-wrapper").length) {
            const headerWrapper = document.querySelector('.header-wrapper');
            const heroSec = document.querySelector('.hero-sec');
            const headerWrapperHeight = headerWrapper.clientHeight;
            if(headerWrapper) {
                document.querySelector(':root').style.setProperty('--header-height', headerWrapperHeight + 'px');
                heroSec.style.paddingTop = headerWrapperHeight + "px";
            }
        }
    };
    heroPaddingFun();
    window.addEventListener("resize", function () {
        heroPaddingFun();
    });
});