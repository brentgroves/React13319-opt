import React from "react";
import { graphConfig } from "../config/authConfig";

export async function callMsGraph(accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(graphConfig.graphMeEndpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}

export async function GetGroups(accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };
   // 
    return fetch(graphConfig.memberOfEndpoint, options)
        .then(response => response.json())
        .catch(error => {
            console.log(error)
            console.log(`Fetch getGroups catch`);
        }
        );
}

export async function GetProfile(accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };
   // 
    return fetch(graphConfig.profileEndPoint, options)
        .then(response => response.json())
        .catch(error => {
            console.log(error)
            console.log(`Fetch getProfile catch`);
        }
        );
}


export async function SendMail(accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);
    headers.append('Content-Type','application/json');
    const myBody =  {
        message: {
          subject: "Test2",
          body: {
            contentType: "Text",
            content: "The new cafeteria is open."
          },
          toRecipients: [
            {
              emailAddress: {
                address: "bgroves@mobexglobal.com"
              }
            }
          ],
          ccRecipients: [
            {
              emailAddress: {
                address: "dkreps@mobexglobal.com"
              }
            }
          ]
        },
        saveToSentItems: "false"
      };      
   
    const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(myBody) // body data type must match "Content-Type" header
    };
   // 
   console.log(`SendMail,headers:${headers},myBody:${JSON.stringify(myBody)}`);
    return fetch(graphConfig.sendMailEndPoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
    
}

