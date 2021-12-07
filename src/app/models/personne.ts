export class Personne {
    "formulaire":[
        {
            label:"votre nom",
            field:"firstName",
            type: "text",
            isRequired:true,
            validation: [{name:"required",value:"Validators.required",message:"Ce champs est obligatoire"}]

        },
        {
            label:"votre prenom",
            field:"secondName",
            type:"text",
            isRequired:true,
            validation:[{name:"required",value:"Validators.required",message:"ce champs est obligatoire"}]
        },
        {
            label:"email",
            field:"email",
            type:"email",
            isRequired:true,
            validation:[{name:"required",value:"Validators.required",message:"Ce champs est obligatoire"}]
        },
        {
            label:"telephone",
            field:"telephone",
            type:"tel",
            isRequired:true,
            validation:[{name:"required",value:"Validators.required",message:"Ce champs est obligatoire"}]
        },
        {
            label:"adresse",
            field:"adresse",
            type:"text",
            isRequired:true,
            validations:[{name:"required",value:"Validators.required",message:"Ce champs est obligatoire"}]
        }

    ]
    "formulaire1":[
        {
        label:"votre nom",
        field:"nom",
        type:"text"
        isRequired:true,
        validations:[{name:"required",value:"Validators.required",message:"Ce champs est obligatoire"}]
    },
    {
        label:"Votre prenom",
        field:"prenom",
        type:"text",
        isRequired:true,
        validation:[{name:"required",value:"Validators.required",message:"Ce champs est obligatoire"}]
    },
    {
        label:"Votre adresse",
        field:"adresse",
        type:"text",
        isRequired:true,
        validation:[{name:"required",value:"Validators.required",message:"Ce Champs est Obligatoire"}]
    },
    {
        label:"Votre telephone",
        field:"telephone",
        type:"tel",
        isRequired:true,
        validation:[{name:"required",value:"Validators.required",message:"Ce Champs est obligatoire"}]
    },
    {
        label:"Votre email",
        field:"email",
        type:"email",
        isRequired:true,
        validation:[{name:"required",value:"Validators.required",message:"Ce Champs est obligatoire"}]
    }
]
}
