//removes 100px padding if on mobile
const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};
function checkMobile() {
    if (deviceType() === "mobile") {
        console.log("mobile");
        document.body.style = "padding: 20px";
    } else {
        document.body.style = "padding: 100px";
    }
}
