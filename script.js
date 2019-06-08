let gukbap = 3000

let wonDom = null;
let gukbapDom = null;
let gukbapBenchDom = null;

let originGukbapMsg = null;
let gukbapPriceMsgDom = null;



function init() {
    wonDom = document.getElementById("origin_won");
    gukbapDom = document.getElementById("gukbap_count");
    gukbapBenchDom = document.getElementById("gukbap_bench");

    gukbapBenchDom.value = gukbap;

    gukbapPriceMsgDom = document.getElementById("title_gukbap_price");
    originGukbapMsg = gukbapPriceMsgDom.innerText;
    change_msg()
}

function change_gukbap() {
    gukbap = gukbapBenchDom.value;
    change_msg()
}

function calculate_gukbap() {
    let str = (wonDom.value / gukbap).toString();
    gukbapDom.value = (str.substr(0,9))
}

function change_msg() {
    gukbapPriceMsgDom.innerText = originGukbapMsg + " " + gukbap.toString() + "원"
}