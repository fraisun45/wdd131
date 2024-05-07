const currentdate = document.querySelector("#cyear");

const today = new Date();

currentdate.innerHTML = `Today is <span class="lastModified">${new Intl.DateTimeFormat(
    "en-US", 
    {
        dateStyle: "full"
    }
    ).format(today)}</span>`;