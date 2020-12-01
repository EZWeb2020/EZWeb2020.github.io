/* ------------------------------------------------- Telegram message time! ------------------------------------------------- */
/**
 * Takes no arguments, will setup contact form messaging
 * through a simple fetch.
 *
 * The message to be sent will be read from the html file.
 */
function setupTelegram()
{
    /**
     * Takes selectors for where to retrieve the values.
     */
    function getFromHTMLAndSend(subjectID, nameID, emailID, messageID)
    {
        if (!$(subjectID).val() || !$(nameID).val() || !$(emailID).val() || !$(messageID).val())
        {
            return;
        }

        let msgString =
        `
            Pakket:  ${$(subjectID).val()} -
            Naam:    ${$(nameID).val()} -
            E-mail:  ${$(emailID).val()} -
            Bericht: ${$(messageID).val()}
        `;

        /* Empty the values. */
        $(subjectID).val("");
        $(nameID).val("");
        $(emailID).val("");
        $(messageID).val("");

        animateSendBtn();

        /* Send AJAX request. */
        $.ajax({
            type: "POST",
            url:  "https://firsttestappheroku.herokuapp.com/forwardToTelegramGC",
            data:
            {
                message: msgString
            },
            success: function (resp)
            {
                console.log(resp);
            }
            // dataType: "Default"
        });
    }

    $("#sendMsgBtn").click(function () { getFromHTMLAndSend("#subjectInput", "#nameInput", "#emailInput", "#commentInput"); });
}


/**
 * Sends the envelope to the right.
 */
function animateSendBtn()
{
    let svgEnvelope     = $("#envelopeIcon");
    let verstuurBtnHTML = $("#verstuurBtn");

    $({xPosition: 0}).animate({xPosition: 600},
    {
        duration: 400,
        easing: 'linear',
        step: function ()
        {
            if (this.xPosition >= 500)
            {
                svgEnvelope.css({transform: "translate(0px, 3px)"});
                verstuurBtnHTML.css("visibility", "visible");
            }
            else
            {
                svgEnvelope.css({transform: 'translate(' + this.xPosition + 'px, 3px)'});
                verstuurBtnHTML.css("visibility", "hidden");
            }
        }
    });
}