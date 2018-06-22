var hello = [];
var tchallaName = $('.one').data('name');
var tchallaHealth = $('.one').data('health');
var tchallaAttack = $('.one').data('attack');
var tchallaCounter = $('.one').data('counter');

$('.first').text(tchallaHealth);

var killName = $('.two').data('name');
var killHealth = $('.two').data('health');
var killAttack = $('.two').data('attack');
var killCounter = $('.two').data('counter');

$('.second').text(killHealth);

var mbakuName = $('.three').data('name');
var mbakuHealth = $('.three').data('health');
var mbakuAttack = $('.three').data('attack');
var mbakuCounter = $('.three').data('counter');

$('.third').text(mbakuHealth);

var wkabiName = $('.four').data('name');
var wkabiHealth = $('.four').data('health');
var wkabiAttack = $('.four').data('attack');
var wkabiCounter = $('.four').data('counter');

$('.fourth').text(wkabiHealth);

$('.char').on('click', function() {
    if (hello == 0) {
        if ($(this).data('name') == "T'Challa") {
            $(this).insertAfter('.efiller');
            $('.first').addClass('picked');
            $('#attackpower').text('Attack Power: ' + tchallaAttack);
            $('#counterattack').text('Counter Attack: ' + tchallaCounter);
        }
        if ($(this).data('name') == "Killmonger") {
            $(this).insertAfter('.efiller');
            $('.second').addClass('picked');
            $('#attackpower').text('Attack Power: ' + killAttack);
            $('#counterattack').text('Counter Attack: ' + killCounter);
        }
        if ($(this).data('name') == "M'Baku") {
            $(this).insertAfter('.efiller');
            $('.third').addClass('picked');
            $('#attackpower').text('Attack Power: ' + mbakuAttack);
            $('#counterattack').text('Counter Attack: ' + mbakuCounter);
        }
        if ($(this).data('name') == "W'Kabi") {
            $(this).insertAfter('.efiller');
            $('.fourth').addClass('picked');
            $('#attackpower').text('Attack Power: ' + wkabiAttack);
            $('#counterattack').text('Counter Attack: ' + wkabiCounter);
        }
    }

    if (hello.length == 1) {
        if ($(this).data('name') == "T'Challa") {
            $(this).insertAfter('.dfiller');
            $('.first').addClass('epicked');
            $('#attackpowertwo').text('Attack Power: ' + tchallaAttack);
            $('#counterattacktwo').text('Counter Attack: ' + tchallaCounter);
        }
        if ($(this).data('name') == "Killmonger") {
            $(this).insertAfter('.dfiller');
            $('.second').addClass('epicked');
            $('#attackpowertwo').text('Attack Power: ' + killAttack);
            $('#counterattacktwo').text('Counter Attack: ' + killCounter);
        }
        if ($(this).data('name') == "M'Baku") {
            $(this).insertAfter('.dfiller');
            $('.third').addClass('epicked');
            $('#attackpowertwo').text('Attack Power: ' + mbakuAttack);
            $('#counterattacktwo').text('Counter Attack: ' + mbakuCounter);
        }
        if ($(this).data('name') == "W'Kabi") {
            $(this).insertAfter('.dfiller');
            $('.fourth').addClass('epicked');
            $('#attackpowertwo').text('Attack Power: ' + wkabiAttack);
            $('#counterattacktwo').text('Counter Attack: ' + wkabiCounter);
        }
    }
    hello.push("hi");
    $('#your').text("Enemy");
});

$('.attack').on('click', function() {
    var yourbutton = $('.yourcharacter').find('.char');
    var yourHealth = yourbutton.data('health');
    var yourAttack = yourbutton.data('attack');
    var enemyButton = $('.defender').find('.char');
    var enemyHealth = yourbutton.data('health');
    var enemyCounter = enemyButton.data('counter');
    var yourNewHealth = $('.picked').text() - enemyCounter;
    var newEnemyHealth = $('.epicked').text() - yourAttack;
    $('.picked').text(yourNewHealth);
    $('.epicked').text(newEnemyHealth);


    if ($('.picked').text() <= 0) {
        $(this).stop();
        $('.reset').show();
    }

    if ($('.epicked').text() <= 0) {
        yourbutton = $('.yourcharacter').find('.char');
        $(this).stop(stopAll);
        $('.reset').show();
        $('.yourbutton').insertAfter('.ffiller');
    }
});

$('.reset').on('click', function() {
    location.reload();
});


// add initial characters using javascript not html
// use css to add images and use javascript to add classes for each character