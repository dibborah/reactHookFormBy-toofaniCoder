import AddressForm from "./AddressForm";
import BasicForm from "./BasicForm";
import ContactForm from "./ContactForm";

// eslint-disable-next-line react/prop-types
const Form = ({ formMethods }) => {
    const onSubmit = (data) => {
        console.log(data);
      };
    return (
        // eslint-disable-next-line react/prop-types
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
            <BasicForm />
            <ContactForm />
            <AddressForm />
            <button className="btn btn-primary">Create New Account</button>
        </form>
    );
};

export default Form;
