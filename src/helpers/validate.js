module.exports = validate;

function doValidate(params, validation) {
    let errorList = [];
    const paramsNames = Object.keys(validation),
    rxDate = /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/;

    paramsNames.forEach((paramName) => {
        const metalDetector = validation[paramName];
        const suitcase = params[paramName];

        if (metalDetector.required) {
            if (typeof suitcase === "undefined") return errorList.push(`"${paramName}" é obrigatório`);
        }

        if (metalDetector.notNull) {
            if (suitcase === null) return errorList.push(`"${paramName}" não pode ser nulo`);
        }

        if(suitcase && metalDetector.maxlength){
            if(suitcase.length > metalDetector.maxlength) return errorList.push(`"${paramName}" deve se conter menos que ${metalDetector.maxlength} caracteres`);
        }

        if (suitcase && metalDetector.string) {
            if (!(typeof suitcase === 'string' || suitcase instanceof String))
                return errorList.push(`"${paramName}" deve ser um texto`);
        }

        if (suitcase && metalDetector.date) {
            let splitedDate = suitcase.split("/");
             if(!rxDate.test(suitcase) || splitedDate.length != 3 ){
                return errorList.push(`"${paramName}" deve ser uma data`);
            }
        }
    });

    return errorList;
}

async function validate(params, validation) {
    const errorList = doValidate(params, validation);

    if (errorList.length) {
        throw errorList;
    }

    return true;
}
