-- zaawal idewhjuulj bj ajilluulah, ehneesee bugd ajilladag

drop database EventDp;
create database EventDp;
use EventDp;

CREATE TABLE `City` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL
);
INSERT INTO City (Name) VALUES 
('Улаанбаатар'),
('Архангай'),
('Баян-Өлгий'),
('Баянхонгор'),
('Булган'),
('Говь-Алтай'),
('Говьсүмбэр'),
('Дархан'),
('Дорноговь'),
('Дорнод'),
('Дундговь'),
('Завхан'),
('Орхон'),
('Өвөрхангай'),
('Өмнөговь'),
('Сүхбаатар'),
('Сэлэнгэ'),
('Төв'),
('Увс'),
('Ховд'),
('Хөвсгөл'),
('Хэнтий');
select * from City;

CREATE TABLE `District` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `City_id` int NOT NULL,
  FOREIGN KEY (City_id) REFERENCES City(id)
);
INSERT INTO District (Name, City_id) VALUES 
('Багануур', 1),
('Багахангай', 1),
('Баянгол', 1),
('Баянзүрх', 1),
('Налайх', 1),
('Сонгинохайрхан', 1),
('Сүхбаатар', 1),
('Хан-Уул', 1),
('Чингэлтэй', 1);
select * from District;

CREATE TABLE `Khoroo` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `District_id` int NOT NULL,
  FOREIGN KEY (District_id) REFERENCES District(id)
);

-- Багануур дүүрэг
INSERT INTO Khoroo (Name, District_id) VALUES 
('1-р хороо', 1),
('2-р хороо', 1),
('3-р хороо', 1),
('4-р хороо', 1),
('5-р хороо', 1);

-- Багахангай дүүрэг
INSERT INTO Khoroo (Name, District_id) VALUES 
('1-р хороо', 2),
('2-р хороо', 2);

-- Баянгол дүүрэг
INSERT INTO Khoroo (Name, District_id) VALUES 
('1-р хороо', 3),
('2-р хороо', 3),
('3-р хороо', 3),
('4-р хороо', 3),
('5-р хороо', 3),
('6-р хороо', 3),
('7-р хороо', 3),
('8-р хороо', 3),
('9-р хороо', 3),
('10-р хороо', 3),
('11-р хороо', 3),
('12-р хороо', 3),
('13-р хороо', 3),
('14-р хороо', 3),
('15-р хороо', 3),
('16-р хороо', 3),
('17-р хороо', 3),
('18-р хороо', 3),
('19-р хороо', 3),
('20-р хороо', 3),
('21-р хороо', 3),
('22-р хороо', 3),
('23-р хороо', 3);

-- Баянзүрх дүүрэг (District_id = 4)
INSERT INTO Khoroo (Name, District_id) VALUES 
('1-р хороо', 4),
('2-р хороо', 4),
('3-р хороо', 4),
('4-р хороо', 4),
('5-р хороо', 4),
('6-р хороо', 4),
('7-р хороо', 4),
('8-р хороо', 4),
('9-р хороо', 4),
('10-р хороо', 4),
('11-р хороо', 4),
('12-р хороо', 4),
('13-р хороо', 4),
('14-р хороо', 4),
('15-р хороо', 4),
('16-р хороо', 4),
('17-р хороо', 4),
('18-р хороо', 4),
('19-р хороо', 4),
('20-р хороо', 4),
('21-р хороо', 4),
('22-р хороо', 4),
('23-р хороо', 4),
('24-р хороо', 4),
('25-р хороо', 4),
('26-р хороо', 4),
('27-р хороо', 4),
('28-р хороо', 4);

-- Налайх дүүрэг (District_id = 5)
INSERT INTO Khoroo (Name, District_id) VALUES 
('1-р хороо', 5),
('2-р хороо', 5),
('3-р хороо', 5),
('4-р хороо', 5),
('5-р хороо', 5),
('6-р хороо', 5),
('7-р хороо', 5);

