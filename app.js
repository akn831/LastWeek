$(function() {
    // lightbox
    $(".img").on("click", function() {
        $('<div id="over">').appendTo($(".container")).hide().fadeIn();

        //画像を表示する
        $("#over").append($('<div class="img-box">'));
        $(".img-box").append($('<span class="close">&times;</span>'));
        $(".img-box").append($('<img class="lightbox">'));  

        //クリックされた画像のソースの値をとる
        let imageSrc = $(this).attr("src");

        //作成した<img class= "lightbox">のsrcにクッリクされた画像のsrcを設定
        $(".lightbox").attr("src", imageSrc);

        //バツボタンがクリックされたら画像を閉じる
        $(".close").on("click", function() {
            $("#over").fadeOut(function() {
                $("#over").remove();
            })
        })
    })

    // 円グラフ
    new Chart(document.getElementById("myChart"), {
        type: "doughnut",
        data: {
            labels: ["船代", "ポートチャージやビザ等の諸費用", "離脱費用", "お小遣い"],
            datasets: [
                {
                    data: [990000,100000,400000,200000],
                    backgroundColor: [
                        "rgb(255,99,132)",
                        "rgb(54,162,235)",
                        "rgb(255,205,86)",
                        "rgb(234,57,10)",
                    ]
                }
            ]
        }
    })

    $("#myChart").css({"width":"600px", "height":"300"});



    // フェードイン
    $(window).on("scroll", function() {
        $(".fadein").each(function() {
            let elemPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();

            if(scroll > elemPos - windowHeight + 500) {
                $(this).addClass("scrollin");   
            }
        })


    
    })

    // header nav
    let _window = $(window),
        _header = $(".header-nav"),
        heroBottom,
        startPos,
        winScrollTop;
    
    _window.on("scroll", function() {
       winScrollTop = $(this).scrollTop();
       heroBottom = $(".top-title").height();
       if(winScrollTop >= startPos) {
            if(winScrollTop >= heroBottom) {
                _header.addClass("hide");
            }     
        } else {
             _header.removeClass("hide");
        }
        startPos = winScrollTop;
    });
    _window.trigger("scroll");
})

