import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

/*export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};*/

export const date = async (args: string[]): Promise<string> => {
  return "Binary Stars will take place virtually on the 26th of Jan, 2024 at 12AM, BST";
};

export const gui = async (args: string[]): Promise<string> => {
  window.open('http://fly.vc');

  return 'a GUI, what for?';
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:mary@fly.vc');

  return 'Opening mailto:mary@fly.vc...';
};
/*
export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'emacs'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};*/

export const sudo = async (args?: string[]): Promise<string> => {


  if (${args[0]} == "password") {
    return 'The password is SUPERNOVAE';
  window.open('https://app.livestorm.co/fly-ventures/test-livestorm-for-binary-stars/live?s=0497b8bb-a352-49ce-a4a4-d22df5117972#/');
  }, 1000);
  
  }
  else {  
    setTimeout(function () {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000);
    return `Unable to run the command '${args[0]}' as root.`;
  }
  
};

export const password = async (args?: string[]): Promise<string> => {
  return 'Permission denied';
};

export const speakers = async (args?: string[]): Promise<string> => {
  /*setTimeout(function () {
    window.open('https://github.com/m4tt72/terminal', '_blank');
  }, 1000);
 */
  return 'Jamie CSO @Wayve, Leo VP Research @Dataiku and Harm VP AI @ServiceNow';
};



export const banner = (args?: string[]): string => {
  return `
██████╗ ██╗███╗   ██╗ █████╗ ██████╗ ██╗   ██╗    ███████╗████████╗ █████╗ ██████╗ ███████╗
██╔══██╗██║████╗  ██║██╔══██╗██╔══██╗╚██╗ ██╔╝    ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██╔════╝
██████╔╝██║██╔██╗ ██║███████║██████╔╝ ╚████╔╝     ███████╗   ██║   ███████║██████╔╝███████╗
██╔══██╗██║██║╚██╗██║██╔══██║██╔══██╗  ╚██╔╝      ╚════██║   ██║   ██╔══██║██╔══██╗╚════██║
██████╔╝██║██║ ╚████║██║  ██║██║  ██║   ██║       ███████║   ██║   ██║  ██║██║  ██║███████║
╚═════╝ ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ v${packageJson.version}

Type 'help' to see list of available commands. 
...Will you find the password?
--
`;
};
