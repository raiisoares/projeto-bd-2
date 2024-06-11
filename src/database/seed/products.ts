export function products() {
  return `
      INSERT INTO empresa.product(name, quantity, description, value)
      VALUES ('CPU Intel Core i7', 10, 'Processador Intel Core i7 de última geração', 350.00),
             ('Motherboard ASUS ROG', 5, 'Placa-mãe ASUS ROG para gamers', 200.00),
             ('RAM 16GB DDR4', 20, 'Memória RAM DDR4 de 16GB para alto desempenho', 80.00),
             ('SSD 1TB Samsung', 15, 'SSD Samsung de 1TB para armazenamento rápido', 150.00),
             ('GPU NVIDIA RTX 3080', 8, 'Placa de vídeo NVIDIA RTX 3080 para gráficos intensivos', 700.00),
             ('Fonte Corsair 750W', 12, 'Fonte de alimentação Corsair de 750W', 100.00),
             ('Gabinete NZXT H510', 7, 'Gabinete NZXT H510 com design moderno', 90.00),
             ('Cooler Master Hyper 212', 25, 'Cooler Master Hyper 212 para refrigeração de CPU', 35.00),
             ('Teclado Mecânico Razer', 10, 'Teclado mecânico Razer com iluminação RGB', 120.00),
             ('Mouse Logitech G502', 18, 'Mouse Logitech G502 para jogos', 50.00),
             ('Monitor Dell 27"', 5, 'Monitor Dell de 27 polegadas 4K', 300.00),
             ('HD Externo Seagate 2TB', 10, 'HD Externo Seagate de 2TB para backup', 70.00),
             ('Fone de Ouvido HyperX', 15, 'Fone de ouvido HyperX com som surround', 80.00),
             ('Webcam Logitech C920', 12, 'Webcam Logitech C920 para videochamadas', 60.00),
             ('Impressora HP LaserJet', 6, 'Impressora HP LaserJet de alta qualidade', 150.00),
             ('Roteador TP-Link Archer', 20, 'Roteador TP-Link Archer com Wi-Fi 6', 120.00),
             ('Pendrive Kingston 64GB', 30, 'Pendrive Kingston de 64GB USB 3.0', 15.00),
             ('Ventoinha Cooler Master', 40, 'Ventoinha Cooler Master para gabinete', 10.00),
             ('Hub USB Anker 4 portas', 25, 'Hub USB Anker com 4 portas USB 3.0', 25.00),
             ('Adaptador Wi-Fi TP-Link', 22, 'Adaptador Wi-Fi TP-Link para conexão sem fio', 20.00);
  `
}