let app = new Vue({
    el: "#app",
    mounted: function() {
        // axios.get('data/candy.json')
        //     .then((response) => {
        //        this.candy = response.data.candy;
        //     });

        axios.get('data/people.json')
            .then((response) => {
                this.people = response.data.people;
            });
    },
   data: {
        // candy:[],
       people:[]
   },
   methods: {

   }
});
