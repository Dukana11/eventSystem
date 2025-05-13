require('dotenv').config();
const express = require('express')
const { db, promisePool } = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");


const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.getConnection((err, connection) => {
    if (err) {
      console.error("DB холболтын алдаа:", err);
      return res.status(500).json({ error: 'Database connection error' });
    }
  });
  
promisePool.getConnection((err, connection) => {
    if (err) {
      console.error("DB холболтын алдаа:", err);
      return res.status(500).json({ error: 'Database connection error' });
    }
  });

app.use(cors({
    // origin: 'http://localhost:3000',
    // credentials: true
}));

const storage = multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });

const upload = multer({ storage });

app.post("/api/upload", upload.single("image"), (req, res) => {
    res.json({ filename: req.file.filename });
  });


app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Event category
app.post("/api/addCategory", (req, res) => {
    const sql = "INSERT INTO event_category (name) VALUES (?)";
    const values = [req.body.name];
    db.query(sql, values, (err, result) => {
        if (err) {
            return res.json({ success: false, message: "Алдаа: " + err });
        }
        return res.json({ success: true, message: "Ангилал амжилттай нэмэгдлээ." });
    });
});

app.get("/api/category", (req, res) => {
    const sql = "SELECT * FROM event_category";
    db.query(sql, (err, result) => {
        if(err) res.json({message: "Server error"});
        return res.json(result);
    });
});

app.put("/api/editCategory/:id", (req, res) => {
    const id = req.params.id;
    const { name } = req.body;

    const sql = "UPDATE event_category SET name = ? WHERE ID = ?";
    db.query(sql, [name, id], (err, result) => {
        if (err) return res.json({ success: false, message: "Серверийн алдаа: " + err });
        return res.json({ success: true, message: "Амжилттай шинэчлэгдлээ" });
    });
});

app.delete("/api/deleteCategory/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM event_category WHERE ID = ?";
    db.query(sql, [id], (err, result) => {
      if (err) return res.json({ success: false, message: "Сервер алдаа" });
      return res.json({ success: true });
    });
  });


//   Event type 
app.get("/api/eventType", (req, res) => {
    const sql = "SELECT * FROM Event_type";
    db.query(sql, (err, result) => {
        if(err) res.json({message: "Server error"});
        return res.json(result);
    });
});

app.post("/api/addEventType", (req, res) => {
    const sql = "INSERT INTO Event_type (name) VALUES (?)";
    const values = [req.body.name];
    db.query(sql, values, (err, result) => {
        if (err) {
            return res.json({ success: false, message: "Алдаа: " + err });
        }
        return res.json({ success: true, message: "Ангилал амжилттай нэмэгдлээ." });
    });
});

app.put("/api/editEventType/:id", (req, res) => {
    const id = req.params.id;
    const { name } = req.body;

    const sql = "UPDATE Event_type SET name = ? WHERE ID = ?";
    db.query(sql, [name, id], (err, result) => {
        if (err) return res.json({ success: false, message: "Серверийн алдаа: " + err });
        return res.json({ success: true, message: "Амжилттай шинэчлэгдлээ" });
    });
});

app.delete("/api/deleteEventType/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM Event_type WHERE ID = ?";
    db.query(sql, [id], (err, result) => {
      if (err) return res.json({ success: false, message: "Сервер алдаа" });
      return res.json({ success: true });
    });
  });

//   Event status 
app.get("/api/eventStatus", (req, res) => {
    const sql = "SELECT * FROM Event_Status";
    db.query(sql, (err, result) => {
        if(err) res.json({message: "Server error"});
        return res.json(result);
    });
});

app.post("/api/addEventStatus", (req, res) => {
    const sql = "INSERT INTO Event_Status (name) VALUES (?)";
    const values = [req.body.name];
    db.query(sql, values, (err, result) => {
        if (err) {
            return res.json({ success: false, message: "Алдаа: " + err });
        }
        return res.json({ success: true, message: "Ангилал амжилттай нэмэгдлээ." });
    });
});

