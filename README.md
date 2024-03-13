# Gemini Pro Chatbot
Simple chatbot app with memory of previous conversations. 'Surprise Me' button generates a random question. Uses ```model:  "gemini-pro"``` in the api call.
Built using ```npx create-react-app <app name>```
## Dependencies for server.js:
```
npm install cors dotenv express nodemon
```
## Dependencies for fronted:
```
cd src ; npm install 
```
## Dependencies for nlp:
```
cd packages/nlp ; npm install 
cd packages/request ; npm install 
```

## packages is for nlp module https://github.com/axa-group/nlp.js/
Just take two basic model, you can build the custom model of example/02-qna-classic, then take the model here for server.js load


## To Run:
Start the UI (default: localhost/3000)
```
npm run start:frontend
```
Start the server (default: localhost/8000)
```
npm run start:backend
```
![chrome_KYVAqnQlCw](https://github.com/JeremiahDMoore/google-gemini-chatbot/assets/23569464/f34dc707-3d7f-4a4a-afd7-04c3a120e806)


### RUN with docker
find the nodejs basic image, mount the project inside and npm install then get the node modules, but dont forget keep the process in the Dockerfile 

```
 CMD ['sh','-c', 'cd app && node server.js']
```

## finally deploy fronted on server
need to add allow cors header on nginx server block
