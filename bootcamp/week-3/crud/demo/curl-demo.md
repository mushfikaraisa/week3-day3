# CURL

## "See" URL

Curl is a tool for API testing in the command line.
Simple run your server and open up another terminal. You can test your API by copying commands like this and running them in the terminal!


#### Post a musician with name Kurt Cobain


```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"name":"Kurt Cobain"}' \
  http://localhost:8080/musicians
```

#### GET all musicians
```
curl --request GET \
http://localhost:8080/musicians
```



#### UPDATE musician 3 to have a name of Alanis Morisette

```
curl --header "Content-Type: application/json" \
  --request PUT \
  --data '{"name":"Alanis Morisette"}' \
  http://localhost:8080/musicians/3

```

#### DELETE Musician 6
```
curl --request DELETE \
http://localhost:8080/musicians/6
```
