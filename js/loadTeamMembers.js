
/* ------------------------------------------------- For dynamic team member loading. ------------------------------------------------- */
const TEAM_MEMBERS =
[
    {
        name:         "Erik",
        title:        "De kunstenaar",
        phone:        "+31616284091",
        descriptions: ["Klantrelaties", "Designer", "Web Developer"]
    },
    {
        name:         "Christopher",
        title:        "De Development officer",
        phone:        "+31633388901",
        descriptions: ["Technisch Consultant", "Web Developer", "Tester"]
    },
    {
        name:         "Dustin",
        title:        "De Starcraft Pro",
        phone:        "+31648178998",
        descriptions: ["Junior Web Developer", "Marketingadviseur", "Communicatieadviseur"]
    },
];


/**
 * Takes no arguments, will setup team members based on team
 * members object.
 *
 * The HTML will be placed inside an ID of an element.
 */
function setupTeamMembers()
{
    let htmlStr = "";

    for (let i = 0; i < TEAM_MEMBERS.length; i++)
    {
        let descriptionsList = TEAM_MEMBERS[i].descriptions.reduce(function (totStr, element)
        {
            totStr += `<p>${element}</p>`;
            return totStr;
        }, "");

        let memberCardStr =
        `
            <div class="memberCard">
                <h3>${TEAM_MEMBERS[i].name}</h3>
                <p>${TEAM_MEMBERS[i].title}</p>
                <img src="./images/team/PhoneIcon.png" alt="tel" width="20"></img>
                <p>${TEAM_MEMBERS[i].phone}</p>

                <!-- <img src="icons/Kwast-01.png" alt="Kwast" width="40"> -->
                <hr>
                ${descriptionsList}
            </div>
        `;

        htmlStr += memberCardStr;
    }

    $("#teamMemberContainer").html(htmlStr);
}