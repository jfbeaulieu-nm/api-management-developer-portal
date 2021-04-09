<<<<<<< HEAD
=======
/**
 * This script automates generating the content of API Management developer portals from the snapshot.
 * In order to run it, you need to:
 * 
 * 1) Clone the api-management-developer-portal repository:
 *    git clone https://github.com/Azure/api-management-developer-portal.git
 * 
 * 2) Install NPM  packages:
 *    npm install
 * 
 * 3) Run this script with a valid combination of arguments:
 *    node ./cleanup ^
 *    --sourceSubscriptionId "< your subscription ID >" ^
 *    --sourceResourceGroupName "< your resource group name >" ^
 *    --sourceServiceName "< your service name >" ^
 *    --destSubscriptionId "< your subscription ID >" ^
 *    --destResourceGroupName "< your resource group name >" ^
 *    --destServiceName "< your service name >"
 */

>>>>>>> master
const { ImporterExporter } = require("./utils");

const yargs = require('yargs')
    .example(`node ./generate ^ \r
    --subscriptionId "< your subscription ID >" ^ \r
    --resourceGroupName "< your resource group name >" ^ \r
    --serviceName "< your service name >"\n`)
    .option('subscriptionId', {
        type: 'string',
        description: 'Azure subscription ID.',
        demandOption: true
    })
    .option('resourceGroupName', {
        type: 'string',
        description: 'Azure resource group name.',
        demandOption: true
    })
    .option('serviceName', {
        type: 'string',
        description: 'API Management service name.',
        demandOption: true
    })
    .help()
    .argv;

async function generate() {
    const importerExporter = new ImporterExporter(
        yargs.subscriptionId,
        yargs.resourceGroupName,
        yargs.serviceName
    );

    await importerExporter.import();
}

generate()
    .then(() => {
        console.log("DONE");
        process.exit(0);
    })
    .catch(error => {
<<<<<<< HEAD
        console.error(error);
=======
        console.error(error.message);
>>>>>>> master
        process.exit(1);
    });


module.exports = {
    generate
<<<<<<< HEAD
}
=======
}
>>>>>>> master
