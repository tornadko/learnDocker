To build the image: 		docker-compose build
To run the app:		 		docker-compose up
To run in background mode:	docker-compose up -d
To stop the app:			docker-compose down

To add a user to db: curl -X POST -H "Content-Type: application/json" -d '{"userName": "Alex K"}' http://localhost:80/users