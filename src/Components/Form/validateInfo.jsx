
export default function validateInfo(values) {
    let errors = {}

    //Name
    if(!values.name) {
        errors.name = "Name required"
    }

    //Email
    if(!values.email){
        errors.email = "Email required"
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }

    //Address
    if(!values.address) {
        errors.address = "Address required"
    }

    //PhoneNumber
    if(!values.phoneNumber) {
        errors.phoneNumber = "Phone Number is required"
    } else if(values.phoneNumber.length > 10 || values.phoneNumber.length < 10) {
        errors.phoneNumber = "Phone Number need 10 digits"
    }

    return errors;
}
