const generateCompleteAction = async (info) => {
    try {
        const { selectionText } = info;
        const basePromptPrefix = `Write me a detailed table of contents for a blog post with the title below.

        Title: `;

//Add to call chatgpt 

const baseCompletion = await generateCompleteAction(`${basePromptPrefix}${selectionText}`);

console.log(baseCompletion.text)
    } catch(error){
        console.log(error);
    }
};


const getKey = () => {
    return new Promise((resolve, reject) => {
      chrome.storage.local.get(['openai-key'], (result) => {
        if (result['openai-key']) {
          const decodedKey = atob(result['openai-key']);
          resolve(decodedKey);
        }
      });
    });
  };

const completion = await completionResponse.json();
    return completion.choices.pop();



chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: 'context-run',
        title: 'Generate post',
        contexts: ['selection'],
    });
});

chrome.contextMenus.onClicked.addListener(generateCompleteAction);

