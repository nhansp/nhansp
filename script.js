"use strict"

var time_before = new Date("Jun 27, 2024 08:00:00").getTime(),
    time_during;

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

    var before_string = new String("Còn " + days_before + " ngày, " + hours_before + " giờ " + minutes_before + " phút " + seconds_before + " giây trước khi diễn ra kì thi THPTQG.");
    // var during_string = new String("Đến chụp ảnh đi vì chỉ còn " + hours_during + " giờ " + minutes_during + " phút " + seconds_during + " giây nữa là hết rồi 🫡")

    document.getElementById("header_a_logo").innerHTML = before_string;
    document.getElementById("header_a_join").innerHTML = "Tìm hiểu thêm về kỷ yếu nếu bạn đã bỏ lỡ tại đây.";

}, 1000);
