

const currentYear = document.querySelector("#lastModified");
const datetime = new Date();

currentYear.innerHTML = `Last Modification:  ${new Intl.DateTimeFormat (
    "en-US",
    {
        dateStyle: "full"
    }
).format(datetime)}`;