-- Сонгинохайрхан дүүрэг (District_id = 6)
INSERT INTO Khoroo (Name, District_id) VALUES
('1-р хороо', 6),
('2-р хороо', 6),
('3-р хороо', 6),
('4-р хороо', 6),
('5-р хороо', 6),
('6-р хороо', 6),
('7-р хороо', 6),
('8-р хороо', 6),
('9-р хороо', 6),
('10-р хороо', 6),
('11-р хороо', 6),
('12-р хороо', 6),
('13-р хороо', 6),
('14-р хороо', 6),
('15-р хороо', 6),
('16-р хороо', 6),
('17-р хороо', 6),
('18-р хороо', 6),
('19-р хороо', 6),
('20-р хороо', 6),
('21-р хороо', 6),
('22-р хороо', 6),
('23-р хороо', 6),
('24-р хороо', 6),
('25-р хороо', 6),
('26-р хороо', 6),
('27-р хороо', 6),
('28-р хороо', 6),
('29-р хороо', 6),
('30-р хороо', 6),
('31-р хороо', 6),
('32-р хороо', 6);

-- Сүхбаатар дүүрэг (District_id = 7)
INSERT INTO Khoroo (Name, District_id) VALUES
('1-р хороо', 7),
('2-р хороо', 7),
('3-р хороо', 7),
('4-р хороо', 7),
('5-р хороо', 7),
('6-р хороо', 7),
('7-р хороо', 7),
('8-р хороо', 7),
('9-р хороо', 7),
('10-р хороо', 7),
('11-р хороо', 7),
('12-р хороо', 7),
('13-р хороо', 7),
('14-р хороо', 7),
('15-р хороо', 7),
('16-р хороо', 7),
('17-р хороо', 7),
('18-р хороо', 7),
('19-р хороо', 7),
('20-р хороо', 7);

-- Хан-Уул дүүрэг (District_id = 8)
INSERT INTO Khoroo (Name, District_id) VALUES
('1-р хороо', 8),
('2-р хороо', 8),
('3-р хороо', 8),
('4-р хороо', 8),
('5-р хороо', 8),
('6-р хороо', 8),
('7-р хороо', 8),
('8-р хороо', 8),
('9-р хороо', 8),
('10-р хороо', 8),
('11-р хороо', 8),
('12-р хороо', 8),
('13-р хороо', 8),
('14-р хороо', 8),
('15-р хороо', 8),
('16-р хороо', 8),
('17-р хороо', 8),
('18-р хороо', 8),
('19-р хороо', 8),
('20-р хороо', 8),
('21-р хороо', 8);

-- Чингэлтэй дүүрэг (District_id = 9)
INSERT INTO Khoroo (Name, District_id) VALUES
('1-р хороо', 9),
('2-р хороо', 9),
('3-р хороо', 9),
('4-р хороо', 9),
('5-р хороо', 9),
('6-р хороо', 9),
('7-р хороо', 9),
('8-р хороо', 9),
('9-р хороо', 9),
('10-р хороо', 9),
('11-р хороо', 9),
('12-р хороо', 9),
('13-р хороо', 9),
('14-р хороо', 9),
('15-р хороо', 9),
('16-р хороо', 9),
('17-р хороо', 9),
('18-р хороо', 9);
select * from Khoroo;


CREATE TABLE `Bank_Type` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL
);
Insert into Bank_Type (Name) values 
('Хасбанк'),
('Төрийн банк'),
('Голомт банк'),
('Хаан банк'),
('Худалдаа хөгжлийн банк'),
('Капитрон банк'),
('Ариг банк');
select * from Bank_Type;


