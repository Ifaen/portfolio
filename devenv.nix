{pkgs, ...}: {
  packages = with pkgs; [
    bun
    nodejs
    vite
  ];

  scripts.start.exec = "bun run dev";
  scripts.build.exec = "bun run build";
}
