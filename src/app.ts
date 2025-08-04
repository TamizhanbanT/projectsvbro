import express from 'express';

import classRoutes from "./routes/class.route";
import profileRoutes from './routes/profile.route';
import roleRoutes from './routes/role.route';
import profileRoleRoutes from './routes/profileRole.route';
import studentRoutes from './routes/student.routes';
import mentorRoutes from './routes/mentor.routes'

const port =3000
const app=express();
app.use(express.json());



app.use("/api/class", classRoutes);
app.use("/api/profiles", profileRoutes)
app.use("/api/roles",roleRoutes)
app.use("/api/profileRoles",profileRoleRoutes)
app.use("/api/students",studentRoutes)
app.use("/api/mentors",mentorRoutes)

app.listen(port , ()=>{
    console.log(`server running on port ${port}` )
})