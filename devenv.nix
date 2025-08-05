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
    pnpm.enable = true;
  };

  env = {
    VITE_URL = "http://localhost:5173";
  };

  scripts = {
    dev.exec = "pnpm run dev";
    build.exec = "pnpm run build";
    generate-pdf.exec = "pnpm run ${config.devenv.root}/src/lib/scripts/generate-cv-pdf.ts";
  };
}
