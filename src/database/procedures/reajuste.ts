export function reajuste() {
  return `

    CREATE PROCEDURE AdjustSalary(IN percentage DECIMAL(5,2), IN position VARCHAR(50))
    BEGIN
        DECLARE done BOOLEAN DEFAULT FALSE;
        
        -- Check if the position exists
        DECLARE categoryExists INT DEFAULT 0;
        
        SELECT COUNT(*) INTO categoryExists FROM employee WHERE position = position;
        
        IF categoryExists > 0 THEN
            
            -- Update salary for employee in the category
            UPDATE employee SET salary = salary * (1 + percentage / 100) WHERE position = position;
            SET done = TRUE;
        
        ELSE
            SET done = FALSE;
        
        END IF;
        
        -- Return completion indicator
        SELECT done;
      END;`
}
