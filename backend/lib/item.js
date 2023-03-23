const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function createImageUrlAsync(description = '', size = 256) {
  return openai.createImage({
    prompt: description || "a white siamese cat",
    size: `${size}x${size}`,
    n: 1,
  }).then(response => {
    return response.data.data[0].url
  }).catch((_createImageError) => {
    return ''
  })
}

module.exports = {
  createImageUrlAsync
}