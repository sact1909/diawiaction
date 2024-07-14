import * as core from "@actions/core";
import { upload } from 'diawi-nodejs-uploader';

async function run(){
  try {

    const apiKey = core.getInput('api-key');
    console.log(`Diawi ApiKey ******`);
    const fileRoute = core.getInput('file-route');
    console.log(`File Route: ${fileRoute}`);

    const result = await upload({
        file: fileRoute,
        token: apiKey,
    });
    
    core.setOutput("result", result);
    console.log(result);
  } catch (error:any) {
    core.setFailed(error.message);
  }
}

run();