let name = "_Template"

///////////////////////////////////////////// COMPONENT STRUCTURE

let template = jade.compile(`
v-container
    div(align="center")
        h1 _Template Component
`)({
  _TITLE:"_Template"
})

///////////////////////////////////////////// COMPONENT LOGIC

export default Vue.component(name,
{
    template,
    components: {},
    
    mixins: [],
    
    ///////////// PROPERTIES AND DATA /////////////

    props: {},

    data: () => ({}),

    ///////////// PROPERTIES AND DATA /////////////
    
    computed: {},

    watch: {},
    
    methods: {},

    ///////////// HOOKS ////////////////////////////
    
    created() {},
    mounted() {},


})

