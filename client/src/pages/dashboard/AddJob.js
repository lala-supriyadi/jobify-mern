import { FormRow, Alert, FormRowSelect } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddJob = () => {
  const {
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      displayAlert();
      return
    }
    // console.log('create job');
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
  };

  const handleJobInput = (e) => {
    handleChange({ 
      name: e.target.name, 
      value: e.target.value,
    })
  };

  return(
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        { showAlert && <Alert />}
        <div className="form-center">
            { /* position */ }
            <FormRow 
              type="text" 
              name="position" 
              value={position} 
              handleChange={ handleJobInput } 
            />
            { /* company */ }
            <FormRow 
              type="text" 
              name="company" 
              value={company} 
              handleChange={ handleJobInput } 
            />
            { /* location */ }
            <FormRow 
              type="text" 
              labelText="location"
              name="jobLocation" 
              value={jobLocation} 
              handleChange={ handleJobInput } 
            />
            { /* job status */ }
            <FormRowSelect 
              name='status'
              value={status}
              handleChange={handleJobInput}
              list={statusOptions}
            />
            { /* job type */ }
            <FormRowSelect 
              labelText='type'
              name='jobType'
              value={jobType}
              handleChange={handleJobInput}
              list={jobTypeOptions}
            />

            <div className="btn-container">
              <button className="btn btn-block" type="submit" onClick={handleSubmit}>
                submit
              </button>
              <button 
                className="btn btn-block clear-btn" 
                onClick={(e) => { 
                  // e.preventDefault();
                  clearValues();                   
                  // console.log('default');
                }}
              >
                clear
              </button>
            </div>          
          </div>
      </form>
    </Wrapper>
  );
};

export default AddJob