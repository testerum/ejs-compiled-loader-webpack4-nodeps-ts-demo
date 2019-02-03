const os = require("os");

// This will return a compiled template.
//
// A compiled template is a js function with the following signature: "function evaluateTemplate(model)",
// where "model" is any model that needs to be passed to the template.
const helloTemplate = require("./templates/hello.ejs");

// the model used by our template
const model = {
    name: os.userInfo().username,
    currentDate: new Date().toISOString()
};

console.log(
    helloTemplate(model)
);
