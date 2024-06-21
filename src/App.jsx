import Form from "./components/forms/Forms";
import { FormProvider, useForm } from "react-hook-form";
import './App.css';

const App = () => {
  const formMethods = useForm();
  return (
    <FormProvider {...formMethods}>
      <div className="container py-4">
        <Form formMethods={formMethods} />
      </div>
    </FormProvider>
  )
}

export default App;
