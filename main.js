
function generateElement(obj) {
    let main = document.createElement("div");
    main.id = "customer";

    let img = document.createElement("img");
    img.setAttribute("src", obj.picture.medium);
    main.appendChild(img);

    let head = document.createElement("h2");
    head.textContent = capFirst(obj.name.first + " " + obj.name.last);
    main.appendChild(head);

    let email = document.createElement("a");
    email.setAttribute("class", "email");
    email.textContent = obj.email;
    main.appendChild(email);

    let address = document.createElement("p");
    address.innerHTML = (
        capFirst(obj.location.street) + "<br>" +
        capFirst(obj.location.city) + ", " + nameToAbbr(obj.location.state)
    );
    main.appendChild(address);

    let dob = document.createElement("p");
    dob.textContent = ("DOB: " + moment(obj.dob).format("MMM Do, YYYY"));
    main.appendChild(dob);

    let joined = document.createElement("p");
    joined.textContent = ("Joined: " + moment(obj.registered).format("MMM Do, YYYY"));
    main.append(joined);

    document.querySelector(".content").appendChild(main);
}

function capFirst(str) {
    let subs = str.split(' ');
    if(subs.length === 1)
        return (str.charAt(0).toUpperCase() + str.slice(1));
    let output = "";
    for(s of subs)
        output += (capFirst(s) + " ");
    return output.trim();
}

customers.map(generateElement);