// Light/Dark mode toggle

document.cookie = "theme=light-theme";

function changemode() {
    if(document.getElementById('theme').src.includes("Icons/day-icon_toggle.svg"))
    {
        function dark()
        {
            document.getElementById('theme').src="Icons/night-icon_toggle.svg";
            document.getElementById('brand-logo').src="Icons/camera-icon_favicon_light.svg";
            document.getElementById('toggler-icon').src="Icons/navbartoggle-icon_light.svg";
            var change = document.body;
            change.classList.remove("light-theme");
            change.classList.add("dark-theme");
        }dark();
    }
    else if(document.getElementById('theme').src.includes("Icons/night-icon_toggle.svg"))
    {
        function light() {
            document.getElementById('theme').src="Icons/day-icon_toggle.svg";
            document.getElementById('brand-logo').src="Icons/camera-icon_favicon_dark.svg";
            document.getElementById('toggler-icon').src="Icons/navbartoggle-icon_dark.svg";
            var change = document.body;
            change.classList.remove("dark-theme");
            change.classList.add("light-theme");
        }light();
    }
}