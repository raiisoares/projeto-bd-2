export function employees() {
  return `
      INSERT INTO empresa.employee(name, age, sex, position, salary, birthdate)
      VALUES ('Ana Silva', 45, 'f', 'ceo', 15000.00, '1979-01-15'),
             ('Bruno Souza', 38, 'm', 'manager', 5000.00, '1986-03-22'),
             ('Carlos Oliveira', 30, 'm', 'salesman', 2000.00, '1994-07-10'),
             ('Daniela Ferreira', 28, 'f', 'salesman', 2000.00, '1996-05-24'),
             ('Eduardo Lima', 25, 'm', 'salesman', 2000.00, '1999-11-18');
  `
}