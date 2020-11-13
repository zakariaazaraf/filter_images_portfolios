//JAVASCRIPT CODE 
    

$(document).ready(function(){

    $('.list').click(function(){

        const value = $(this).attr('data-filter');
        
        if(value === 'all'){

            $('.itembox').show('5000');

        }else{

            $('.itembox').not("." + value).hide('5000');

            $('.itembox').filter("." + value).show('5000');

        }

        // Change class "active"
        $(this).addClass('active').siblings().removeClass('active');
        
    });
});
        
    