const ts = require('typescript');
const fs = require('fs');
const path = require('path');
const root = path.resolve(process.cwd(), 'src');
const walk = (dir) => {
  const files = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      files.push(...walk(full));
    } else if (/\.(ts|tsx)$/.test(name)) {
      files.push(full);
    }
  }
  return files;
};
const files = walk(root);
for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const ext = path.extname(file);
  const outExt = ext === '.tsx' ? '.jsx' : '.js';
  const outFile = file.slice(0, -ext.length) + outExt;
  const result = ts.transpileModule(source, {
    compilerOptions: {
      jsx: ts.JsxEmit.Preserve,
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.NodeNext,
      noEmitHelpers: true,
      importHelpers: false,
      allowSyntheticDefaultImports: true,
      esModuleInterop: true,
      moduleResolution: ts.ModuleResolutionKind.NodeNext,
      isolatedModules: true,
      noImplicitAny: false,
      removeComments: false,
      importsNotUsedAsValues: ts.ImportsNotUsedAsValues.Remove,
      strict: false,
    },
    fileName: file,
    reportDiagnostics: true,
  });
  fs.writeFileSync(outFile, result.outputText, 'utf8');
  const diag = result.diagnostics || [];
  if (diag.length) {
    console.error('Diagnostics for', file);
    for (const d of diag) {
      const message = ts.flattenDiagnosticMessageText(d.messageText, '\n');
      if (d.file && typeof d.start === 'number') {
        const loc = d.file.getLineAndCharacterOfPosition(d.start);
        console.error(`  ${d.file.fileName}:${loc.line+1}:${loc.character+1}: ${message}`);
      } else {
        console.error('  ', message);
      }
    }
  }
}
console.log('converted', files.length, 'files');
