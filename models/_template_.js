import Enums from "./enums.js"

// _TEMPLATE_ MODEL

export default {

    /// DEFAULT ////////////////////////////////////////////////////////////////////////////////////

    default: (modify) => ({

        //##fields##field:       "Content"##

    ...modify}),


    /// VALIDATE ///////////////////////////////////////////////////////////////////////////////////

    rules: () => ({

        //##rules##field:       { /*VALIDATION DESCRIPTION OR FUNCTION*/ },##

    }),

    /// DEFAULT ////////////////////////////////////////////////////////////////////////////////////

    _form: {

        //###form##field:       { /*FORM DESCRIPTION OR FUNCTION*/ },##

    }

}
