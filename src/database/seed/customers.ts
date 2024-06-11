export function customers() {
  return `
      INSERT INTO customer(name, sex, age, birthdate)
      VALUES ('Maria Silva', 'f', 45, '1979-01-15'),
             ('Ana Souza', 'f', 38, '1986-03-22'),
             ('Francisca Oliveira', 'f', 30, '1994-07-10'),
             ('Antônia Ferreira', 'f', 28, '1996-05-24'),
             ('Adriana Lima', 'f', 25, '1999-11-18'),
             ('Juliana Castro', 'f', 34, '1990-12-01'),
             ('Marcia Almeida', 'f', 40, '1984-06-15'),
             ('Fernanda Martins', 'f', 27, '1997-04-23'),
             ('Patricia Ribeiro', 'f', 31, '1993-09-30'),
             ('Aline Santos', 'f', 22, '2002-11-12'),
             ('Sandra Mendes', 'f', 37, '1987-08-19'),
             ('Camila Rodrigues', 'f', 29, '1995-02-07'),
             ('Amanda Pinto', 'f', 26, '1998-05-14'),
             ('Bruna Lopes', 'f', 33, '1991-10-05'),
             ('Julia Cardoso', 'f', 39, '1985-11-22'),
             ('Luciana Almeida', 'f', 35, '1989-03-11'),
             ('Vanessa Costa', 'f', 28, '1996-01-09'),
             ('Letícia Souza', 'f', 32, '1992-08-25'),
             ('Mariana Carvalho', 'f', 36, '1988-04-28'),
             ('Gabriela Lima', 'f', 24, '2000-12-15'),
             ('Renata Barros', 'f', 41, '1983-05-17'),
             ('Letícia Ferreira', 'f', 27, '1997-02-14'),
             ('Paula Gomes', 'f', 29, '1995-11-08'),
             ('Claudia Batista', 'f', 30, '1994-03-27'),
             ('Beatriz Monteiro', 'f', 38, '1986-07-20'),
             ('Simone Fernandes', 'f', 25, '1999-06-11'),
             ('Mariana Costa', 'f', 33, '1991-01-25'),
             ('Elaine Machado', 'f', 37, '1987-12-03'),
             ('Marcela Silva', 'f', 40, '1984-04-09'),
             ('Amanda Pereira', 'f', 28, '1996-09-14'),
             ('Eduarda Lima', 'f', 26, '1998-07-22'),
             ('Isabela Fernandes', 'f', 32, '1992-06-30'),
             ('Bárbara Cardoso', 'f', 24, '2000-04-07'),
             ('Larissa Santos', 'f', 31, '1993-08-10'),
             ('Adriana Oliveira', 'f', 30, '1994-02-25'),
             ('Juliana Mendes', 'f', 29, '1995-01-21'),
             ('Gabriela Costa', 'f', 28, '1996-06-13'),
             ('Patricia Almeida', 'f', 36, '1988-02-12'),
             ('Aline Souza', 'f', 39, '1985-09-19'),
             ('Viviane Batista', 'f', 27, '1997-05-30'),
             ('Daniele Monteiro', 'f', 25, '1999-10-08'),
             ('Renata Fernandes', 'f', 41, '1983-01-18'),
             ('Cintia Gomes', 'f', 29, '1995-03-12'),
             ('Tatiane Pereira', 'f', 37, '1987-11-24'),
             ('Suzana Carvalho', 'f', 38, '1986-08-16'),
             ('Marina Cardoso', 'f', 34, '1990-12-06'),
             ('Natalia Santos', 'f', 23, '2001-05-29'),
             ('Tatiane Machado', 'f', 26, '1998-04-02'),
             ('Roberta Ribeiro', 'f', 32, '1992-01-17'),
             ('Karina Almeida', 'f', 35, '1989-10-04'),
             ('Bianca Souza', 'f', 27, '1997-08-12'),
             ('Jéssica Gomes', 'f', 31, '1993-06-27'),
             ('Thais Oliveira', 'f', 30, '1994-09-08'),
             ('Alessandra Silva', 'f', 29, '1995-12-15'),
             ('Cláudia Costa', 'f', 33, '1991-07-05'),
             ('Érica Santos', 'f', 34, '1990-02-22'),
             ('Patricia Pereira', 'f', 26, '1998-10-13'),
             ('Regina Barros', 'f', 28, '1996-11-25'),
             ('Vanessa Monteiro', 'f', 35, '1989-04-09'),
             ('Bruno Silva', 'm', 45, '1979-01-15'),
             ('José Souza', 'm', 38, '1986-03-22'),
             ('João Oliveira', 'm', 30, '1994-07-10'),
             ('Carlos Ferreira', 'm', 28, '1996-05-24'),
             ('Francisco Lima', 'm', 25, '1999-11-18'),
             ('Lucas Castro', 'm', 34, '1990-12-01'),
             ('Daniel Almeida', 'm', 40, '1984-06-15'),
             ('Ricardo Martins', 'm', 27, '1997-04-23'),
             ('Thiago Ribeiro', 'm', 31, '1993-09-30'),
             ('Gabriel Santos', 'm', 22, '2002-11-12'),
             ('Leonardo Mendes', 'm', 37, '1987-08-19'),
             ('Vinícius Rodrigues', 'm', 29, '1995-02-07'),
             ('Matheus Pinto', 'm', 26, '1998-05-14'),
             ('Gustavo Lopes', 'm', 33, '1991-10-05'),
             ('Pedro Cardoso', 'm', 39, '1985-11-22'),
             ('Rafael Almeida', 'm', 35, '1989-03-11'),
             ('André Costa', 'm', 28, '1996-01-09'),
             ('Fábio Souza', 'm', 32, '1992-08-25'),
             ('Vitor Carvalho', 'm', 36, '1988-04-28'),
             ('Henrique Lima', 'm', 24, '2000-12-15'),
             ('Roberto Barros', 'm', 41, '1983-05-17'),
             ('Guilherme Ferreira', 'm', 27, '1997-02-14'),
             ('Eduardo Gomes', 'm', 29, '1995-11-08'),
             ('Jorge Batista', 'm', 30, '1994-03-27'),
             ('Fernando Monteiro', 'm', 38, '1986-07-20'),
             ('Bruno Fernandes', 'm', 25, '1999-06-11'),
             ('Luan Costa', 'm', 33, '1991-01-25'),
             ('Murilo Machado', 'm', 37, '1987-12-03'),
             ('Matheus Silva', 'm', 40, '1984-04-09'),
             ('Felipe Pereira', 'm', 28, '1996-09-14'),
             ('Carlos Lima', 'm', 26, '1998-07-22'),
             ('Gabriel Barros', 'm', 35, '1989-05-18'),
             ('Rafael Ribeiro', 'm', 34, '1990-03-29'),
             ('Lucas Castro', 'm', 27, '1997-11-05'),
             ('Murilo Fernandes', 'm', 32, '1992-06-30'),
             ('Júlio Santos', 'm', 24, '2000-04-07'),
             ('Henrique Mendes', 'm', 31, '1993-08-10'),
             ('Caio Oliveira', 'm', 30, '1994-02-25'),
             ('Fábio Pereira', 'm', 29, '1995-01-21'),
             ('Marcelo Costa', 'm', 28, '1996-06-13'),
             ('Gustavo Almeida', 'm', 36, '1988-02-12');
  `
}