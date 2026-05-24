const http = require("http");
const fs = require("fs");
const path = require("path");

const options = { hostname: "localhost", port: 3000, path: "/", method: "GET" };

const req = http.request(options, (res) => {
  let body = "";
  res.on("data", (chunk) => { body += chunk; });
  res.on("end", () => {
    console.log("Server responded with status:", res.statusCode);
    console.log("Content-Type:", res.headers["content-type"]);
    if (body.includes("萌宠洗护")) console.log("✓ Page title found");
    if (body.includes("Hero")) console.log("✓ Hero section found");
    if (body.includes("Services")) console.log("✓ Services section found");
    if (body.includes("gallery")) console.log("✓ Gallery section found");
    if (body.includes("Contact")) console.log("✓ Contact section found");
    fs.writeFileSync("test-output.html", body, "utf8");
    console.log("\\nHTML saved to test-output.html");
  });
});

req.on("error", (e) => console.error("Error:", e.message));
req.end();
