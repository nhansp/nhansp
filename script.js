"use strict"

var time_before = new Date("Mar 17, 2024 09:00:00").getTime(),
    time_during = new Date("Mar 17, 2024 11:00:00").getTime(); // chụp b bè từ 9h -> 11h

var x = setInterval(function(){
    var time_now = new Date().getTime();
    var time_diff_before = time_before - time_now,
        time_diff_during = time_during - time_now;

    // this fucking takes time ts could be done with struct and defined operator in c++
    // and i dont wanna use typescript wallahi ffs
    var days_before = Math.floor(time_diff_before / (1000 * 60 * 60 * 24));
    var hours_before = Math.floor((time_diff_before % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_before = Math.floor((time_diff_before % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_before = Math.floor((time_diff_before % (1000 * 60)) / 1000);
    // var days_during = Math.floor(time_diff_during / (1000 * 60 * 60 * 24)); -> kinda useless
    var hours_during = Math.floor((time_diff_during % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes_during = Math.floor((time_diff_during % (1000 * 60 * 60)) / (1000 * 60));
    var seconds_during = Math.floor((time_diff_during % (1000 * 60)) / 1000);

    var before_string = new String("Mời ae đến chụp kỷ yếu cùng t vào lúc 9:00am, Chủ Nhật 17/03/2024 | Còn " + days_before + " ngày, " + hours_before + " giờ " + minutes_before + " phút " + seconds_before + " giây.");
    var during_string = new String("Đến chụp ảnh đi vì chỉ còn " + hours_during + " giờ " + minutes_during + " phút " + seconds_during + " giây nữa là hết rồi 🫡")

    // header_a_logo, header_a_join
    if (time_diff_before >= 0 && time_diff_during >= 0){
        document.getElementById("header_a_logo").innerHTML = before_string;
        document.getElementById("header_a_join").innerHTML = "Đến đê.";
    }
    if (time_diff_before < 0 && time_diff_during >= 0){
        document.getElementById("header_a_logo").innerHTML = during_string;
        document.getElementById("header_a_join").innerHTML = "Đến nhanhhhhhhh!";
    }
    if (time_diff_before < 0 && time_diff_during < 0){
        document.getElementById("header_a_logo").innerHTML = "Chờ tí sắp có ảnh kỷ yếu rồi.";
        document.getElementById("header_a_join").innerHTML = "Mà thực ra là rất nhiều ảnh 😜";
    }

}, 1000);
