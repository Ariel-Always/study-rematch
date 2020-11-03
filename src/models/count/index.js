export const count = {

    state:0,

    reducers:{

        addCount:(state,payload)=>{

            return state+payload;

        },

        subCount:(state,payload)=>{

            return state-payload;

        },

    }

};