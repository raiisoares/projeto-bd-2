export function salesmanBonusTrigger(): string {
  return `CREATE TRIGGER check_salesman_bonus
          AFTER INSERT ON sale
          FOR EACH ROW
          BEGIN
            DECLARE total_sales DECIMAL(10,2);
            SET total_sales = (
              SELECT SUM(s.amount * p.value)
              FROM sale s
              JOIN product p ON s.id_product = p.id
              WHERE s.id_salesman = NEW.id_salesman
            );
          
            IF total_sales > 1000 THEN
              IF NOT EXISTS (SELECT 1 FROM specialEmployee WHERE id_employee = NEW.id_salesman) THEN
                INSERT INTO specialEmployee (name, sex, age, id_employee, bonus)
                SELECT name, sex, age, id, 0 FROM employee WHERE id = NEW.id_salesman;
              END IF;
          
              UPDATE specialEmployee
              SET bonus = bonus + (NEW.amount * (SELECT value FROM product WHERE id = NEW.id_product) * 0.05)
              WHERE id_employee = NEW.id_salesman;   
            END IF;
          END`
}