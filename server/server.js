// server.js

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(cors({ origin: "https://www.maassociates.co.ke" })); // Add this line to enable CORS
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.post("/send-email", (req, res) => {
  const { name, email, phone, message } = req.body;

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kimwambua96@gmail.com",
      pass: "gfje qycj qzdq uuvz",
    },
  });

  // send mail with defined transport object
  transporter.sendMail(
    {
      from: "info@maassociates.co.ke", // sender address
      to: ["kimwambua96@gmail.com", "info@maassociates.co.ke"], // list of receivers
      subject: "New Contact Form Submission", // Subject line
      html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `, // html body
    },
    (error, info) => {
      if (error) {
        console.log("Error occurred:", error);
        res
          .status(500)
          .json({ success: false, message: "Failed to send email" });
      } else {
        console.log("Email sent:", info.response);
        res
          .status(200)
          .json({ success: true, message: "Email sent successfully" });
      }
    }
  );
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
