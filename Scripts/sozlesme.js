window.onload = function () {

    var bugun = new Date();

    document.getElementById("demo").setAttribute("value", tarihAyikla(bugun));

    document.getElementById("baslangicTarihi").value = tarihAyikla(bugun);


    var bitisTarihi = bugun.setFullYear(bugun.getFullYear() + 1);

    document.getElementById("bitisTarihi").value = tarihAyikla(bitisTarihi);
};

function tarihAyikla(tarih) {
    var bugun = tarih;

    var adayAy = (bugun.getMonth() + 1);
    var ay = adayAy > 9 ? adayAy : "0" + adayAy;

    var tarih = bugun.getFullYear() + "-" + ay + "-" + bugun.getDate();

    return tarih;
};