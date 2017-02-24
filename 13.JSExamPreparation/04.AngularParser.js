/**
 * Created by Lucifer on 07-Oct-16.
 */
function main(input) {
    let modulePattern = /^\$app\=\'(.+)\'$/g;
    let controllerPattern = /^\$controller\=\'(.+)\`\$app\=\'(.+)\'$/g;
    let modelPattern = /^\$model\=\'(.+)\`\$app\=\'(.+)\'$/g;
    let viewPattern = /^\$controller\=\'(.+)\`\$app\=\'(.+)\'$/g;

    let data = new Map();
    let cacheData = new Map();

    for(let i = 0; i<input.length ; i++){
        let currentInputLine = input[i];

        let moduleMatch = modulePattern.exec(currentInputLine);
        let controllerMatch = controllerPattern.exec(currentInputLine);
        let modelMatch = modelPattern.exec(currentInputLine);
        let viewMatch = viewPattern.exec(currentInputLine);

        if(moduleMatch){
            let moduleName = moduleMatch[1];
            data.set(moduleName,new Map());
        }else if(controllerMatch){
            let controllerName =  controllerMatch[1];
            let moduleName = controllerMatch[2];
            if(data.has(moduleName)){
                if(data.get(moduleName.has("controllers"))){
                    data.get(moduleName).get("controllers",[]);

                }
                data.get(moduleName).get("controllers").push(controllerName);
            }else{
                if(!cacheData.has(moduleName)){
                    cacheData.set(moduleName,new Map());
                }
                if(cacheData.get(moduleName).has("controllers")){

                }
            }
        }

    }
}