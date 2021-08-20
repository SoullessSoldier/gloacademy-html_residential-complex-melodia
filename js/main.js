'use strict';
$(document).ready(function() {

    let currentFloor=2;
    let txtFloor='';
    const counterUp = $('.counter-up'),
        counterDown = $('.counter-down'),
        floorPath = $('.home-image path'),
        modal = $('.modal'),
        modalCloseButton = $('.modal-close-button'),
        viewFlatsButton = $('.view-flats');
    

    const isNumber = function isNumber(value) 
    {
        return typeof value === 'number' && isFinite(value);
    };

    const setCounter = function(currentFloor){
        txtFloor = currentFloor.toString().padStart(2,'0'); 
        $('.counter').text(txtFloor);
    };
    
    const toggleModal = function(){
        modal.toggleClass('is-open');
    };

    floorPath.on('mouseover', function() {
        floorPath.removeClass('current-floor');
        if (!isNumber(currentFloor)) currentFloor = 2;
        currentFloor = +$(this).attr('data-floor');
        setCounter(currentFloor);
    });

    viewFlatsButton.on('click', toggleModal);
    floorPath.on('click', toggleModal);
    modalCloseButton.on('click', toggleModal);

    counterUp.on('click', () => {
        if (!isNumber(currentFloor)) currentFloor = 2;
        currentFloor++;
        if (currentFloor > 18) { 
            currentFloor = 18;
        } else {
        setCounter(currentFloor);
        floorPath.removeClass('current-floor');
        $(`[data-floor=${txtFloor}]`).addClass('current-floor');
        }
    });
    counterDown.on('click', () => {
        if (!isNumber(currentFloor)) currentFloor = 2;
        currentFloor--;
        if (currentFloor < 2) {
            currentFloor = 2;
        } else {
            setCounter(currentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${txtFloor}]`).addClass('current-floor');
        }
    });
    $('.flat-link').on('mouseover', function(){
        let flatId = $(this).data('flat-id');
        $(`.flats path[data-flat=${flatId}]`).toggleClass('active-flat');
        
    });
    $('.flat-link').on('mouseout', function(){
        let flatId = $(this).data('flat-id');
        $(`.flats path[data-flat=${flatId}]`).toggleClass('active-flat');
        
    });
    $('.flats path').on('mouseover', function(){
        let flat = $(this).data('flat');
        $(`.flat-link[data-flat-id=${flat}]`).toggleClass('active-flat-link');
    });
    $('.flats path').on('mouseout', function(){
        let flat = $(this).data('flat');
        $(`.flat-link[data-flat-id=${flat}]`).toggleClass('active-flat-link');
    });
});