CREATE TABLE `Bank_Account` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `HolderName` varchar(45) NOT NULL,
  `AccountNumber` varchar(20) NOT NULL,
  `Bank_Type_id` int NOT NULL,
  FOREIGN KEY (Bank_Type_id) REFERENCES Bank_Type(id)
);
INSERT INTO Bank_Account (HolderName, AccountNumber, Bank_Type_id) VALUES
('Бат-Эрдэнэ', '123456789012', 1),
('Сараа', '987654321098', 4),
('Ганбаатар', '567890123456', 3),
('Оюунаа', '234567890123', 2),
('Тэмүүжин', '345678901234', 5);
select * from Bank_Account;


CREATE TABLE `Organizer` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Name` varchar(65) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Address` varchar(255),
  `PhoneNumber` INT NULL,
  `RegistrationNumber` varchar(25) NOT NULL,
  `Password` varchar(45) NOT NULL,
  `Bank_Account_id` int NULL,
  `Khoroo_id` int NULL,
  FOREIGN KEY (Bank_Account_id) REFERENCES Bank_Account(id),
  FOREIGN KEY (Khoroo_id) REFERENCES Khoroo(id)
);
select * from Organizer;
INSERT INTO Organizer (Name, Email, Address, PhoneNumber, RegistrationNumber, Password, Bank_Account_id, Khoroo_id) VALUES (
'The Gangbay','gangbay@event.mn','Улаанбаатар хот, Баянзүрх дүүрэг, 26-р хороо, Энхтайвны өргөн чөлөө',
'88112233','AA11111111','Huur@2025',1,1);


CREATE TABLE `Customer` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `LastName` varchar(45),
  `FirstName` varchar(45) NOT NULL,
  `Email` varchar(65) NOT NULL,
  `Address` varchar(255),
  `PhoneNumber` varchar(20) NOT NULL,
  `RegistrationNumber` varchar(25),
  `Password` varchar(45) NOT NULL
);
INSERT INTO Customer (LastName, FirstName, Email, Address, PhoneNumber, RegistrationNumber, Password) VALUES
('Жамбал', 'Нарантуяа', 'narantuya.jambal@example.com', 'Сүхбаатар аймаг, Монгол Улс', '99112233', 'REG12346', 'Securepassword.456'),
('Тамир', 'Ариунбат', 'ariunbat.tamir@example.com', 'Хан-Уул дүүрэг, Улаанбаатар', '99553344', 'REG12347', 'Mypassword@789');
select * from `Customer`;


CREATE TABLE `Event_Type` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL
);
Insert into Event_Type (Name) values 
('Төлбөртэй'),
('Үнэгүй');
select * from Event_Type;


CREATE TABLE Event_Subtype (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    Event_Type_id INT,
    FOREIGN KEY (Event_Type_id) REFERENCES Event_Type(id)
);
Insert into Event_Subtype (Name, Event_Type_id) values 
('Суудалтай',1),
('Суудалгүй',1);
select * from Event_Subtype;


CREATE TABLE `Event_Status` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL
);
Insert into Event_Status (Name) values 
('Шинэ'),
('Дууссан'),
('Хүлээгдэж буй'),
('Буцаагдсан'),
('Цуцлагдсан'),
('Зөвшөөрсөн');
select * from Event_Status;


CREATE TABLE `Event_Category` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL
);
Insert into Event_Category (Name) values 
('Урлаг'),
('Спорт'),
('Бизнес'),
('Боловсрол'),
('Шинжлэх ухаан'),
('Технологи'),
('Эрүүл мэнд'),
('Сайн дурын'),
('Шоу тоглолт'),
('Бусад');
select * from Event_Category;


