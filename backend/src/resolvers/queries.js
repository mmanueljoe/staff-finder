import {Employees as employees} from '../data/employee.js';

export const queries = {
    Query: {
        employee: (_, args) => {
            const { id } = args;
            return employees.find(employee => employee.id === id);
        },
        employees: () => employees,
        searchEmployees: (_, args) => {
            const { query } = args;
            return employees.filter(employee => employee.name.toLowerCase().includes(query.toLowerCase()) || employee.skills.some(skill => skill.toLowerCase().includes(query.toLowerCase())));
        }
    }
}