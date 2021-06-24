```
# Token provider simulator 

This is a Node.js simulator for token providers like VISA and Master

## Setting up 🚀

Yo need to have intsalled npm (version 6.14.6).

For run the application please do: 
```
	npm start
	
```

### Usage 🔧

 import the token-provider-simulator.postman_collection into postman 

## using Docker

## Build an image:

```
	 docker build  --tag token-service-provider-simulator:1.0 . 
	
```

## Start  a container using port 9092 ( you can choose another one):

```
	 docker run -itd  --publish 9092:3000  --name token-service-provider-simulator-ps  token-service-provider-simulator:1.0

```
### Test the app health using:

```
	curl http://localhost:9092/info

```

