app.component('product-details', {
    props: {
        details: {
            type: String
        }
    },
    computed: {
        notes() {
            return this.details 
        }
    }
})