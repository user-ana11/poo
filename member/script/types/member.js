export default class Member {

    constructor(name, position, department, available) {

        this.name = name;
        this.position = position;
        this.department = department;
        this.available = available;

    }

    render() {

        const card = document.createElement("div");

        card.innerHTML = `
            <h2>${this.name}</h2>
            <p>Position: ${this.position}</p>
            <p>Department: ${this.department}</p>
            <p>Availability: ${this.available ? "Available" : "Unavailable"}</p>
        `;

        return card;

    }

}