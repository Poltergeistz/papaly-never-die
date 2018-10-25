<template>
    <div>
        <ul>
            <li v-for="item in items">{{item.text}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            items:[
                {text: "Salut comment ça va ?"},
                {text:"Ca va super bien !"}
            ]
        }
    }
}
</script>

