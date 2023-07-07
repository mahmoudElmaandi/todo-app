import { createServer } from "./server.js"
import confing from "../confing.js";

(async () => {
    const app = await createServer(confing);
    app.listen(confing.port, () => {
        console.log(`listening on port ${confing.port} at http://localhost:${confing.port}`)
    });
})();
