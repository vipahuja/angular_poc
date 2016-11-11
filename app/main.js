
var app = angular.module("app", []);
app.factory('Data', function () {
  return {message: " data from service"};
});
app.factory('Avengers', function () {

    var Avengers={};
    Avengers.cast=[
        {
            name: "Robert Downey Jr.",
            character: "Tony Stark / Iron Man"
        },
        {
            name: "Chris Evans",
            character: "Steve Rogers / Captain America}"
        },
        {
            name: "Mark Ruffalo",
            character: "Bruce Banner / The Hulk}"
        },
        {
            name: "Chris Hemsworth",
            character: "Thor"
        },
        {
            name: "Scarlett Johansson",
            character: "Natasha Romanoff / Black Widow"
        },
        {
            name: "Jeremy Renner",
            character: "Clint Barton / Hawkeye"
        },
        {
            name: "Tom Hiddleston",
            character: "Loki"
        },
        {
            name: "Clark Gregg",
            character: "Agent Phil Coulson"
        },
        {
            name: "Cobie Smulders",
            character: "Agent Maria Hill"
        },
        {
            name: "Stellan Skarsgard",
            character: "Selvig"
        },
        {
            name: "Samuel L. Jackson",
            character: "Nick Fury"
        },
        {
            name: "Gwyneth Paltrow",
            character: "Pepper Potts"
        },
        {
            name: "Paul Bettany",
            character: "Jarvis (voice)"
        },
        {
            name: "Alexis Denisof",
            character: "The Other"
        },
        {
            name: "Tina Benko",
            character: "NASA Scientist"
        }
    ];
    return Avengers;
})
app.filter('reverse', function () {

    return function (text) {
        return text.split("").reverse().join("");

    }

});
app.controller("FirstCrtl", function($scope, Data) {
    $scope.data= Data;
});

app.controller("SecondCrtl", function($scope, Data) {
    $scope.data= Data;
});
app.controller('AvengersCrtl', function ($scope, Avengers) {
    $scope.avengers=Avengers;
});
app.directive( 'enter', function () {
    return function (scope, element) {
        element.bind("mouseenter",function () {
            element.addClass("primary callout");
            console.log(" in enter");

        })
    }

});

app.directive('leave', function () {
    return function (scope, element) {
        element.bind("mouseleave",function () {
            element.removeClass("primary callout");
            console.log(" in leave");
        })
    }

});

