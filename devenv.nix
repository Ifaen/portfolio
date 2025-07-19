{pkgs, ...}: {
  packages = with pkgs; [
    bun
    nodejs
    vite
    coreutils
    chromium # Needed for puppeteer
  ];

  env = {
    VITE_URL = "http://localhost:5173";
  };

  scripts = {
    frontend-start.exec = "bun run dev";
    build.exec = "bun run build";
    generate-pdf.exec = "bun run $DEVENV_ROOT/src/lib/scripts/generate-cv-pdf.ts";
  };
}
