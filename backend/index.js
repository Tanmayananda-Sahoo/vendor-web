import {app} from './app.js';
import {connectDB} from './db/index.db.js';

connectDB()
.then(() => {
    app.listen(8000, () => {
        console.log('App is running on port 8000');
    })
})
.catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1); // Exit the process with failure
})
