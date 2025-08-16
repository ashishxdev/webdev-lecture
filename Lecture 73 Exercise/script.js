
function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    if (views >= 1000000) views = (views / 1000000).toFixed(1) + "M";
    else if (views >= 1000) views = (views / 1000) + "K";

    let agetext;
    if (monthsOld > 12) {
        let years = (monthsOld / 12).toFixed(1);
        if (years.endsWith(".0")) years = years.slice(0, -2);
        agetext = years + " year ago";
    } else {
        agetext = monthsOld + " months ago";
    }

    let html = `
            <div class="card">
                <div class="img">
                    <img class="image" src="${thumbnail}" alt="">
                    <div class="duration">${duration}</div>
                </div>
                <div class="others">
                    <div class="title">${title}</div>
                    <div class="details">${cName} • ${views} views • ${agetext}</div>
                </div>
            </div>`;
    document.querySelector(".container").innerHTML += html;
}

createCard(
    "Introduction to Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    560000,
    14,
    "31:22",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);