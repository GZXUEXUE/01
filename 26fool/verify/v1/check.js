var ans = "Etcxg Ycxg";
function verify(){
    inp = document.WhyAreYouLookingThis.veri.value;
    var res_ele = document.getElementsByName("result")[0];
    if (inp == ans) res_ele.innerHTML = "Verification successful! The password is: qwfa34eiji3 .";
    else res_ele.innerHTML = "Verification failed.";
}
