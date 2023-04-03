const validateString = (cad)=>{
    let response = (cad.length >= 3) ? true : false; 
    return response;
};

const validateTelefono = (cad) =>{
    let response = (cad.length >= 10)? true : false; 
    return response;
}

class Validate{
    validNames(values){
        const nombresRX = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25}){1,20}$/g;
        const resp = values.match(nombresRX)?true : false;
        return resp;
    }

    validMail(values){
        const mailRX = /^([a-z0-9_\.\+-]+)@([\da-z\.]+)\.([a-z\.]{0,6})$/gm;
         const resp = values.match(mailRX)?true : false;
         return resp;
    }

    validTel(values){
        const TelRX = /^(((300|301|302|303|304|324|305|310|311|312|313|314|320|321|322|323|315|316|317|318|319|350|351)[0-9]{7}))$/g;      
        const resp = values.match(TelRX)?true : false;
        return resp;
    }
    validSelect(values){
        const selectRX = 0;
        const resp = values.match(selectRX)?false : true;
        return resp;
    }

    validText(values){
        const textRX = /^[\W.a-zA-ZÀ-ÖØ-öø-ÿ\s\d]{20,100}$/g;
        const resp = values.match(textRX)?true : false;
        return resp;
    }

    validform = (objeto) => {
        const valores = Object.values(objeto); 
        let resp = valores.findIndex(e => e === false);
        return resp;
    }
}
export {validateString, validateTelefono, Validate}; 