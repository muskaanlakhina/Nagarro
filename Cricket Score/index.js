
let scores = document.getElementById('scores');

const xhr = new XMLHttpRequest;
xhr.open('GET', `https://api.cricapi.com/v1/currentMatches?apikey=eb6131a2-7917-44df-992f-c40b6db80194&offset=0
`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let response = JSON.parse(this.responseText);
        let ans = response.data;
        console.log(response);
        let anshtml = "";

        ans.forEach(function (element, index) {
            let team1=element.teams[0];
            let team2=element.teams[1];
            //console.log(team1)
            // if(element["status"]!="Match not started"){
                    let score = ` <div class="card mx-3 my-3" id="card${index}" style="width: 18rem; height:25rem; display:inline-flex">
                                <img src="istockphoto-1191513033-170667a.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h3 class="card-title">
                                    ${team1} V/S ${team2}
                                    </h3>
                                    <h4>
                                    ${element["matchType"]}
                                    </h4>
                                    <p class="card-text" style="font-size:20px">${element["status"]}</p>
                                </div>
                            </div>`;
                     anshtml+=score;
            
            
        });
        scores.innerHTML = anshtml;
    }
    else{
        console.log("SOME ERROR OCCURED!!");
    }
}

xhr.send();

