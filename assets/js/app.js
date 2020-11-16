var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    person: '',
    people: []   
  },
  methods:{
    addPerson(){
      this.people.push(this.person)
      this.person = ''
    }
  }
})