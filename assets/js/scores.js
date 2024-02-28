document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the element where you want to display high scores
    var highScoresTable = document.getElementById("highScoresTable");
  
    // Create an array to store the scores and initials
    var scoresArray = [];
  
    // Get and add the scores from local storage to the array
    for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);

    // Check if the key (initials) starts with the "quiz_" prefix
    if (key.startsWith("quiz_")) {
        var initials = key.substring(5); // Remove the "quiz_" prefix
        var score = localStorage.getItem(key);
        scoresArray.push({ initials: initials, score: parseInt(score) });
    }
}

  
    // Sort the scoresArray in descending order based on the score
    scoresArray.sort(function (a, b) {
      return b.score - a.score;
    });
  
    // creates and loads info 
    var table = document.createElement("table");
    table.className = "high-scores-table";
    var tableHeader = table.createTHead();
    var headerRow = tableHeader.insertRow(0);
    headerRow.innerHTML = "<th>Rank</th><th>Initials</th><th>Score</th>";
  
    scoresArray.forEach(function (entry, index) {
      var row = table.insertRow(index + 1);
      row.innerHTML = "<td>" + (index + 1) + "</td><td>" + entry.initials + "</td><td>" + entry.score + "</td>";
    });
  
    // Append the table to the highScoresTable div
    highScoresTable.appendChild(table);
  
    // Add a button to navigate back to the quiz page
    var backToQuizBtn = document.createElement("button");
    backToQuizBtn.id = "backToQuizBtn";
    backToQuizBtn.className = "btn";
    backToQuizBtn.textContent = "Back to Quiz";
    backToQuizBtn.addEventListener("click", function () {
      // Redirect to quiz.html when the button is clicked
      window.location.href = "./quiz.html";
    });
  
    // Append the button to the main content
    var mainContent = document.querySelector("main");
    mainContent.appendChild(backToQuizBtn);
  });
  