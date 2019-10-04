Vue.component("student-card", {
    props: [ "student", "isactive" ],
    template: "<div class='student' v-bind:class='{ cardActive:isactive, cardOut:!isactive }'>{{student.name}} : {{student.skill}}</div>"
});

Vue.component("student-card-two", {
    props: [ "student", "isactivereverse" ],
    template: "<div class='student' v-bind:class='{ cardActiveReverse:isactivereverse, cardOutReverse:!isactivereverse }'>{{student.name}} : {{student.skill}}</div>"
});

Vue.component("counter", {
    template: "<div style='color: #ef4b4b'>Number of times clicked: </div>"
});


var app = new Vue({
    el: "#app",
    data: {
        students: [
            { name: "Sienna", skill: 2, joy: 0 },
            { name: "Cyan", skill: 0, joy: 5 },
            { name: "Magenta", skill: 3, joy: 3 }
        ],
        counter: 0,
        currentStudent: { name: "Sienna", skill: 2, joy: 0 },
        curStudentId: 0,
        cardActive: true,
        cardActiveReverse: true
    },
    methods: {
        arrowClicked: function() {
            this.counter++;

            this.cardActive = !this.cardActive;

            setTimeout( () => {
                //modify the skill of the current student
                //before moving onward:
                this.currentStudent.skill ++;

                //iteration code
                this.curStudentId ++;
                this.currentStudent = this.students[this.curStudentId];

                if(this.curStudentId >= this.students.length-1) {
                    this.curStudentId = -1;
                }

                //animation trigger
                this.cardActive = !this.cardActive;

            }, 300);
        },

        arrowClickedReverse: function() {
                this.counter++;

            this.cardActiveReverse = !this.cardActiveReverse;

            setTimeout( () => {
                //modify the skill of the current student
                //before moving onward:
                this.currentStudent.skill --;

                //iteration code
                this.curStudentId ++;
                this.currentStudent = this.students[this.curStudentId];

                if(this.curStudentId >= this.students.length-1) {
                    this.curStudentId = -1;
                }

                //animation trigger
                this.cardActiveReverse = !this.cardActiveReverse;
                // this.cardActive = !this.cardActive;

            }, 300);
        },
    }
});
