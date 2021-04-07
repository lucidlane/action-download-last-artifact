const core = require('@actions/core');


async function run() {
    try {
        core.info('Looking for an artifact by name...')
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
