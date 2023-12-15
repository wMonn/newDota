document.addEventListener('DOMContentLoaded', function () {
    let main = document.querySelector('main');
    let isMouseDown = false;
    let startX;

    main.addEventListener('mousedown', function (e) {
        isMouseDown = true;
        startX = e.pageX - main.offsetLeft;
    });

    main.addEventListener('mouseup', function () {
        isMouseDown = false;
    });

    main.addEventListener('mousemove', function (e) {
        if (!isMouseDown) return;
        let scrollX = e.pageX - startX;
        main.scrollLeft = scrollX;
    });

    main.addEventListener('mouseleave', function () {
        isMouseDown = false;
    });
});
