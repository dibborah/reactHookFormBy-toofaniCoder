import { useFormContext } from "react-hook-form";

const BasicForm = () => {
  const { register } = useFormContext();
  return (
    <div className="card border-0 mb-4">
      <div className="card-header">Basic Form</div>
      <div className="card-body">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your First Name"
            {...register("firstName")}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Middle Name"
            {...register("middleName")}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Last Name"
            ref={register}
            {...register("lastName")}
          />
        </div>
      </div>
    </div>
  );
};

export default BasicForm;
