/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
function buildScoreboard(url) {
    var req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);
    var teams = JSON.parse(req.responseText);
    teams.sort(function(t1, t2) {
        return t2.score - t1.score;
    })
    scoreboard = document.getElementById('scoreboard');
    for (i=0; i<teams.length; i++) {
        tr = document.createElement('tr');

        th = document.createElement('th');
        th.setAttribute('scope', 'row');
        th.textContent = i+1;
        tr.appendChild(th);

        td = document.createElement('td');
        td.textContent = teams[i].team_name;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = teams[i].affiliation;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = teams[i].score;
        tr.appendChild(td);

        td = document.createElement('td');
        img = document.createElement('img');
        img.setAttribute('src', teams[i].logo);
        img.setAttribute('width', '90px');
        img.setAttribute('height', '60px');
        img.setAttribute('style', 'object-fit: contain;');

        td.appendChild(img);
        tr.appendChild(td);

        scoreboard.appendChild(tr);
    }
}

function buildWriteupScoreboard(url) {
    var req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);
    var teams = JSON.parse(req.responseText);
    var badged_teams = [];
    for (i=0; i<teams.length; i++) {
        if (teams[i].score > 0) {
            badged_teams.push(teams[i]);
        }
    }
    badged_teams.sort(function(t1, t2) {
        return t2.score - t1.score;
    })
    scoreboard = document.getElementById('scoreboard');
    for (i=0; i<badged_teams.length; i++) {
        tr = document.createElement('tr');

        th = document.createElement('th');
        th.setAttribute('scope', 'row');
        if (i != 0 && badged_teams[i].score == badged_teams[i-1].score) {
            th.textContent = i;
            tr.appendChild(th);
        } else {
            th.textContent = i+1;
            tr.appendChild(th);
        }

        td = document.createElement('td');
        td.textContent = badged_teams[i].team_name;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = badged_teams[i].affiliation;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = badged_teams[i].score;
        tr.appendChild(td);

        td = document.createElement('td');
        img = document.createElement('img');
        img.setAttribute('src', badged_teams[i].logo);
        img.setAttribute('width', '90px');
        img.setAttribute('height', '60px');
        img.setAttribute('style', 'object-fit: contain;');

        td.appendChild(img);
        tr.appendChild(td);

        scoreboard.appendChild(tr);
    }
}
