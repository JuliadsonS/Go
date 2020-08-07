const name = "QuasarAutoform"

const purpose= "Automatic Form creator component for Vuetify"

///////////////////////////////////////////// COMPONENT STRUCTURE

const template = jade.compile(`

q-form(v-model="valid")

  .row

    div(v-for="(field, key) in baseform", :class="field.col")


        q-input(

          v-if="field.type=='text'", 
          :prepend-inner-icon="field.icon", 
          :label='field.label',
          :required='field.required',
          :rules="rules[key]",
          
          v-model="value[key]",

        )

        q-input(

          type="textarea"
          v-if="field.type=='textarea'", 
          :prepend-inner-icon="field.icon", 
          :label='field.label',
          :required='field.required',
          :rules="rules[key]",
          
          v-model="value[key]",

        )

        q-select(

          v-if="field.type=='select'", 
          :options="field.items",
          :option-value="field.item_value || 'id'",
          emit-value
          map-options
          :option-label="field.item_field",
          :label="field.label",
          :rules="rules[key]",
          
          v-model="value[key]"

        )

`)({})

///////////////////////////////////////////// COMPONENT LOGIC

export default Vue.component(name,
{
    template,
    components: {},
    
    mixins: [],
    
    ///////////// PROPERTIES AND DATA /////////////

    props: {
      model: Object,
      value: Object,
      validation: Boolean
    },

    data: () => ({

        valid: "",

    }),

    ///////////// PROPERTIES AND DATA /////////////
    
    computed: {

      disable_save(){
        return !this.valid;
      },

      baseform(){
        return this.model._form
      },

      rules(){ 
        return this.model.rules() 
      },

      /*hasId(){
        return this.value._id
      }*/

    },

    watch: {

      valid(val){
        this.$emit("update:validation", val)
        console.log("VALIDATION")
      }

    },
    
    methods: {

    },

    ///////////// HOOKS ////////////////////////////
    
    created() {},
    mounted() {
      // console.log("BASEFORM", this.baseform)
    },


})

