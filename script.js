var gukbap = 3000
var wonDom = null;
var gukbapDom = null;


function init() {
    wonDom = document.getElementById("origin_won");
    gukbapDom = document.getElementById("gukbap_count");
}

function change_gukbap(params) {
    alert(params)   
}

function calculate_gukbap() {
    alert(wonDom.value / gukbap + "국밥을 사먹을 수 있음")
}