// RATE ABDUALI

const ratings = [
    "10/10. Unfortunately.",
    "0/10. Try again.",
    "404. Adequacy not found.",
    "100/100 CHAOS.",
    "Suspicious creature.",
    "Would not recommend.",
    "Actually a decent human. Maybe."
];

document.getElementById("rateButton").onclick = () => {
    const rating = ratings[Math.floor(Math.random() * ratings.length)];
    result.textContent = "ABDUALI RATING: " + rating;
};


// SUMMON ABDUALI

const summonMessages = [
    "ABDUALI HAS ENTERED THE CHAT.",
    "Nobody invited him.",
    "He is watching you.",
    "ABDUALI HAS LEFT THE CHAT.",
    "Connection with Abduali established."
];

document.getElementById("summonButton").onclick = () => {
    result.textContent =
        summonMessages[Math.floor(Math.random() * summonMessages.length)];
};


// HACK THE SYSTEM

document.getElementById("hackButton").onclick = () => {
    const screen = document.getElementById("hackScreen");

    screen.classList.add("active");
    screen.textContent = "HACKING ABDUALI.EXE...";

    setTimeout(() => {
        screen.textContent = "ACCESS DENIED. HE IS TOO POWERFUL.";

    }, 2000);

    setTimeout(() => {
        screen.classList.remove("active");
    }, 4000);
};


// IS ABDUALI REAL?

const reality = [
    "YES.",
    "NO.",
    "WE ARE NOT ALLOWED TO DISCUSS THIS.",
    "THE GOVERNMENT KNOWS.",
    "PLEASE STOP ASKING.",
    "ERROR: REALITY NOT FOUND."
];

document.getElementById("realButton").onclick = () => {
    result.textContent =
        reality[Math.floor(Math.random() * reality.length)];
};


// DELETE ABDUALI

document.getElementById("deleteButton").onclick = () => {
    result.textContent = "DELETING ABDUALI...";

    setTimeout(() => {
        result.textContent = "ERROR 403: ABDUALI CANNOT BE DELETED.";
    }, 1500);
};
