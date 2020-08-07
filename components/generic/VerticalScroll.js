const name = "VerticalScroll"

///////////////////////////////////////////// COMPONENT STRUCTURE

const template = jade.compile(`
q-scroll-area.full-height
  slot
`)({
  _TITLE:"VerticalScroll"
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

