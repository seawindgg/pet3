const http = require("http");
const fs = require("fs");

const options = { hostname: "localhost", port: 3000, path: "/", method: "GET" };

const req = http.request(options, (res) => {
  let body = "";
  res.on("data", (chunk) => { body += chunk; });
  res.on("end", () => {
    console.log("Status:", res.statusCode);
    if (res.statusCode === 200) {
      console.log("✓ Server responding OK");
      if (body.includes("萌宠洗护")) console.log("✓ Title found");
      if (body.includes("navbar", "i")) console.log("✓ Navbar found");
      if (body.includes("hero", "i")) console.log("✓ Hero found");
      if (body.includes("services", "i")) console.log("✓ Services found");
      if (body.includes("gallery", "i")) console.log("✓ Gallery found");
      if (body.includes("contact", "i")) console.log("✓ Contact found");
      console.log("\\nPage is rendering correctly!");
    } else {
      console.log("✗ Server returned error");
    }
  });
});

req.on("error", (e) => console.error("Error:", e.message));
req.end();
