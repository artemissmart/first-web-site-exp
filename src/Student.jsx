//props/arg is a javascript object 
import PropTypes from "prop-types"


function Student(props){

    return(
        <div className="info">

            <p>Name: {props.name} </p>
            <p>Location: {props.location}</p>
            <p>Age: {props.age}</p>
            <p>Job: {props.job}</p>
            <p>Student: {props.isStudent ? "Yes, still studying" : "No, already working"} </p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    location: PropTypes.string,
    age: PropTypes.number,
    job: PropTypes.string,
    isStudent: PropTypes.bool,
}






export default Student  