CREATE TABLE `Event` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Title` varchar(100) NOT NULL,
  `Description` varchar(1000) NOT NULL,
  `Link` varchar(255),
  `Image` varchar(455) NOT NULL,
  `Event_type_id` int NOT NULL,
  `Event_subtype_id` int NULL,
  `Event_status_id` int NOT NULL,
  `Event_category_id` int NOT NULL,
  `Organizer_id` int NOT NULL,
  FOREIGN KEY (Event_type_id) REFERENCES Event_type(id),
  FOREIGN KEY (Event_subtype_id) REFERENCES Event_subtype(id),
  FOREIGN KEY (Event_status_id) REFERENCES Event_status(id),
  FOREIGN KEY (Event_category_id) REFERENCES Event_category(id),
  FOREIGN KEY (Organizer_id) REFERENCES Organizer(id)
);
select * from Event;
INSERT INTO Event (
  Title, Description, Link, Image, Event_type_id, Event_subtype_id, Event_status_id, 
  Event_category_id, Organizer_id
) VALUES (
  'VIP Morin Khuur surgalt',
  'Та өөрийн ажлын байрандаа өөртөө тохирох өдөр, цагийн сонголтоор бодит үр дүнтэй суралцаарай.',
  '',
  'morin_khuur.png',
  1,2, 1, 1, 1
);
INSERT INTO Event (
  Title, Description, Link, Image, Event_type_id, Event_subtype_id, Event_status_id, 
  Event_category_id, Organizer_id
) VALUES (
  'GUYS СУРГУУЛЬ МИНЬ БАЯРТАЙ',
  'Сүүлчийн цас, анхны бороо ч орж магадгүй тэр л өдөр төгсөлтийн баяр, анд нөхдийн уулзалтуудтай зэрэгцээд GUYS нь анхны задгай талбайн бие даасан бүрэн хэмжээний тоглолтоо хүргэхэд бэлэн боллоо.
28-н жилд хийж бүтээсэн бүхнээ бид үзүүлье та бүхэн минь хамтдаа дурсамжаараа аз жаргалтайгаар аялаарай …

 

GUYS СУРГУУЛЬ МИНЬ БАЯРТАЙ

Хөтөлбөр: GUYS хамтлагийн бүх цаг үеийн супер хит 35-н дуу амьд хөгжмийн найруулга, тусгайлан бэлдсэн үзүүлбэртэйгээр хүрнэ.

VIP: Тусгайлан бэлдсэн хэсэгт сууж үзэх боломжтой.
-VIP Table
-Finger foods
-Soft drinks
-Welcoming drinks
-Vip service
-We have a special surprise for you!

Хаалга нээгдэх: 15:00
Хөтөлбөр эхлэх: 19:00
Хөтөлбөр дуусах: 23:30

📅Хэзээ? 2025.05.31
📍Хаана? SocialPay Park (https://shorturl.at/e9xLb)
📞Холбогдох утас: 72726262

Тасалбар буцаах болон өөрчлөх боломжгүй тул та сонголтоо зөв хийнэ үү.',
  '',
  'guys.jpg',
  1,2, 1, 9, 3
);

SELECT 
  E.ID,
  E.Title,
  E.Description,
  E.Link,
  E.Image,
  ET.Name AS Event_Type,
  ES.Name AS Event_Status,
  EC.Name AS Event_Category,
  O.Name AS Organizer,
  EST.Name AS Event_Subtype
FROM 
  `Event` E
JOIN 
  `Event_type` ET ON E.Event_type_id = ET.ID
JOIN 
  `Event_subtype` EST ON E.Event_subtype_id = EST.id
JOIN 
  `Event_status` ES ON E.Event_status_id = ES.ID
JOIN 
  `Event_category` EC ON E.Event_category_id = EC.ID
JOIN 
  `Organizer` O ON E.Organizer_id = O.ID;


CREATE TABLE `Location` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `City_id` int NOT NULL,
  `District_id` int NOT NULL,
  `Khoroo_id` int NOT NULL,
  `Address` varchar(255) NULL,
  FOREIGN KEY (City_id) REFERENCES City(id),
  FOREIGN KEY (District_id) REFERENCES District(id),
  FOREIGN KEY (Khoroo_id) REFERENCES Khoroo(id)
);
insert into Location (Name, City_id, District_id, Khoroo_id, Address) values 
('Оффис', 1, 4, 33, "");
insert into Location (Name, City_id, District_id, Khoroo_id, Address) values 
('Socialpay Park', 1, 7, 98, "");
select * from Location;


CREATE TABLE `Timetable` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Date` date NOT NULL,
  `StartTime` varchar(25) NOT NULL,
  `EndTime` varchar(25) NOT NULL,
  `Event_id` int NOT NULL,
  `Location_id` int NOT NULL,
  FOREIGN KEY (Event_id) REFERENCES Event(id),
  FOREIGN KEY (Location_id) REFERENCES Location(id)
);
INSERT INTO Timetable (Date, StartTime, EndTime, Event_id, Location_id) 
VALUES 
('2025-01-24', '18:00:00', '20:00:00', 1, 1),
('2026-01-23', '18:00:00', '20:00:00', 1, 1);
INSERT INTO Timetable (Date, StartTime, EndTime, Event_id, Location_id) 
VALUES 
('2025-05-31', '16:00:00', '22:00:00', 2, 2);
select * from Timetable;
SHOW CREATE TABLE `Timetable`;