app.put("/api/editEventStatus/:id", (req, res) => {
    const id = req.params.id;
    const { name } = req.body;

    const sql = "UPDATE Event_Status SET name = ? WHERE ID = ?";
    db.query(sql, [name, id], (err, result) => {
        if (err) return res.json({ success: false, message: "Серверийн алдаа: " + err });
        return res.json({ success: true, message: "Амжилттай шинэчлэгдлээ" });
    });
});

app.delete("/api/deleteEventStatus/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM Event_Status WHERE ID = ?";
    db.query(sql, [id], (err, result) => {
      if (err) return res.json({ success: false, message: "Сервер алдаа" });
      return res.json({ success: true });
    });
  });

// Customer 
app.post("/api/addCustomer", (req, res) => {
    const sql = "INSERT INTO Customer (Firstname, Email, PhoneNumber, Password) VALUES (?, ?, ?, ?)";
    const values = [req.body.name, req.body.email, req.body.phone, req.body.password];
    db.query(sql, values, (err, result) => {
        if(err)
            return res.json ({message: "Something unexpected has occured" + err });
        return res.json({
            success: true,
            message: "New user added successfully",
        });
    })
});

app.get("/api/customer", (req, res) => {
    const sql = "SELECT * FROM Customer";
    db.query(sql, (err, result) => {
        if(err) res.json({message: "Server error"});
        return res.json(result);
    });
});

// Orginazer
app.post("/api/addOrginazer", (req, res) => {
    const sql = "INSERT INTO Organizer (Name, Email, RegistrationNumber, Password) VALUES (?, ?, ?, ?)";
    const values = [req.body.companyName, req.body.companyEmail, req.body.register, req.body.companyPassword];
    db.query(sql, values, (err, result) => {
        if(err)
            return res.json ({message: "Something unexpected has occured" + err });
        return res.json({
            success: true,
            message: "New user added successfully",
        });
    })
});

app.get("/api/organizer", (req, res) => {
    const sql = "SELECT * FROM Organizer";
    db.query(sql, (err, result) => {
        if(err) res.json({message: "Server error"});
        return res.json(result);
    });
});

app.get("/api/city", (req, res) => {
    const sql = "SELECT * FROM City";
    db.query(sql, (err, result) => {
        if(err) res.json({message: "Server error"});
        return res.json(result);
    });
});

app.get("/api/district", (req, res) => {
    const sql = "SELECT * FROM District";
    db.query(sql, (err, result) => {
        if(err) res.json({message: "Server error"});
        return res.json(result);
    });
});

app.get("/api/district/id", (req, res) => {
    const { cityId } = req.query;

    if (!cityId) {
        return res.status(400).json({ message: "cityId шаардлагатай." });
    }

    const sql = "SELECT * FROM District WHERE city_id = ?";
    db.query(sql, [cityId], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Server error" });
        }
        return res.json(result);
    });
});

app.get("/api/khoroo", (req, res) => {
    const sql = "SELECT * FROM Khoroo";
    db.query(sql, (err, result) => {
        if(err) res.json({message: "Server error"});
        return res.json(result);
    });
});

app.get("/api/khoroo/id", (req, res) => {
    const { districtID } = req.query;

    if (!districtID) {
        return res.status(400).json({ message: "districtID шаардлагатай." });
    }

    const sql = "SELECT * FROM Khoroo WHERE District_id = ?";
    db.query(sql, [districtID], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Server error" });
        }
        return res.json(result);
    });
});

app.get("/api/organizer", (req, res) => {
    const sql = "SELECT * FROM Event";
    db.query(sql, (err, result) => {
        if(err) res.json({message: "Server error"});
        return res.json(result);
    });
});

// Customer login 
app.post("/api/customerLogin", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Имэйл болон нууц үгээ оруулна уу!" });
    }

    const sql = "SELECT * FROM Customer WHERE email = ? AND password = ?";
    const values = [email, password];

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Серверийн алдаа: " + err });
        }

        if (result.length > 0) {
            const user = result[0];

            const token = jwt.sign(
                {
                    id: user.id,        // Хүснэгтийн дагуу өөрчил
                    role: "customer",
                    name: user.FirstName        // Хэрвээ FirstName гэж нэрлэгдсэн бол
                },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }            // ✅ Зассан
            );

            return res.json({
                message: "Амжилттай нэвтэрлээ.",
                LastName: user.LastName,
                FirstName: user.FirstName,
                Email: user.Email,
                Address: user.Address,
                PhoneNumber: user.PhoneNumber,
                RegistrationNumber: user.RegistrationNumber,
                token: token,
            });

        } else {
            return res.status(401).json({ message: "Имэйл эсвэл нууц үг буруу байна." });
        }
    });
});

