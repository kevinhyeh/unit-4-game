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
    if ($('#your').text() == "Your") {
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

    if ($('#your').text() == "Enemy") {
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
    $('#your').text("Enemy");
});

$('.attack').on('click', function() {
    var yourbutton = $('.yourcharacter').find('.char');
    var yourHealth = yourbutton.data('health');
    var yourAttack = yourbutton.data('attack');
    var enemyButton = $('.defender').find('.char');
    var enemyHealth = yourbutton.data('health');
    var enemyCounter = enemyButton.data('counter');
    var yourNewHealth = $('.yourcharacter').find('.picked').text() - enemyCounter;
    var newEnemyHealth = $('.defender').find('.epicked').text() - yourAttack;
    var double = $('.defender').find('.epicked').text() - yourAttack * 2;
    var triple = $('.defender').find('.epicked').text() - yourAttack * 3;

    if ($('.yourcharacter').find('button').length == 1 && $('.defender').find('button').length == 1) {
        if ($('.defeated').find('button').length == 2) {
            $('.picked').text(yourNewHealth);
            $('.epicked').text(triple);
            $('#multiplyer').text(' x3 multiplyer');
        } else if ($('.defeated').find('button').length == 1) {
            $('.picked').text(yourNewHealth);
            $('.epicked').text(double);
            $('#multiplyer').text(' x2 multiplyer');
        } else {
            $('.picked').text(yourNewHealth);
            $('.epicked').text(newEnemyHealth);
        }

        $('.messagetwo').text('');
    }

    if ($('.yourcharacter').find('button').length == 1) {
        if ($('.picked').text() <= 0) {
            $(this).off('click');
            $('.messageone').text('You Lost');
            $('.reset').show();
        }
    }

    if ($('.epicked').text() <= 0) {
        $(enemyButton).insertAfter('.ffiller');
        $('.epicked').removeClass('epicked');
    }

    if ($('.yourcharacter').find('button').length == 0 || $('.defender').find('button').length == 0) {
        $('.messagetwo').text('No characters to attack');
    }

    if ($('.defeated').find('button').length == 1) {
        $('.messageone').text('you have defeated ' + $('.ffiller').parent("div").find(".char").data('name'));
    }

    if ($('.defeated').find('button').length == 3) {
        $('.messagetwo').text('You Won! ' + $('.yourcharacter').find('.char').data('name') + ' has become the Black Panter');
    }
});

$('.reset').on('click', function() {
    location.reload();
});



// add initial characters using javascript not html
// use css to add images and use javascript to add classes for each character