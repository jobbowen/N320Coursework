//Could not figure out how to implement second component into the first component for reversing the display.

//Creates view component
Vue.component("student-card", {
    //Set props where student references currentStudent and isactive references cardActive/cardOut
    props: [ "student", "isactive" ],
    //Create template and bind classes to div
    template: "<div class='student' v-bind:class='{ cardActive:isactive, cardOut:!isactive }'>{{student.name}} : {{student.skill}}</div>"
});

//Same as first component
Vue.component("student-card-two", {
    props: [ "student", "isactivereverse" ],
    template: "<div class='student' v-bind:class='{ cardActiveReverse:isactivereverse, cardOutReverse:!isactivereverse }'>{{student.name}} : {{student.skill}}</div>"
});

//Create counter component
Vue.component("counter", {
    //Create template and div properties/style
    template: "<div style='color: #ef4b4b'>Number of times clicked: </div>"
});

//Create Vue object and store in app
var app = new Vue({
    //Grab element
    el: "#app",
    //Define data
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

    //Methods called in DOM
    methods: {
        arrowClicked: function() {
            //Increment counter
            this.counter++;
            //cardActive is equal to the opposite of cardActive
            this.cardActive = !this.cardActive;

            //Time it will take for all code within will execute
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
