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
        callback_emails: 'steven.checo.19@gmail.com'
    });
    
    core.setOutput("result", result);
    console.log(result);
  } catch (error:any) {
    core.setFailed(error.message);
  }
}

run();