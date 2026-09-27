
var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function(id) {
    return document.getElementById(id);
};

window.onload = function() {
    $("add").onclick = addScore;
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;

    $("name").focus();
};

function addScore() {
    var name = $("name").value;
    var score = parseInt($("score").value);

    if (name == "" || isNaN(score) || score < 0 || score > 100) {
        alert("You must enter a name and a valid score");
    } else {
        names.push(name);
        scores.push(score);

        $("name").value = "";
        $("score").value = "";

        $("name").focus();
    }
}

function displayResults() {
    var total = 0;
    var highScore = scores[0];
    var highScoreName = names[0];

    for (var i = 0; i < scores.length; i++) {
        total += scores[i];

        if (scores[i] > highScore) {
            highScore = scores[i];
            highScoreName = names[i];
        }
    }

    var average = total / scores.length;

    $("results").innerHTML =
        "<h2>Results</h2>" +
        "<p>Average score = " + average + "</p>" +
        "<p>High score = " + highScoreName +
        " with a score of " + highScore + "</p>";
}

function displayScores() {
    var html = "";

    for (var i = 0; i < names.length; i++) {
        html += "<tr>" +
                "<td>" + names[i] + "</td>" +
                "<td>" + scores[i] + "</td>" +
                "</tr>";
    }

    $("scores_table").getElementsByTagName("tbody")[0].innerHTML = html;
}
