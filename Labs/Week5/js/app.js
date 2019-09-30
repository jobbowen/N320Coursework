Vue.component("student-card", {
    props: ["student", "isActive"],
    template: "<div class='student' v-bind:class='{cardActive:isActive}'>{{student.name}} : {{student.skill}}</div>"
});

let app = new Vue({
    el: "#app",
    data: {
        students: [
            {name: "Sienna", skill: 2, joy: 0},
            {name: "Cyan", skill: 0, joy: 5},
            {name: "Magenta", skill: 3, joy: 3}
        ],
        currentStudent: {name: "Sienna", skill: 2, joy: 0},
        currentStudentId: 0,
        cardActive: true
    },
    methods: {
        arrowClicked: function () {
            this.currentStudentId++;
            this.currentStudent = this.students[this.currentStudentId];

            if (this.currentStudentId >= this.students.length - 1) {
                this.currentStudentId = -1;
            }

            this.cardActive = !this.cardActive;
        }
    }
});
