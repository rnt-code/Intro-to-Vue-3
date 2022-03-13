const app = Vue.createApp({
    data: function() {
        return {
            product: 'Socks',
            description: 'This sock sucks'
        }
    }
})

//a Vue.createApp le pasamos un objeto {}, con una propiedad data: cuyo valor es una función que también nos devolverá un objeto, y este tendrá una prapiedad product cuyo valor es 'Socks'

//para simplificar la sintaxis también podemos hacer esto:

/**
 * const app = Vue.createApp({
    data() {   <---------------- esto se simplifica           
        return {
            product: 'Socks'
        }
    }
})
 * 
 */