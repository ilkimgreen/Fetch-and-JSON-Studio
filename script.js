window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response) {
    response.json()
    .then(function(json) {
      console.log(json);
      let myPage = document.getElementById("container");
      for (i = 0; i < json.length; i++) {
        myPage.innerHTML += `
          <div class="astronaut">
            <div class="bio">
              <h3>${json[i].firstName} ${json[i].lastName}</h3>
              <ul>
                <li>Id: ${json[i].id}</li>
                <li>Active: ${json[i].active}</li>
                <li>First Name: ${json[i].firstName}</li>
                <li>Last Name: ${json[i].lastName}</li>
                <li>Skills: ${json[i].skills.join(" | ")}</li>
                <li>Hours in space: ${json[i].hoursInSpace}</li>
              </ul>
            </div>
            <img class="avatar" src="${json[i].picture}">
          </div>
        `;
          }
        });
    });
});