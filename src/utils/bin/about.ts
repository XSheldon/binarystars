import { getBio } from '../../api';

export const about = async (args: string[]): Promise<string> => {
  //const bio = await getBio();
  const tldr = "BINARY STARS is the first Pan European virtual conference dedicated to the state of the art of AI x SWE. Our first edition will take place on the 26/01 at 12AM UK. Format: 3 speakers, each presenting a technical breakthrough in a 20min format + Q&A. Our speakers for this edition are *Haarm de Vries*, VP of AI at Servicenow and lead of the Bigcode open source project, who will present their new model, StarCoder 2, *Jamie Shotton* CSO of Wayve who will talk about the performance inflexion point their AV model is experiencing with the data scale, and finally *Léo Dreyfus-Schmidt* VP Research at Dataiku who will share his insights on as the the state of the art of LLM deployment in the enterprise. ==> To sign up, you need to find the password!";

  return tldr;
};
