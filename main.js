var app = new Vue({
    el: '#app',
    data() {
        return {
            bggUser: null,
            items: null,
            title: null,
            showOwned: true
        }
    },
    methods: {
        bggUserSearch: function (event) {
            for (let i=0; i < this.items.length; i++) {
                let item = this.items[i];
                if(item.expansions) {
                    for (let j=0; j < item.expansions.length; j++) {
                        let subItem = item.expansions[j];
                        subItem.owned=false
                    } 
                }
            }
        }
    },
    mounted() {
        axios
            .get("https://api.myjson.com/bins/pyky4")
            .then(response => {this.items = response.data.games; this.title=response.data.title})
    }
})