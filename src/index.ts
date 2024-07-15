import * as core from "@actions/core";
import { ApiUploadProps, upload } from 'diawi-nodejs-uploader';

async function run(){
  try {

    const apiKey:string = core.getInput('api-key');
    console.log(`Diawi ApiKey ******`);
    const fileRoute:string = core.getInput('file-route');
    console.log(`File Route: ${fileRoute}`);
    const callbackEmails:string = core.getInput('emails-to-deliver');
    console.log(`Emails to Deliver: ******`);
    const comment:string = core.getInput('comment');
    console.log(`Comment: ${comment}`);
    const installationNotifications:boolean = !!core.getInput('installation-notifications') || false;
    console.log(`Installation Notifications: ${installationNotifications ? 'Yes' : 'No'}`);
    const password:string = core.getInput('installation-password');
    console.log(`Password: ******`);

    let setting:ApiUploadProps = {
        file: fileRoute,
        token: apiKey,
        installation_notifications: installationNotifications
    };

    if(password.length > 0){
        setting.password = password;
    }

    if(comment.length > 0){
        setting.comment = comment;
    }

    if(callbackEmails.length > 0){
        const commaSeparated = callbackEmailsTransformation(callbackEmails);
        setting.callback_emails = commaSeparated;
    }

    const result = await upload(setting);
    console.log(result);
    core.setOutput("webapp-url", result.link);
  } catch (error:any) {
    core.setFailed(error.message);
  }
}

const callbackEmailsTransformation = (emails:string) => {
  const emailArray = emails.replace(/\s+/g, '').replace(/\n+/g, ',').split(',');
  const uniqueEmails = [...new Set(emailArray)]; // remove duplicates
  return uniqueEmails.join(',');
};

run();