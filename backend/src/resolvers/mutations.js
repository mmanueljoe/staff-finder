import { Employees as employees } from '../data/employee.js';

export const mutations = {
    Mutation: {
        addEmployee: (_, args) => {
            const newEmployee = {
                id: (employees.length + 1).toString(),
                name: args.name,
                position: args.position,
                department: args.department,
                skills: args.skills,
                email: args.email
            }

            employees.push(newEmployee);
            return newEmployee;
        },

        deleteEmployee: (_, args) => {
            const { id } = args;
            const index = employees.findIndex(employee => employee.id === id);
            if (index === -1) return null;

            const deletedEmployee = employees[index];
            employees.splice(index, 1);
            return deletedEmployee;
        },

        updateEmployee: (_, args) => {
            const { id, name, position, department, skills, email } = args;
            const employee = employees.find(employee => employee.id === id);
            if (!employee) return null;

            if (name !== undefined) employee.name = name;
            if (position !== undefined) employee.position = position;
            if (department !== undefined) employee.department = department;
            if (skills !== undefined) employee.skills = skills;
            if (email !== undefined) employee.email = email;

            return employee;
        }
    }
}