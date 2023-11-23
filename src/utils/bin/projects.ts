import { getProjects } from '../../api';

export const speakers = async (args: string[]): Promise<string> => {
  const confspeakers = await getProjects();

  return confspeakers
    .filter((speaker) => !speaker.fork)
    .map(
      (speaker) =>
        `${speaker.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${speaker.html_url}" target="_blank">${speaker.html_url}</a>`,
    )
    .join('\n');
};
