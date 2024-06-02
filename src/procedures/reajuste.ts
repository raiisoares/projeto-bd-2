export function reajuste() {
  return `

CREATE PROCEDURE Reajuste(IN percentual DECIMAL(5,2), IN categoria VARCHAR(50))
BEGIN
    DECLARE done BOOLEAN DEFAULT FALSE;
    
    -- Verificar se a categoria existe
    DECLARE categoryExists INT DEFAULT 0;
    SELECT COUNT(*) INTO categoryExists FROM employees WHERE category = categoria;
    
    IF categoryExists > 0 THEN
        -- Atualizar salário dos funcionários da categoria
        UPDATE employees SET salary = salary * (1 + percentual / 100) WHERE category = categoria;
        SET done = TRUE;
    ELSE
        SET done = FALSE;
    END IF;
    
    -- Retornar indicador de conclusão
    SELECT done;
END;`
}
