import React from 'react';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import EmployeeService from '../services/EmployeeService';


class Tables extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            employees: []
        }
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees:res.data});
        });
    }

    render(){
        return(
        <div>
            <TableContainer
                style = {{width:"80%", margin: "0 10px"}}
            >
                <Table style = {{minWidth: 600}}>
                    <TableHead>
                        <TableRow>
                            <TableCell align = "center">Person</TableCell>
                            <TableCell align = "center">Group</TableCell>
                            <TableCell align = "center">Age</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.state.employees.map(
                                employee => (
                                    <TableRow key = {employee.id}>
                                        <TableCell align = "center">{employee.person}</TableCell>
                                        <TableCell align = "center">{employee.group}</TableCell>
                                        <TableCell align = "center">{employee.age}</TableCell>
                                    </TableRow>
                                )
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
            
        )
    }
}

export default Tables;