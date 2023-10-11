-- Insert data into the 'department' table
INSERT INTO department (name) VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

-- Insert data into the 'role' table
INSERT INTO role (title, salary, department_id) VALUES
    ('Sales Lead', 100000.00, 1),
    ('Salesperson', 80000.00, 1),
    ('Lead Engineer', 150000.00, 2),
    ('Software Engineer', 120000.00, 2),
    ('Accountant', 125000.00, 3),
    ('Legal Team Lead', 250000.00, 4),
    ('Lawyer', 190000.00, 4);

-- Insert data into the 'employee' table
INSERT INTO employee (first_name, last_name, role_id) VALUES
    ('John', 'Doe', 1),        
    ('Mike', 'Chan', 1),       
    ('Ashley', 'Rodriguez', 1),
    ('Kevin', 'Tupik', 2),     
    ('Malia', 'Brown', 2),     
    ('Sarah', 'Lourd', 3),     
    ('Tom', 'Allen', 3),       
    ('Tina', 'Lee', 4),        
    ('Mark', 'Taylor', 4),     
    ('John', 'Doe', 4);        



