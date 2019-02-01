new Vue({
    el: '#app',
    data() {
        return {
            items: null
        }
    },
    mounted() {
        axios
            .get("https://api.myjson.com/bins/14th1k")
            .then(response => (this.items = response.data.games))
    }
})