{
  config,
  pkgs,
  ...
}: {
  packages = with pkgs; [
    vite
    coreutils
    chromium # Needed for puppeteer
  ];

  languages.javascript = {
    enable = true;
    bun.enable = true;
  };

  env = {
    VITE_URL = "http://localhost:5173";
  };

  scripts = {
    dev.exec = "bun run dev";
    build.exec = "bun run build";
    generate-pdf.exec = "bun run ${config.devenv.root}/src/lib/scripts/generate-cv-pdf.ts";
  };
}
