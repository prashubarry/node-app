import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:5000/api/v1/employee";

class EmployeeService {
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeId(employeId){
        return axios.get(EMPLOYEE_API_BASE_URL+'/'+employeId);
    }
}

export default new EmployeeService()