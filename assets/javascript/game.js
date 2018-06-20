var characters = [{
        name: "T'Challa",
        health: 120,
        attack_power: 6,
        counter_attack: 8
    },
    {
        name: "Killmonger",
        health: 120,
        attack_power: 6,
        counter_attack: 8
    },
    {
        name: "W'Kabi",
        health: 120,
        attack_power: 6,
        counter_attack: 8
    },
    {
        name: "M'Baku",
        health: 120,
        attack_power: 6,
        counter_attack: 8
    }
]

var enemybutton, charName, defenderbutton;
var stop = [];
// first button
$('.firstbutton').on('click', function() {
    if ($('.chosen').text() == "Available Characters") {
        if ($(this).data('name') == "T'Challa") {
            $('.secondchar').hide();
            $('.thirdchar').hide();
            $('.fourthchar').hide();

            for (var index in characters) {
                if (characters[index].name != "T'Challa") {
                    charName = characters[index].name;
                    enemybutton = $('<button>');
                    enemybutton.text(charName + characters[index].health);
                    enemybutton.addClass('secondbutton');

                    charProp = characters[index];
                    for (var prop in charProp) {
                        enemybutton.attr('data-' + prop, charProp[prop]);
                    }

                    $('.enemychar').append(enemybutton);
                }
            }
        }

        if ($(this).data('name') == "Killmonger") {
            $('.firstchar').hide();
            $('.thirdchar').hide();
            $('.fourthchar').hide();

            for (var index in characters) {
                if (characters[index].name != "Killmonger") {
                    charName = characters[index].name;
                    enemybutton = $('<button>');
                    enemybutton.text(charName + characters[index].health);
                    enemybutton.addClass('secondbutton');

                    charProp = characters[index];
                    for (var prop in charProp) {
                        enemybutton.attr('data-' + prop, charProp[prop]);
                    }

                    $('.enemychar').append(enemybutton);
                }
            }
        }

        if ($(this).data('name') == "M'Baku") {
            $('.firstchar').hide();
            $('.secondchar').hide();
            $('.fourthchar').hide();

            for (var index in characters) {
                if (characters[index].name != "M'Baku") {
                    charName = characters[index].name;
                    enemybutton = $('<button>');
                    enemybutton.text(charName + characters[index].health);
                    enemybutton.addClass('secondbutton');

                    charProp = characters[index];
                    for (var prop in charProp) {
                        enemybutton.attr('data-' + prop, charProp[prop]);
                    }

                    $('.enemychar').append(enemybutton);
                }
            }
        }

        if ($(this).data('name') == "W'Kabi") {
            $('.firstchar').hide();
            $('.secondchar').hide();
            $('.thirdchar').hide();

            for (var index in characters) {
                if (characters[index].name != "W'Kabi") {
                    charName = characters[index].name;
                    enemybutton = $('<button>');
                    enemybutton.text(charName + characters[index].health);
                    enemybutton.addClass('secondbutton');

                    charProp = characters[index];
                    for (var prop in charProp) {
                        enemybutton.attr('data-' + prop, charProp[prop]);
                    }

                    $('.enemychar').append(enemybutton);
                }
            }
        }
    }

    $('.chosen').text("Your Chosen Character");

    $('.secondbutton').on('click', function() {
        if (stop.length == 0)  {
            if ($(this).data('name') == "T'Challa") {
                $(this).hide();

                defenderbutton = $('<button>');
                defenderbutton.text(characters[0].name);
                $('.defender').append(defenderbutton);
            }

            if ($(this).data('name') == "Killmonger") {
                $(this).hide();

                defenderbutton = $('<button>');
                defenderbutton.text(characters[1].name);
                $('.defender').append(defenderbutton);
            }

            if ($(this).data('name') == "M'Baku") {
                $(this).hide();

                defenderbutton = $('<button>');
                defenderbutton.text(characters[2].name);
                $('.defender').append(defenderbutton);
            }

            if ($(this).data('name') == "W'Kabi") {
                $(this).hide();

                defenderbutton = $('<button>');
                defenderbutton.text(characters[3].name);
                $('.defender').append(defenderbutton);
            }

            stop.push("hello");
            $('.enemy').text("Your Chosen Enemy");
        }
    });
});

add initial characters using javascript not html
use css to add images and use javascript to add classes for each character













