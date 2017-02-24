/**
 * Created by Lucifer on 07-Oct-16.
 */
function main(input) {


    let hash = input.pop().split('');

    function validateToken(hash,token) {
        for(let i = 0 ; i<hash.length; i+=2){
            let neededOccurences = Number(hash[i]);
            let neededCharacter = hash[i+2];
            if((token.match(new RegExp(neededCharacter,"g"))|| []).length==neededOccurences){
                return true;
            }
            return false;
        }
    }


    for(let i = 0 ; i<input.length; i+=3){
        let methodPattern = /Method:(GET|POST|PUT|DELETE)/g;
        let credentialsPattern = /^Credentials: (Basic|Bearer) ([a-zA-Z0-9]+)$/g;
        let content = /Content: [a-zA-Z0-9.]+/g;
        let methodMatch = methodPattern.exec(input[i]);
        let credentialsMatch = credentialsPattern[input[i]+1];
        let contentMatch = content.exec(input[i+2]);

        let resultResponse = "";


        if(methodMatch&&credentialsMatch&&content){
           let method = methodMatch[1];
            let authenticationType = credentialsMatch[1];
            let authenticationToken = credentialsMatch[2];

            switch(method){
                case "GET":
                    resultResponse ="&Code:200&Header:"+ authenticationToken;
                    break;
                case "POST":
                case"PUT":
                case"DELETE":
                    if(authenticationToken == "Basic"){
                        //resultResponse += "Response-Method:"+
                    }else{
                        //resultResponse += "&Code:200&Header:" + authenticationToken;
                    }
                    break;
            }
            if(!validateToken(hash,authenticationToken)){

            }
        }
        else{
            resultResponse ="Response-Code:400";
        }
    }
}