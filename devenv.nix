{pkgs, ...}: {
  packages = with pkgs; [
    bun
    nodejs
    vite
    coreutils
  ];

  scripts = {
    frontend-start.exec = "bun run dev";
    build.exec = "bun run build";
  };
}
