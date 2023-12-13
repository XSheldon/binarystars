import { getBio } from '../../api';

export const about = async (args: string[]): Promise<string> => {
  //const bio = await getBio();
  const tldr = "BINARY STARS is the first Pan European virtual conference dedicated to the state of the art of AI x SWE. Our first edition will take place on the 26/01 at 12AM UK. Format: 3 speakers, 20min each + lots of Q&A time. Our speakers for this edition are *Harm de Vries*, VP of AI at Servicenow and lead of the Bigcode open source project, who will present their new model, StarCoder 2, *Léo Dreyfus-Schmidt* VP Research at Dataiku who will share his insights on as the the state of the art of LLM deployment in the enterprise, and *Paul Lasserre*, lead Gen AI at AWS who will give us a tour of a few really cool live projects buildt on top of the AWS platform. To sign up however, you need to find the password!";

  return tldr;
};
