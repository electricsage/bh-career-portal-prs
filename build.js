const fs = require('fs');

// Read template
let config = fs.readFileSync('app.template.json', 'utf8');

// Replace placeholders with environment variables
config = config.replace('${BULLHORN_SWIMLANE}', process.env.BULLHORN_SWIMLANE || 'default-swimlane');
config = config.replace('${BULLHORN_CORP_TOKEN}', process.env.BULLHORN_CORP_TOKEN || 'default-corp-token');
config = config.replace('${COMPANY_NAME}', process.env.COMPANY_NAME || 'default-company-name');

// Write final app.json
fs.writeFileSync('app.json', config);
console.log('app.json generated successfully!');
