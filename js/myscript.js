
function changeImage() {
    element = document.getElementById('pic_bulboff_img')
    if (element.src == "pic_bulbon") {
        element.src = "/images/pic_bulboff.gif";
    }
    else {
        element.src = "/images/pic_bulbon.gif";
    }
}