app.get("/api/auth/me", (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.json({ role: "user" });
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      return res.json({
        role: decoded.role,
        name: decoded.name,
      });
    } catch (err) {
      return res.status(401).json({ role: "user" });
    }
  });


// Organizer login 
app.post("/api/organizerLogin", (req, res) => {
    const { companyEmail, companyPassword } = req.body;
    if (!companyEmail || !companyPassword) {
        return res.status(400).json({ message: "Имэйл болон нууц үгээ оруулна уу!" });
    }
    const sql = "SELECT * FROM Organizer WHERE email = ? AND password = ?";
    const values = [companyEmail, companyPassword];
    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Серверийн алдаа: " + err });
        }
        if (result.length > 0) {
            const user = result[0];

            const token = jwt.sign({
                id: user.id,
                role: "organizer",
                name: user.Name
            },
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
            );

            return res.json({
                success: "Амжилттай нэвтэрлээ.",
                token,
            });
        } else {
            return res.status(401).json({ message: "Имэйл эсвэл нууц үг буруу байна." });
        }
    });
});

app.post("/api/addEvent", async (req, res) => {
    console.log("== REQ BODY ==");
    console.log(req.body);

    try {
        const {
        title,
        description,
        link,
        image,
        event_type_id,
        event_status_id,
        event_category_id,
        organizer_id,
        location,
        timetable,  // timetable нь олон хугацааны массив байна
        ticket,
        } = req.body;

        // 1) Location нэмэх
        const sqlLocation = ` INSERT INTO Location (Name, City_id, District_id, Khoroo_id, Address) VALUES (?, ?, ?, ?, ?)`;
        const valuesLocation = [
            location.name,
            location.cityId,
            location.districtId,
            location.khorooId,
            location.address,
        ];
        const [locationResult] = await db.execute(sqlLocation, valuesLocation);
        const locationId = locationResult.insertId;

        // 2) Event нэмэх
        const sqlEvent = `INSERT INTO Event (Title, Description, Link, Image, Event_type_id, Event_status_id, Event_category_id, Organizer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        const valuesEvent = [
            title,
            description,
            link,
            image,
            event_type_id,
            event_status_id,
            event_category_id,
            organizer_id,
        ];
        const [eventResult] = await db.execute(sqlEvent, valuesEvent);
        const eventId = eventResult.insertId;

        // 3) Timetable нэмэх (олон удаа)
        for (let i = 0; i < timetable.length; i++) {
            const sqlTimetable = `INSERT INTO Timetable (Date, StartTime, EndTime, Event_id, Location_id) VALUE (?, ?, ?, ?, ?)`;
            const valuesTimetable = [
                timetable[i].date,
                timetable[i].startTime,
                timetable[i].endTime,
                eventId,
                locationId,
            ];
            await db.execute(sqlTimetable, valuesTimetable);
        }

        // 4) Ticket нэмэх (олон удаа)
        for (let i = 0; i < ticket.length; i++) {
            const sqlTicket = ` INSERT INTO Ticket (Type, Price, Quantity, Event_id) VALUES (?, ?, ?, ?)`;
            const valuesTicket = [
                ticket[i].type,
                ticket[i].price,
                ticket[i].quantity,
                eventId,
            ];
            await db.execute(sqlTicket, valuesTicket);
        }

        return res.status(201).json({
            success: true,
            message: "Эвент амжилттай бүртгэгдлээ!",
        });
    } catch (err) {
        console.error("Event insert error:", err);
        return res.status(500).json({
            success: false,
            message: "Дотоод серверийн алдаа: " + err.message,
        });
    }
});
  

//  Event list 
app.get("/api/eventList", async (req, res) => {
    try {
        const [result] = await db.query("SELECT * FROM Event");
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

// Location
app.get("/locationList", (req, res) => {
    const sql = "SELECT * FROM Location";
    db.query(sql, (err, result) => {
        if(err) res.json({message: "Server error"});
        return res.json(result);
    });
});

//  Timetable
app.get("/timetableList", (req, res) => {
    const sql = "SELECT * FROM Timetable";
    db.query(sql, (err, result) => {
        if(err) res.json({message: "Server error"});
        return res.json(result);
    });
});


app.get("/api/events/all", async (req, res) => {
    try {
      const [rows] = await promisePool.query(`
        SELECT 
          e.ID AS eventId,
          e.Title,
          e.Description,
          e.Image,
          tt.Date,
          tt.StartTime,
          tt.EndTime,
          l.Name AS locationName,
          l.Address,
          k.Name AS khorooName,
          d.Name AS districtName,
          c.Name AS cityName,
          t.Type AS ticketType,
          t.Price,
          t.Quantity,
          o.Name as organizerName
        FROM Event e
        JOIN Timetable tt ON e.ID = tt.Event_id
        JOIN Location l ON tt.Location_id = l.ID
        JOIN Khoroo k ON l.Khoroo_id = k.ID
        JOIN District d ON l.District_id = d.ID
        JOIN City c ON l.City_id = c.ID
        JOIN Ticket t ON e.ID = t.Event_id
        JOIN Organizer o ON o.ID = e.Organizer_id
        ORDER BY e.ID DESC
      `);
  
      res.status(200).json(rows);
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ message: "Server error" });
    }
  });


app.get("/api/events", async (req, res) => {
    try {
      const [rows] = await promisePool.query(`
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
      `);
  
      res.status(200).json(rows);
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ message: "Server error" });
    }
  });

app.get("/api/event/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await promisePool.query(`
            SELECT 
                e.ID, 
                e.Title, 
                e.Description, 
                e.Image, 
                o.Name AS organizerName,
                l.Name AS locationName, 
                l.Address, 
                k.Name AS khorooName,
                d.Name AS districtName,
                c.Name AS cityName,

                -- Timetables array
                (
                    SELECT JSON_ARRAYAGG(
                        JSON_OBJECT(
                            'Date', t.Date,
                            'StartTime', t.StartTime,
                            'EndTime', t.EndTime
                        )
                    )
                    FROM Timetable t 
                    WHERE t.Event_id = e.ID
                ) AS Timetables,

                -- Tickets array
                (
                    SELECT JSON_ARRAYAGG(
                        JSON_OBJECT(
                            'Type', tk.Type,
                            'Price', tk.Price,
                            'Quantity', tk.Quantity
                        )
                    )
                    FROM Ticket tk 
                    WHERE tk.Event_id = e.ID
                ) AS Tickets

            FROM Event e
            JOIN Organizer o ON e.Organizer_id = o.ID
            JOIN Timetable t ON e.ID = t.Event_id
            JOIN Location l ON t.Location_id = l.ID
            JOIN Khoroo k ON l.Khoroo_id = k.ID
            JOIN District d ON l.District_id = d.ID
            JOIN City c ON l.City_id = c.ID
            WHERE e.ID = ?
            LIMIT 1
        `, [id]);

        res.json(result[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});



// app.get("/api/event/:id", async (req, res) => {
//     const { id } = req.params;
//     try {
//         // Event basic info
//         const [eventInfo] = await db.query(`
//           SELECT e.ID, e.Title, e.Description, e.Image, o.Name AS organizerName
//           FROM Event e
//           JOIN Organizer o ON e.Organizer_id = o.ID
//           WHERE e.ID = ?
//         `, [id]);
      
//         // Timetable + Location
//         const [timetables] = await db.query(`
//           SELECT t.Date, t.StartTime, t.EndTime, l.Name AS locationName, l.Address
//           FROM Timetable t
//           JOIN Location l ON t.Location_id = l.ID
//           WHERE t.Event_id = ?
//         `, [id]);
      
//         // Tickets
//         const [tickets] = await db.query(`
//           SELECT Type, Price, Quantity
//           FROM Ticket
//           WHERE Event_id = ?
//         `, [id]);
      
//         res.json({
//           ...eventInfo[0],
//           timetables,
//           tickets,
//         });
//       } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Server error" });
//       }
// });
  

app.listen(3001, () => {
    console.log('Listening on port')
})