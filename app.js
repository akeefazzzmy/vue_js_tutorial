const app = Vue.createApp({
    data(){
        return{
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books:[
                {title: 'Name of the wind', author: 'patrick rothfuss', img:'assets/a.jpg', isFav:true},
                {title: 'The way of kings', author: 'brandon sanderson', img:'assets/b.jpg', isFav:false},
                {title: 'The final empire', author: 'patrick rothfuss', img:'assets/c.jpg', isFav:true}
            ]
        }
    },
    methods:{
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')