import express from 'express';
import camelcase from 'camelcase';
import path from 'path';

const app = express();

// Define routes and middleware here
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'/index.html'));
})
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

