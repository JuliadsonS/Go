import Enums from "./enums.js"

export default {

    /// DEFAULT ////////////////////////////////////////////////////////////////////////////////////

    default: (modify) => ({

        text:       "New Message",
        // _sendTo:    "", 
        type:       Enums.messagetype[0].id,
        subject:    "New content for a New Message",


    ...modify}),

    
    /// VALIDATION ULES ////////////////////////////////////////////////////////////////////////////

    rules: () => ({

        text: [ 
            v => !!v || 'Subject is required', 
            v => v.length <= 20 || 'The subject is too long'
        ],

        type: [
            v => v==Enums.messagetype[0].id || 'Plain Text support only'
        ],

        subject: [
            v => v.length <= 240 || 'This message is longer than 240 characters'
        ]
    
    }),

    /// FORM ////////////////////////////////////////////////////////////////////////////////////

    _form: {

        text:       { label:"Message Subject",             icon:"mdi-mail",    type:"text",        col:6 },
        // _sendTo:    { label:"Usuário Destinatário",        icon:"mdi-user",    type:"select",      col:6,     items:[],                   item_field:"name"},
        type:       { label:"Message Type",                icon:"mdi-mail",    type:"select",      col:6,     items:Enums.messagetype,    item_field:"name"},
        subject:    { label:"Message Content",             icon:"mdi-pencil",  type:"textarea",    col:12 },

    },

    /// DISPLAY FIELDS //////////////////////////////////////////////////////////////////////////

    display: { 
        title: "text",
        subtitle: "subject",
        subvalue: undefined,
    },

    /// FILTER RULES ////////////////////////////////////////////////////////////////////////////

    filter: { 
        
        byType: {                               // Filter name
            field: "text",                      // Field to be filtered
            label: "Filter By Message Tyoe",    // Label for filter rule
            render: Enums.messagetype,          // Array of possibilities to the Filter [{id,name}]
            multi: true,                        // Is it possible to select multiple items on this Filter Rule?
            filter: (item, filtervalue) => a.type==filtervalue,           // Custom filter function
        }

        //[...]

    },

}
