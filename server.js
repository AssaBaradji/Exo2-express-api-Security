import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";

const app = express();

t;
app.use(helmet());

const corsOptions = {
  origin: "http://example.com",
  methods: "GET",
};
app.use(cors(corsOptions));

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: "Trop de requêtes, veuillez réessayer plus tard.",
});
app.use(limiter);

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello world" });
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