CREATE TABLE `Seat_Type` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL
);
INSERT INTO Seat_Type (Name) VALUES 
('Энгийн'),
('VIP');
select * from Seat_Type;

CREATE TABLE `Ticket` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Type` varchar(45) NOT NULL,
  `Price` varchar(45) NOT NULL,
  `Quantity` integer NOT NULL,
  `Event_id` int NOT NULL,
  FOREIGN KEY (Event_id) REFERENCES Event(id)
);
INSERT INTO Ticket (Type, Price, Quantity, Event_id) VALUES 
('Энгийн', 50000, 10, 1),
('VIP', 100000, 10, 1);

INSERT INTO Ticket (Type, Price, Quantity, Event_id) VALUES 
('Энгийн тасалбар', 78000, 10, 2),
('VIP тасалбар', 208000, 10, 2),
('FANZONE тасалбар', 500000, 10, 2);
select * from Ticket;


CREATE TABLE `Seat` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Row` varchar(10) NOT NULL,
  `Number` varchar(10) NOT NULL,
  `Location_id` int NOT NULL,
  `Seat_Type_id` int NOT NULL,
  FOREIGN KEY (Location_id) REFERENCES Location(id),
  FOREIGN KEY (Seat_Type_id) REFERENCES Seat_Type(id)
);
INSERT INTO Seat (`Row`, `Number`, `Location_id`, `Seat_Type_id`) VALUES 
('A', '1', 1, 1),
('A', '2', 1, 1),
('A', '3', 1, 2),
('B', '1', 1, 1),
('B', '2', 1, 2);
select * from Seat;

CREATE TABLE `Price` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Price` decimal(10,2) NOT NULL,
  `Timetable_id` int NOT NULL,
  `Seat_Type_id` int NOT NULL,
  FOREIGN KEY (Timetable_id) REFERENCES Timetable(id),
  FOREIGN KEY (Seat_Type_id) REFERENCES Seat_Type(id)
);
INSERT INTO Price (`Price`, `Timetable_id`, `Seat_Type_id`) VALUES 
(15000.00, 1, 1),  -- Regular
(25000.00, 1, 2);  -- VIP
select * from Price;


CREATE TABLE `Discount` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `DiscountValue` decimal(10,2)
);
INSERT INTO Discount (Name, DiscountValue) VALUES 
('Мэдэхгүй', 10.00),
('Урамшуулал', 20.00);
select * from discount;

CREATE TABLE `Order` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `OrderDate` datetime NOT NULL,
  `Timetable_id` int NOT NULL,
  `Customer_id` int NOT NULL,
  `Discount_id` int NOT NULL,
  FOREIGN KEY (Timetable_id) REFERENCES Timetable(id),
  FOREIGN KEY (Customer_id) REFERENCES Customer(id),
  FOREIGN KEY (Discount_id) REFERENCES Discount(id)
);
INSERT INTO `Order` (OrderDate, Timetable_id, Customer_id, Discount_id) VALUES 
(NOW(), 2, 1, 1);
select * from `order`;


CREATE TABLE `Seat_Reservation` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Seat_id` int NOT NULL,
  `Price_id` int NOT NULL,
  `Order_id` int NOT NULL,
  FOREIGN KEY (Seat_id) REFERENCES Seat(id),
  FOREIGN KEY (Price_id) REFERENCES Price(id),
  FOREIGN KEY (Order_id) REFERENCES `Order`(id)
);
INSERT INTO Seat_Reservation (`Seat_id`, `Price_id`, `Order_id`) VALUES 
(1, 5, 1),
(2, 5, 1);


