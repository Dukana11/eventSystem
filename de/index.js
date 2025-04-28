const express = require('express')
const db = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    // origin: 'http://localhost:3000',
    // credentials: true
}));

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

app.get("/api/khoroo", (req, res) => {
    const sql = "SELECT * FROM Khoroo";
    db.query(sql, (err, result) => {
        if(err) res.json({message: "Server error"});
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

            // Token үүсгэх
            const token = jwt.sign(
                { id: user.id, email: user.email }, // Payload
                process.env.SECRET_KEY,             // Нууц түлхүүр
                { expiresIn: "1h" }                 // Токены хүчинтэй хугацаа
            );

            return res.json({
                success: "Амжилттай нэвтэрлээ.",
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                },
                token // Токен буцаана
            });
        } else {
            return res.status(401).json({ message: "Имэйл эсвэл нууц үг буруу байна." });
        }
    });
});


// POST /api/events
app.post('/api/events', async (req, res) => {
  const { location, event, timetable, tickets } = req.body;

  const connection = await db.getConnection();
  await connection.beginTransaction();

  try {
    // 1. Location оруулах
    const [locationResult] = await connection.query(
      'INSERT INTO Location (Name, Address, Khoroo_id) VALUES (?, ?, ?)',
      [location.name, location.address, location.khoroo_id]
    );
    const locationId = locationResult.insertId;

    // 2. Event оруулах
    const [eventResult] = await connection.query(
      'INSERT INTO Event (Title, Description, Link, Image, Event_type_id, Event_status_id, Event_category_id, Organizer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [
        event.title,
        event.description,
        event.link,
        event.image,
        event.event_type_id,
        event.event_status_id,
        event.event_category_id,
        event.organizer_id
      ]
    );
    const eventId = eventResult.insertId;

    // 3. Timetable оруулах
    await connection.query(
      'INSERT INTO Timetable (Date, StartTime, EndTime, Event_id, Hall_id) VALUES (?, ?, ?, ?, ?)',
      [
        timetable.date,
        timetable.startTime,
        timetable.endTime,
        eventId,
        timetable.hall_id
      ]
    );

    // 4. Tickets оруулах
    for (const ticket of tickets) {
      await connection.query(
        'INSERT INTO Ticket (Type, Price, Quantity, Event_id) VALUES (?, ?, ?, ?)',
        [
          ticket.type,
          ticket.price,
          ticket.quantity,
          eventId
        ]
      );
    }

    await connection.commit();
    res.status(201).json({ message: 'Амжилттай хадгаллаа!' });

  } catch (error) {
    await connection.rollback();
    console.error(error);
    res.status(500).json({ error: 'Өгөгдөл хадгалах явцад алдаа гарлаа!' });
  } finally {
    connection.release();
  }
});


app.get('/api/event-title', (req, res) => {
    db.query('SELECT title FROM Event WHERE id = 2', (error, results) => {
      if (error) {
        console.error('Database error:', error);
        return res.status(500).json({ error: 'Server error' });
      }
      if (results.length > 0) {
        res.json({ title: results[0].title }); // амжилттай олсон тохиолдолд
      } else {
        res.status(404).json({ error: 'Event not found' }); // олдсонгүй бол
      }
    });
  });


app.listen(3001, () => {
    console.log('Listening on port')
})