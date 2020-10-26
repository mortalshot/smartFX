$(document).ready(function () {
    const mediaQuerylgMin = window.matchMedia('(min-width: 992px)');

    // mediaQuerylgMin
    mediaQuerylgMin.addListener(handleTabletChange);
    function handleTabletChange(e) {
        if (e.matches) {
            var scene = document.getElementById('scene');
            if (scene) {
                var parallaxInstance = new Parallax(scene);
            }
        }

        else {

        }
    }

    if (mediaQuerylgMin.matches) {
        var scene = document.getElementById('scene');
        if (scene) {
            var parallaxInstance = new Parallax(scene);
        }
    }
});