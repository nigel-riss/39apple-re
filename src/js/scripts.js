;
$(document).ready(function(){
    // carousel
    $('#menu-button').click(function() {
        $('#main-nav').toggle();
    });

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true
    });

    // fast navigation
    var fastNav = $('#fast-nav');
    var fastNavItems = $('.fast-nav__item--has-dropdown');
    var dropdown = $('#dropdown');
    
    fastNavItems.mouseenter(function(event) {
        showMenu($(this).data('content'),
            $(this).offset().left - fastNav.offset().left + $(this).innerWidth() / 2 - 5);
    });

    fastNavItems.mouseleave(function(event) {
        var self = $(this);
        if ($('#dropdown-' + $(self).data('content')).is(':hover')) {
            $('#dropdown-' + $(self).data('content')).mouseleave(function(event){
                hideMenu($(self).data('content'));
            });
        } else {
            hideMenu($(self).data('content'));
        }
    })

    function showMenu(menu, left) {
        left -= ($("#dropdown-" + menu).outerWidth() / 2);
        $("#dropdown-" + menu).addClass('dropdown__item--show');
        $("#dropdown").css({
            '-moz-transform': 'translateX(' + left + 'px)',
            '-webkit-transform': 'translateX(' + left + 'px)',
            '-ms-transform': 'translateX(' + left + 'px)',
            '-o-transform': 'translateX(' + left + 'px)',
            'transform': 'translateX(' + left + 'px)',
            'z-index': '9999'
        }).addClass('dropdown--show');
    }

    function hideMenu(menu) {
        $("#dropdown-" + menu).removeClass('dropdown__item--show');
    }
});

// var granimInstance = new Granim({
//     element: '.page-header__canvas',
//     name: 'basic-gradient',
//     direction: 'radial',
//     opacity: [1, 1],
//     isPausedWhenNotInView: true,
//     states : {
//         "default-state": {
//             gradients: [
//                 ['#04b004', '#2ecc71'],
//                 ['#2ecc71', '#04b004'],
//                 ['#144258', '#024c45']
//             ]
//         }
//     }
// });

// var granimInstance = new Granim({
//     element: '.main-nav__canvas',
//     name: 'basic-gradient',
//     direction: 'radial',
//     opacity: [1, 1],
//     isPausedWhenNotInView: true,
//     states : {
//         "default-state": {
//             gradients: [
//                 ['#04b004', '#2ecc71'],
//                 ['#2ecc71', '#04b004'],
//                 ['#144258', '#024c45']
//             ]
//         }
//     }
// });

/*
// Создаем обработчик загрузки страницы:  
DG.autoload(function () {
    // Создаем объект карты, связанный с контейнером:  
    var myMap = new DG.Map('myMapId');
    // Устанавливаем центр карты, и коэффициент масштабирования: javascript:// 
    myMap.setCenter(new DG.GeoPoint(20.512794, 54.713147), 15);
    // Добавляем элемент управления коэффициентом масштабирования:  
    myMap.controls.add(new DG.Controls.Zoom());

    // Создаем балун: 
    var myBalloon = new DG.Balloons.Common({
        // Местоположение на которое указывает балун:  
        geoPoint: new DG.GeoPoint(20.512794, 54.713147),
        // Устанавливаем текст, который будет отображатся при открытии балуна: 
        contentHtml: '39 Яблок & Смартфонов'
    });
    // Создаем маркер: 
    var myMarker = new DG.Markers.Common({
        // Местоположение на которое указывает маркер: 
        geoPoint: new DG.GeoPoint(20.512794, 54.713147),
        // Функция, вызываемая при клике по маркеру 
        clickCallback: function () {
            if (!myMap.balloons.getDefaultGroup().contains(myBalloon)) {
                // Если балун еще не был добавлен на карту, добавляем его: 
                myMap.balloons.add(myBalloon);
            } else {
                // Показываем уже ранее добавленный на карту балун 
                myBalloon.show();
            }
        }
    });
    // Добавить маркер на карту: 
    myMap.markers.add(myMarker);
});
*/