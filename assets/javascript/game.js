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

var enemybutton, charName;
$('.firstbutton').on('click', function() {
    if ($(this).text() == "T'Challa") {
        $('.secondchar').hide();
        $('.thirdchar').hide();
        $('.fourthchar').hide();

        for (var index in characters) {
            if (characters[index].name != "T'Challa") {
                charName = characters[index].name;
                enemybutton = $('<button>');
                enemybutton.text(charName);

                charProp = characters[index];
                for (var prop in charProp) {
                    enemybutton.attr('data-' + prop, charProp[prop]);
                }

                $('.enemychar').append(enemybutton);
            }
        }
    }

    if ($(this).text() == "Killmonger") {
        $('.firstchar').hide();
        $('.thirdchar').hide();
        $('.fourthchar').hide();

        for (var index in characters) {
            if (characters[index].name != "Killmonger") {
                charName = characters[index].name;
                enemybutton = $('<button>');
                enemybutton.text(charName);

                charProp = characters[index];
                for (var prop in charProp) {
                    enemybutton.attr('data-' + prop, charProp[prop]);
                }

                $('.enemychar').append(enemybutton);
            }
        }
    }

    if ($(this).text() == "M'Baku") {
        $('.firstchar').hide();
        $('.secondchar').hide();
        $('.fourthchar').hide();

        for (var index in characters) {
            if (characters[index].name != "M'Baku") {
                charName = characters[index].name;
                enemybutton = $('<button>');
                enemybutton.text(charName);

                charProp = characters[index];
                for (var prop in charProp) {
                    enemybutton.attr('data-' + prop, charProp[prop]);
                }

                $('.enemychar').append(enemybutton);
            }
        }
    }

    if ($(this).text() == "W'Kabi") {
        $('.firstchar').hide();
        $('.secondchar').hide();
        $('.thirdchar').hide();

        for (var index in characters) {
            if (characters[index].name != "W'Kabi") {
                charName = characters[index].name;
                enemybutton = $('<button>');
                enemybutton.text(charName);

                charProp = characters[index];
                for (var prop in charProp) {
                    enemybutton.attr('data-' + prop, charProp[prop]);
                }

                $('.enemychar').append(enemybutton);
            }
        }
    }

    $('.chosenChar').text("Your Chosen Character");
});

