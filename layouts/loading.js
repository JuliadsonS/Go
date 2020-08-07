let name = "LoadScreen"

///////////////////////////////////////////// COMPONENT STRUCTURE

let template = jade.compile(`
    
v-content.fill-height
    v-container.fill-height(style="overflow-y:auto; padding-bottom: 64px" fluid)
        v-dialog(v-model="display", persistent, width='300')
          v-card(color='primary', dark='')
            v-card-text.pt-3
              | Starting Your App
              v-progress-linear.mb-0(indeterminate='', color='white')


`)({
  _TITLE:"_Template"
})

///////////////////////////////////////////// COMPONENT LOGIC

export default Vue.component(name,
{
    template,
    components: {
    },
    
    mixins: [],
    
    ///////////// PROPERTIES AND DATA /////////////

    props: {},

    data: () => ({
        display:true
    }),

    ///////////// PROPERTIES AND DATA /////////////
    
    computed: {},

    watch: {},
    
    methods: {
    },

    ///////////// HOOKS ////////////////////////////
    
    created() {},
    mounted() {},


})

