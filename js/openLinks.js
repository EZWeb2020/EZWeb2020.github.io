/*
 *  Work links setup function.
 *
 */
function setupWorkLinks()
{
    $("#globalEarthFoodLink").click(function ()
    {
        window.open("https://globalearthfood.eu", "_blank");
    });
}


/*
 *  Footer links setup function.
 *
 */
function setupFooterLinks()
{
    $(".socialMediaIcons svg:nth-of-type(1)").click(function ()
    {
        window.open("https://www.linkedin.com/company/ez-web-services", "_blank");
    });
    $(".socialMediaIcons svg:nth-of-type(2)").click(function ()
    {
        window.open("https://www.instagram.com/ezweb_services/", "_blank");
    });
    $(".socialMediaIcons svg:nth-of-type(3)").click(function ()
    {
        window.open("https://www.facebook.com/EZ-Web-110162490885232", "_blank");
    });
}