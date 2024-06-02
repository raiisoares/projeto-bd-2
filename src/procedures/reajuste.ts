export function reajuste() {
  return `

    CREATE PROCEDURE AdjustSalary(IN percentage DECIMAL(5,2), IN category VARCHAR(50))
    BEGIN
        DECLARE done BOOLEAN DEFAULT FALSE;
        
        -- Check if the category exists
        DECLARE categoryExists INT DEFAULT 0;
        SELECT COUNT(*) INTO categoryExists FROM employees WHERE category = category;
        
        IF categoryExists > 0 THEN
            
            -- Update salary for employees in the category
            UPDATE employees SET salary = salary * (1 + percentage / 100) WHERE category = category;
            SET done = TRUE;
        
        ELSE
            SET done = FALSE;
        
        END IF;
        
        -- Return completion indicator
        SELECT done;
      END;`
}
