function billingFunction(){
    isChecked= document.getElementById("same").checked;
    
    shippingName = document.getElementById("shippingName");
    shippingZip = document.getElementById("shippingZip");

    billingName = document.getElementById("billingName");
    billingZip = document.getElementById("billingZip");

    if (isChecked) {
        billingName.value = shippingName.value;
        billingZip.value = shippingZip.value;
    }
    else {
        billingName.value = "";
        billingZip.value = "";   
    }
}