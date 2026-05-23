import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// Copy the new high quality portrait from the artifact folder to public/
try {
  const src = "C:\\Users\\god\\.gemini\\antigravity\\brain\\6619722e-6bb3-4f0b-aa19-8da7a11ab2af\\selvakumaran_new_1779531187286.png";
  const dest = path.resolve("public/selvakumaran_new.png");
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log("Successfully copied selvakumaran_new.png to public/ directory!");
  }
} catch (err) {
  console.error("Error copying selvakumaran_new.png:", err);
}

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})