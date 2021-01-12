const Administracion = {
  data() {
    return {
      message: "Hola",
      inscripciones: [],
    };
  },
  created: function () {
    axios.get('https://restcountries.eu/rest/v2/all')
         .then((response)=>console.log(response.data))
         .catch((error)=>console.error(error))
  },
};

Vue.createApp(Administracion).mount("#administracion");
