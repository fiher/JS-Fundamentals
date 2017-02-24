/**
 * Created by Lucifer on 14-Oct-16.
 */
function daggerAndSwords(input) {
    input = input.map(Number).map(Math.floor);
    for(let blade of input){
        if(blade <= 10){
            continue;
        }
        let application = '';
        let type = 'dagger';
        if(blade>40){
            type = 'sword';
        }
        switch(blade%5) {
            case 0:
                application = '*rap-poker';
                break;
            case 1:
                application = 'blade';
                break;
            case 2:
                application = 'quite a blade';
                break;
            case 3:
                application = 'pants-scraper';
                break;
            case 4:
                application = 'frog-butcher';
                break;

        }
        
    }
}
daggerAndSwords(['17.8',
    '19.4',
    '13',
    '55.8',
    '126.96541651',
    '3'
]);