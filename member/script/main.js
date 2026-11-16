import Member from "./types/member.js";

const memberList = document.querySelector("#member-list");

const departmentFilter = document.querySelector("#department-filter");

class Main {

    constructor() {

        this.members = [];

    }

    async init() {

        const response = await fetch("./data/team.json");

        const data = await response.json();

        this.members = data.map(member => {

            return new Member(
                member.name,
                member.position,
                member.department,
                member.available
            );

        });

        this.loadDepartments();

        this.render(this.members);

        departmentFilter.addEventListener("change", () => {

            const department = departmentFilter.value;

            let filteredMembers;

            if (department === "all") {

                filteredMembers = this.members;

            } else {

                filteredMembers = this.members.filter(member => {

                    return member.department === department;

                });

            }

            this.render(filteredMembers);

        });

    }

    loadDepartments() {

        const departments = [...new Set(
            this.members.map(member => member.department)
        )];

        departments.forEach(department => {

            const option = document.createElement("option");

            option.value = department;

            option.textContent = department;

            departmentFilter.appendChild(option);

        });

    }

    render(members) {

        memberList.innerHTML = "";

        members.forEach(member => {

            memberList.appendChild(member.render());

        });

    }

}

const app = new Main();

app.init();