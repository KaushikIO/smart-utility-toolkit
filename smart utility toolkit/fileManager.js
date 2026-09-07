const fs = require("fs");

const fileName = "./test.txt";

console.log("Starting file manager...");

fs.writeFile(fileName, "Hello from Smart Utility Toolkit!", (err) => {

    if (err) {
        console.log("Error creating file:", err);
        return;
    }

    console.log("File created successfully.");

    fs.readFile(fileName, "utf8", (err, data) => {

        if (err) {
            console.log("Error reading file:", err);
            return;
        }

        console.log("File contents:", data);

        fs.appendFile(fileName, "\nThis is updated content.", (err) => {

            if (err) {
                console.log("Error updating file:", err);
                return;
            }

            console.log("File updated successfully.");

            fs.unlink(fileName, (err) => {

                if (err) {
                    console.log("Error deleting file:", err);
                    return;
                }

                console.log("File deleted successfully.");
            });
        });
    });
});