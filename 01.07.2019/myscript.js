
 $(".root").hide();

$("#submit").click(function () {
    var adData = $("#ad").val();
    var soyadData = $("#soyad").val();
    var emailData = $("#email").val();

    localStorage.setItem("ad", adData);
    localStorage.setItem("soyad", soyadData);
    localStorage.setItem("email", emailData);

    $("#loginForm").hide();
    $(".root").show();


        var ad = localStorage.getItem("ad");
        var soyad = localStorage.getItem("soyad");
        var email = localStorage.getItem("email");
    console.log(ad,soyad,email)
        var titles = [];
    
        $("table tbody tr").each(function (index, tr) {
            titles.push($(tr).find("td").first().text().toLowerCase());
        })
    
        if (titles.indexOf(ad.toLowerCase()) == -1) {
            var newRow = "<tr><td>"
                + ad + "</td><td>"
                + soyad + "</td><td>"
                + email + "</td><td><button>Delete</button></td></tr>"
    
            $("table tbody").append(newRow)
    
        }
    })
    
    $("table").on("click", "button", function () {
        $(this).parent().parent().remove();
    })
    
    var reverse = false;
    
    $("table thead th:first-child").click(function () {
    
        var trs = [];
    
        $("table tbody tr").each(function (index, tr) {
            trs.push($(tr));
        })
    
        trs = trs.sort(function (a, b) {
    
            item1 = a.find("td").first().text().toLowerCase();
            item2 = b.find("td").first().text().toLowerCase();
            return item1.localeCompare(item2)
        })
    
        if (reverse) {
            trs.reverse();
            reverse = false;
        } else {
            reverse = true;
        }
        $("table tbody").html(trs);

})

