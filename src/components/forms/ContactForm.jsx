import { useFormContext } from "react-hook-form";

const ContactForm = () => {
  const { register } = useFormContext();
  return (
    <div className="card border-0 mb-4">
      <div className="card-header">Contact Form</div>
      <div className="card-body">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your E-mail Address"
            {...register("email")}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Phone Number"
            {...register("phoneNumber")}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Alternate Phone Number"
            {...register("alternatePhoneNumber")}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
