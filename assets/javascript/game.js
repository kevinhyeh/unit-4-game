var characters = {
    tchalla_attack: 14,
    killmonger_attack: 10,
    mbaku_attack: 8,
    wkabi_attack: 6
}


var tchallaHealth = $('.one').attr('data-health');
var tchallaAttack = $('.one').attr('data-attack');
var tchallaCounter = $('.one').attr('data-counter');

$('.first').html(tchallaHealth);

var killHealth = $('.two').attr('data-health');
var killAttack = $('.two').attr('data-attack');
var killCounter = $('.two').attr('data-counter');

$('.second').html(killHealth);

var mbakuHealth = $('.three').attr('data-health');
var mbakuAttack = $('.three').attr('data-attack');
var mbakuCounter = $('.three').attr('data-counter');

$('.third').html(mbakuHealth);

var wkabiHealth = $('.four').attr('data-health');
var wkabiAttack = $('.four').attr('data-attack');
var wkabiCounter = $('.four').attr('data-counter');

$('.fourth').html(wkabiHealth);

// moving characters
$('.char').on('click', function() {
    if ($('#your').html() == "Your") {
        if ($(this).attr('data-name') == "T'Challa") {
            $(this).insertAfter('.efiller');
            $('.first').addClass('picked');
        }
        if ($(this).attr('data-name') == "Killmonger") {
            $(this).insertAfter('.efiller');
            $('.second').addClass('picked');
        }
        if ($(this).attr('data-name') == "M'Baku") {
            $(this).insertAfter('.efiller');
            $('.third').addClass('picked');
        }
        if ($(this).attr('data-name') == "W'Kabi") {
            $(this).insertAfter('.efiller');
            $('.fourth').addClass('picked');
        }
    }

    if ($('#your').html() == "Enemy") {
        if ($(this).attr('data-name') == "T'Challa") {
            $(this).insertAfter('.dfiller');
            $('.first').addClass('epicked');
        }
        if ($(this).attr('data-name') == "Killmonger") {
            $(this).insertAfter('.dfiller');
            $('.second').addClass('epicked');
        }
        if ($(this).attr('data-name') == "M'Baku") {
            $(this).insertAfter('.dfiller');
            $('.third').addClass('epicked');
        }
        if ($(this).attr('data-name') == "W'Kabi") {
            $(this).insertAfter('.dfiller');
            $('.fourth').addClass('epicked');
        }
    }
    $('#your').html("Enemy");
});

// attack button
$('.attack').on('click', function() {
    var yourbutton = $('.yourcharacter .char');
    var yourHealth = parseInt(yourbutton.attr('data-health'));
    var yourAttack = parseInt(yourbutton.attr('data-attack'));
    var enemyButton = $('.defender .char');
    var enemyHealth = parseInt(yourbutton.attr('data-health'));
    var enemyCounter = parseInt(enemyButton.attr('data-counter'));
    var yourNewHealth = $('.yourcharacter .picked').html() - enemyCounter;
    var newEnemyHealth =  $('.defender .epicked').html() - yourAttack;
    var start = parseInt($('.yourcharacter > .char').attr('data-attack'));
    var counter = $('.defender > .char').attr('data-counter');
    var double;

    if ($('.yourcharacter button').length == 1 && $('.defender button').length == 1) {
            if ($('.yourcharacter > .char').attr('data-name') == "T'Challa") {
                $('#attacknumber').show();
                double = start + characters.tchalla_attack;
            } else if ($('.yourcharacter > .char').attr('data-name') == "Killmonger") {
                $('#attacknumber').show();
                double = start + characters.killmonger_attack;
            } else if ($('.yourcharacter > .char').attr('data-name') == "M'Baku") {
                $('#attacknumber').show();
                double = start + characters.mbaku_attack;
            } else {
                $('#attacknumber').show();
                double = start + characters.wkabi_attack;
            }
        $('.picked').html(yourNewHealth);
        $('.epicked').html(newEnemyHealth);
        $('#enemyname').html('You attacked ' + $('.defender > .char').attr('data-name') + ' for ');
        $('#attacknumber').html(start);
        $('#counter').html($('.defender > .char').attr('data-name') + ' attacked you for ' + counter);
        $('.yourcharacter > .char').attr('data-attack', double);
        // $('.messageone').text("");
    } 

    // when you lose
    if ($('.yourcharacter button').length == 1) {
        if ($('.picked').html() <= 0) {
            $(this).off('click');
            $('.messageone').html('You Lost');
            $('.reset').show();
            $('.messagetwo').text($('.defender > .char').attr('data-name') + ' is the new Black Panther');
        }
    }

    // when you defeat a character
    if ($('.epicked').html() <= 0) {
        $(enemyButton).insertAfter('.ffiller');
        $('.epicked').removeClass('epicked');
        $('#enemyname, #attacknumber').empty();
        $('.messageone').html('You have defeated ' + $('.ffiller').parent("div").find(".char").attr('data-name'));
    }

    // no characters to attack message
    // if ($('.yourcharacter').find('button').length == 0 || $('.defender').find('button').length == 0) {
    //     $('.messageone').html('No characters to attack');
    // }

    // you have defeated (blank) message
    if ($('.defender button').length == 0) {
        $('#counter').html('');

    }

    // you won message
    if ($('.defeated button').length == 3) {
        $('.messagetwo').html('You Won! ' + $('.yourcharacter .char').attr('data-name') + ' has become the Black Panther');
        $('.reset').show();
    }
});

// $('.alert').on('click', function() {
//     if ($('.defender').find('button').length == 0) {

//     }
// });

$('.reset').on('click', function() {
    location.reload();
});



// add initial characters using javascript not html
// use css to add images and use javascript to add classes for each character