import React from "react"

export default class Fetcher extends React.Component {

    // let access_token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ1MjZBMkFCNkQ0MkQ5REIwMjBEMThBRDMxRTE5MTdCMUUzMjg2RTUiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJSU2FpcTIxQzJkc0NEUml0TWVHUmV4NHlodVUifQ.eyJuYmYiOjE1Nzg1MTM1NTksImV4cCI6MTU3ODU5OTk1OSwiaXNzIjoiaHR0cHM6Ly9vYXV0aC5mYXRzZWNyZXQuY29tIiwiYXVkIjoiYmFzaWMiLCJjbGllbnRfaWQiOiI0NDJlMmQ5MWFmNGE0MjU5ODdhYjFkY2VlNjY0ZDZhYiIsInNjb3BlIjpbImJhc2ljIl19.ZV6U4mLrhFm70G_g2He84z8MrMWBtZ9_Rs0UF89F5cVnRSML6yVEa9Oiaa9Qjlt0KbtaZFZyBIJlL6mPwcxU7dKqT0KyyRP7gMEVQSXArapuDa0cFfRtHL_FAoFSmuA7v9ZAVRZHuMnM8quCFLjUNL1VUcMsL1fYGG6ahlKW7Bq5sH3L4Q7V-rti76Is5htExAdxVAzlWMZlf9CkhW8CbOKtowFOSzE7_3C7IVHjr3PbZE4ywvH4QGnFz5DBJRmWS__PDmUtOTzURlbSPNwgKlgLKXlzYMSFI8MZpFp6r0JifT36xtT-Bb8sHDVEhm9VwWX7Oz7Ac4Zc9T16va7Eag"

    
    componentDidMount(){
//         let searchTerms = ["burger", "bread", "chicken", "meat", "egg", "milk", "sandwhich", "soup"]
//         let coolArray = []

//         searchTerms.forEach((term) => {
//             var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/js");
// myHeaders.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ1MjZBMkFCNkQ0MkQ5REIwMjBEMThBRDMxRTE5MTdCMUUzMjg2RTUiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJSU2FpcTIxQzJkc0NEUml0TWVHUmV4NHlodVUifQ.eyJuYmYiOjE1Nzg1MTM1NTksImV4cCI6MTU3ODU5OTk1OSwiaXNzIjoiaHR0cHM6Ly9vYXV0aC5mYXRzZWNyZXQuY29tIiwiYXVkIjoiYmFzaWMiLCJjbGllbnRfaWQiOiI0NDJlMmQ5MWFmNGE0MjU5ODdhYjFkY2VlNjY0ZDZhYiIsInNjb3BlIjpbImJhc2ljIl19.ZV6U4mLrhFm70G_g2He84z8MrMWBtZ9_Rs0UF89F5cVnRSML6yVEa9Oiaa9Qjlt0KbtaZFZyBIJlL6mPwcxU7dKqT0KyyRP7gMEVQSXArapuDa0cFfRtHL_FAoFSmuA7v9ZAVRZHuMnM8quCFLjUNL1VUcMsL1fYGG6ahlKW7Bq5sH3L4Q7V-rti76Is5htExAdxVAzlWMZlf9CkhW8CbOKtowFOSzE7_3C7IVHjr3PbZE4ywvH4QGnFz5DBJRmWS__PDmUtOTzURlbSPNwgKlgLKXlzYMSFI8MZpFp6r0JifT36xtT-Bb8sHDVEhm9VwWX7Oz7Ac4Zc9T16va7Eag");

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch(`https://platform.fatsecret.com/rest/server.api?method=foods.search&search_expression=${term}&format=json`, requestOptions)
//   .then(response => response.json())
//   .then(result => {
//       let { foods } = result
//       let { food } = foods

//       coolArray.merge(food)

//     //   console.log(food)
//   })
//   .catch(error => console.log('error', error));
//     })
}

    render() {
        // console.log(coolArray)
        return (
        <div>
            Wassup
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addGoat: (compObj) => { dispatch({ type: "ADD_GOAT", payload: compObj })}
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addGoat: (compObj) => {
            dispatch({ type: "ADD_GOAT", payload: compObj})
        }
    }
}
