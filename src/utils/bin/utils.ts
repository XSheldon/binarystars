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
  return "Binary Stars will take place virtually on the 26th of Jan, 2024 at 12PM, BST";
};

export const gui = async (args: string[]): Promise<string> => {
  window.open('http://binarystars.com/');

  return 'opening a more suitable user interface';
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


  if (args[0] == "password") {
    setTimeout(function() {
      window.open('https://binarystars.zapier.app/');
    }, 1000);
    return 'Well done! You can register at https://binarystars.zapier.app/, see you soon!';

  }
  else {
    /*setTimeout(function() {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }, 1000);*/
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
  return 'Harm de Vries VP AI @ServiceNow, Leo Dreyfus-Schmidt VP Research @Dataiku and Paul Lasserre, GenAI Lead @AWS';
};



export const banner = (args?: string[]): string => {
  return `
██████╗ ██╗███╗   ██╗ █████╗ ██████╗ ██╗   ██╗    ███████╗████████╗ █████╗ ██████╗ ███████╗
██╔══██╗██║████╗  ██║██╔══██╗██╔══██╗╚██╗ ██╔╝    ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██╔════╝
██████╔╝██║██╔██╗ ██║███████║██████╔╝ ╚████╔╝     ███████╗   ██║   ███████║██████╔╝███████╗
██╔══██╗██║██║╚██╗██║██╔══██║██╔══██╗  ╚██╔╝      ╚════██║   ██║   ██╔══██║██╔══██╗╚════██║
██████╔╝██║██║ ╚████║██║  ██║██║  ██║   ██║       ███████║   ██║   ██║  ██║██║  ██║███████║
╚═════╝ ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ v${packageJson.version}

the AI X SWE Conference, brought to you by FLY VENTURES
Will you manage to register?
tip: it's only hard if you've never written code before

Type 'help' to see list of available commands. 
--
`;
};
