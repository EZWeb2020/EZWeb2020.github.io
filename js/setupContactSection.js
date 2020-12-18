/**
 * Regular expression check for frontend e-mail input.
 * Retrieved from:
 * https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
 *
 * @param {string} email The e-mail string to test.
 */
function validateEmail(email)
{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


/**
 * Check for empty texts in contact form.
 *
 * @param {*} htmlInput An HTML object to check and change properties of.
 */
function checkEmpty(htmlInput)
{
    if (htmlInput.value == "")
    {
        $(htmlInput).css("border-bottom-color", "rgba(0, 0, 0, 0.5)");
    }
    else
    {
        $(htmlInput).css("border-bottom-color", "green");
    }
}


/**
 * Setup for contact section.
 */
function setupContactSection()
{
    $("#nameInput").on("input", function () { checkEmpty(this); });
    $("#emailInput").on("input", function ()
    {
        if (this.value == "")
        {
            $(this).css("border-bottom-color", "rgba(0, 0, 0, 0.5)");
        }
        else if (validateEmail(this.value))
        {
            $(this).css("border-bottom-color", "green");
        }
        else
        {
            $(this).css("border-bottom-color", "red");
        }
    });
    $("#subjectInput").on("input", function () { checkEmpty(this); });
    $("#commentInput").on("input", function () { checkEmpty(this); });
}