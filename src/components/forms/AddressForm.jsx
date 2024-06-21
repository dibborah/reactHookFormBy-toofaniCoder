import { useFormContext } from "react-hook-form";

const AddressForm = () => {
  const {register} = useFormContext();
  return (
    <div className="card border-0 mb-4">
      <div className="card-header">Address Form</div>
      <div className="card-body">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your City"
            {...register("city")}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Zipcode"
            {...register("zipCode")}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Village"
            {...register("village")}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
