# News

News is a mini project that save and get news(scroll)

## Installation


```bash
docker build .
docker-compose up
```

## Usage
After running the project , load http://localhost:4000/graphql
```javascript
//to get all news using limit and skip 
query getAllNews{
  getAllNews(input:{limit:2,skip:2}){
    id
    content
    title
    created_at
  updated_at
  }
}
// to create news using title and content
mutation createNews{
  createNews(input:{content:"BTC -2%",title:"Fall Of BTC"}){
    id
    content
    title
    created_at
    updated_at
  }
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.