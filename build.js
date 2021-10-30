let fs = require("fs");
let path = require("path");

let envPlugin = {
  name: "env",
  setup(build) {
    // Intercept import paths called "env" so esbuild doesn't attempt
    // to map them to a file system location. Tag them with the "env-ns"
    // namespace to reserve them for this plugin.

    build.onLoad({ filter: /.*/ }, async args => {
      let text = await fs.promises.readFile(args.path, "utf8");
      let arr = text.split("\n");
      arr.shift();
      // arr.unshift(
      //   "const React = window.React;\n const { forwardRef } = React;\n"
      // );
      let content = text
        // .replace(
        //   /^import\s+(?:[A-Za-z0-9$_]+\s*,\s*)?(\{[^}]*\})\s+from\s+"react";/g,
        //   "const React = window.React;\n const  $1  = React;\n"
        // )
        .replace(
          `"../lib"`,
          `"https://framer.com/m/framer/phosphor-utils.js@^0.3.0"`
        )
        .replace(
          `"../lib/IconBase"`,
          `"https://framer.com/m/framer/phosphor-icon-base.js@^0.4.0"`
        );

      return {
        contents: content,
        loader: "tsx",
      };
    });
  },
};

const directoryPath = path.join(__dirname, "src/icons/");
const iconFiles = fs.readdirSync(directoryPath);
const iconPaths = iconFiles.map(file => path.join(directoryPath, file));

require("esbuild")
  .build({
    // entryPoints: ["./src/icons/Activity.tsx", "./src/icons/Airplane.tsx"],
    entryPoints: iconPaths,
    bundle: false,
    // logLevel: "0",
    target: "es2019",
    format: "esm",
    outdir: "./build",
    plugins: [envPlugin],
  })
  .catch(() => process.exit(1));
