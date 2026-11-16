export default class Task {

    constructor(text, category, completed) {

        this.text = text;
        this.category = category;
        this.completed = completed;

    }

    render() {

        const card = document.createElement("div");

        const taskText = document.createElement("p");

        taskText.textContent = this.text;

        if (this.completed) {
            taskText.classList.add("completed");
        }

        const category = document.createElement("p");

        category.textContent = this.category;

        const button = document.createElement("button");

        button.textContent = this.completed ? "Completed" : "Complete";

        button.disabled = this.completed;

        button.addEventListener("click", () => {

            this.completed = true;

            taskText.classList.add("completed");

            button.textContent = "Completed";

            button.disabled = true;

        });

        card.appendChild(taskText);
        card.appendChild(category);
        card.appendChild(button);

        return card;

    }

}