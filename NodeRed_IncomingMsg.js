/*This code ran in a ui-template node in node red will take any incoming msg.payload and alert on the dashboard what that message was.
In order to call variables in this code using "this" you must bind this to the outside of the function.

export default {
    data() {
        return {
            variable1: 'value1'
        }
    }
    mounted() {
        this.$socket.on('msg-input:' + this.id, function(msg) {
            if (msg.payload === 'some condition') {
                this.variable1 = 'new value'
            }
        }.bind(this))
    }
}

*/ 
export default {
    mounted() {
        this.$socket.on('msg-input:' + this.id, function(msg) {
            if (msg.payload) {
                alert(`received message: ${msg.payload}`)
            }
        })
    }
}
