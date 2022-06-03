var darkSettings = localStorage.getItem("darkSetting", "light")
function checkDarkMode() {
    if (localStorage["darkSetting"] == undefined) {
        localStorage.setItem("darkSetting", "light")
    }
    console.log(darkSettings)
    if (localStorage["darkSetting"] == "light") {
        document.body.style = "background: linear-gradient(151deg, rgba(255,255,255,1) 0%, rgba(209,209,222,1) 35%, rgba(158,181,186,1) 100%); color: black;"
        document.getElementById("darkmode").innerHTML = `<img src="/assets/darkbutton.png"/>`
    } else {
        document.body.style = "background: linear-gradient(151deg, rgba(0,0,0,1) 0%, rgba(38,38,52,1) 35%, rgba(98,102,103,1) 100%); color: white;"
        document.getElementById("darkmode").innerHTML = `<img src="/assets/lightbutton.png"/>`
    }
}
function toggleDarkMode() {
    console.log("toggle")
    if (localStorage["darkSetting"] == "light") {
        //dark mode
        localStorage["darkSetting"] = "dark"
        document.body.style = "background: linear-gradient(151deg, rgba(0,0,0,1) 0%, rgba(38,38,52,1) 35%, rgba(98,102,103,1) 100%); color: white;"
        document.getElementById("darkmode").innerHTML = `<img src="/assets/lightbutton.png"/>`
    } else if (localStorage["darkSetting"] == "dark") {
        //light mode
        localStorage["darkSetting"] = "light"
        document.body.style = "background: linear-gradient(151deg, rgba(255,255,255,1) 0%, rgba(209,209,222,1) 35%, rgba(158,181,186,1) 100%); color: black;"
        document.getElementById("darkmode").innerHTML = `<img src="/assets/darkbutton.png"/>`
    }
}