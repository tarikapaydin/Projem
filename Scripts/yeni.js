window.onload = sozlesmeyiGizle();

function changeText() {

    document.getElementById("adSoyad").innerHTML = document.getElementById("inpadSoyad").value;
    document.getElementById("adSoyad1").innerHTML = document.getElementById("inpadSoyad").value;
    document.getElementById("musNo").innerHTML = document.getElementById("inpmusNo").value;
    document.getElementById("gonAdresi").innerHTML = document.getElementById("inpAdres").value;
    document.getElementById("ceptelno").innerHTML = document.getElementById("inpceptel").value;
    document.getElementById("telno").innerHTML = document.getElementById("inptelno").value;
    document.getElementById("postaceki").innerHTML = document.getElementById("inppostaceki").value;
    document.getElementById("vergi").innerHTML = document.getElementById("inpvergi").value;
    document.getElementById("email").innerHTML = document.getElementById("inpEmail").value;
    document.getElementById("baslangic").innerHTML = document.getElementById("inpbaslangic").value;
    document.getElementById("bitis").innerHTML = document.getElementById("inpbitis").value;
    document.getElementById("yansit").innerHTML = document.getElementById("inpyansit").value;
    document.getElementById("indirimoran").innerHTML = document.getElementById("inpindirimoranı").value;
    document.getElementById("aylik").innerHTML = document.getElementById("inpaylik").value;
    document.getElementById("yillik").innerHTML = document.getElementById("inpyillik").value;
    document.getElementById("periot").innerHTML = document.getElementById("inpperiot").value;
    document.getElementById("imza").innerHTML = document.getElementById("inpimzatarihi").value;
    document.getElementById("adsoyad2").innerHTML = document.getElementById("inpadSoyad").value;

    document.getElementById("szlFormu").style.display = "none";
    document.getElementById("SzlMetni").style.display = "block";
    document.getElementById("ucretTablosu").style.display = "none";
};

function sozlesmeyiGizle() {
    document.getElementById("szlFormu").style.display = "block";
    document.getElementById("SzlMetni").style.display = "none";
    document.getElementById("ucretTablosu").style.display = "none";
}