CREATE TABLE `Order_Status_Reference` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL
);
INSERT INTO Order_Status_Reference (Name) VALUES 
('Шинэ'),
('Төлөгдсөн'),
('Цуцлагдсан');
select * from Order_Status_Reference;


CREATE TABLE `Order_Status` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Description` varchar(255),
  `OrderStatusDate` datetime NOT NULL,
  `Order_id` int NOT NULL,
  `Order_Status_Reference_id` int NOT NULL,
  FOREIGN KEY (Order_id) REFERENCES `Order`(id),
  FOREIGN KEY (Order_Status_Reference_id) REFERENCES Order_Status_Reference(id)
);
INSERT INTO Order_Status (Description, OrderStatusDate, Order_id, Order_Status_Reference_id) VALUES 
('Захиалга үүссэн', NOW(), 1, 1);


CREATE TABLE `Payment_Type` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL
);
INSERT INTO Payment_Type (Name) VALUES 
('QPay'),
('Интернэт банк');
select * from Payment_Type;

CREATE TABLE `Payment` (
  `ID` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `Amount` decimal(10,2) NOT NULL,
  `PaymentDate` datetime NOT NULL,
  `Order_id` int NOT NULL,
  `PaymentType_id` int NOT NULL,
  FOREIGN KEY (Order_id) REFERENCES `Order`(id),
  FOREIGN KEY (PaymentType_id) REFERENCES Payment_Type(id)
);
INSERT INTO Payment (Amount, PaymentDate, Order_id, PaymentType_id) VALUES 
(30000.00, NOW(), 1, 1);
select * from Payment;

SELECT 
  e.ID AS eventId,
  e.Title,
  e.Description,
  e.Image AS imageSrc,
  tt.Date,
  tt.StartTime,
  tt.EndTime,
  l.Name AS locationName,
  l.Address,
  k.Name AS KhorooName,
  d.Name AS DistrictName,
  c.Name AS CityName,
  t.Type AS ticketType,
  t.Price,
  t.Quantity,
  o.NAME as OrganizerName
FROM Event e
JOIN Timetable tt ON e.ID = tt.Event_id
JOIN Location l ON tt.Location_id = l.ID
JOIN Khoroo k ON l.Khoroo_id = k.ID
JOIN District d ON l.District_id = d.ID
JOIN City c ON l.City_id = c.ID
JOIN Ticket t ON e.ID = t.Event_id
JOIN Organizer o ON o.ID = e.Organizer_id
ORDER BY e.ID DESC;


SELECT 
  e.ID AS eventId,
  e.Title,
  e.Description,
  e.Image,
  MIN(tt.Date) AS Date,
  MIN(t.Price) AS Price,
  l.Name AS locationName,
  o.Name AS organizerName
FROM Event e
JOIN Timetable tt ON e.ID = tt.Event_id
JOIN Ticket t ON e.ID = t.Event_id
JOIN Location l ON tt.Location_id = l.ID
JOIN Organizer o ON e.Organizer_id = o.ID
GROUP BY e.ID, e.Title, e.Description, e.Image, l.Name, o.Name;






