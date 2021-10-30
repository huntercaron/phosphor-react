let fs = require("fs");
let path = require("path");
const FormData = require("form-data");
const fetch = require("node-fetch");
const { File, Blob } = require("web-file-polyfill");

let accessToken = "";
const namespace = "icons";
const moduleName = "phosphor-Airplane";
const session = "";

const directoryPath = path.join(__dirname, "build/");
const iconFiles = fs.readdirSync(directoryPath);
const iconPaths = iconFiles.map(file => path.join(directoryPath, file));

async function publishModule() {
  await fetch(
    `https://api.framer.com/modules/v1/namespaces/${encodeURIComponent(
      namespace
    )}/published/${encodeURIComponent(moduleName)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        moduleId: "",
        saveId: "",
        version: "0.0.1",
      }),
    }
  ).then(r => r.json());
}

async function addModuleRequestToForm(req, form) {
  const { files, ...metadata } = req;
  // Determine which index we're adding based on the current number of metadata values.
  // const i = form.getAll("metadata").length;
  // Add the metadata (everything except the file contents).
  form.append(
    "metadata",
    JSON.stringify({
      ...metadata,
      projectId: this.projectId,
      files: files.map(({ content: _, ...info }) => info),
    })
  );
  // Attach the files as individual form entries.
  await Promise.all(
    files.map(async file => {
      let blob = new Blob([file.content]);
      form.append(`files[0]`, new File([blob], file.name));
    })
  );
}

async function saveModule(iconPath) {
  if (!iconPath) return;
  let text = await fs.promises.readFile(iconPath, "utf8");

  const form = new FormData();
  const file = {
    name: iconPath,
    type: "module",
    content: text,
  };

  const createRequest = {
    type: "codeFile",
    files: [file],
  };

  await addModuleRequestToForm(createRequest, form);

  await fetch("https://api.framer.com/modules/v1/modules/batch/saves/", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: formData,
    method: "POST",
  })
    .then(d => d.json())
    .then(d => console.log(d))
    .catch(e => console.log(e));
  console.log("i did it");
}

async function saveAllModules() {
  const iconPath = [iconPaths[0]];
  iconPath.forEach(iconPath => saveModule(iconPath));
}

async function getToken() {
  const token = await fetch(`https://api.framer.com/auth/web/access-token`, {
    method: "GET",
    headers: {
      Cookie: `session=${session}`,
      "Content-Type": "application/json",
    },
  }).then(r => r.json());
  console.log(token);
}

saveAllModules();
// getToken();
