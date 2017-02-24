/**
 * Created by Lucifer on 16-Dec-16.
 */
function terribleFormat(input){
    let string = input[0];
    string = string.replace(/\s+/g, ' ');
    string=string.replace("\" ","\"");
    string=string.replace("\""," \"");
    function removeSpacesBefore(str) {
        str = str.replace(" .", ".");
        str = str.replace(" ,", ",");
        str = str.replace(" !", "!");
        str = str.replace(" ?", "?");
        str = str.replace(" :", ":");
        str = str.replace(" ;", ";");
        str=str.replace(/[a-z]\s[.,!?:;]/g,function(x){
            return x.replace(" ","");
        });
        str=str.replace(/[a-z]\s\"/g,function(x){
            return x.replace(" ","");
        });
        str=str.replace(/[a-z]\s\"/g,function(x){
            return x.replace(" ","");
        });
        str=str.replace(/[a-z]\s\"/g,function(x){
            return x.replace(" ","");
        });
        str=str.replace(/[a-z]\s\"/g,function(x){
            return x.replace(" ","");
        });
        str = str.replace(" .", ".");
        str = str.replace(" ,", ",");
        str = str.replace(" !", "!");
        str = str.replace(" ?", "?");
        str = str.replace(" :", ":");
        str = str.replace(" ;", ";");
        return str;
    }
    function addSpacesAfter(str) {
        str = str.replace(".", ". ");
        str = str.replace(",", ", ");
        str = str.replace("!", "! ");
        str = str.replace("?", "? ");
        str = str.replace(":", ": ");
        str = str.replace(";", "; ");
        return str;
    }
    //string=string.replace(". .","..");
    function specialCases(str){
    str = str.replace(/\s+/g, ' ');
        str=str.replace(". . .","...");
    str=str.replace(/[0-9] . [0-9]/g,function(x){
        return x.replace(" ","");
    });
        str=str.replace(". .","..");
        str=str.replace(".. .","...");
        str=str.replace(". ..","...");
        str=str.replace(". .","..");
    str=str.replace(/[0-9]. [0-9]/g,function(x){
        return x.replace(" ","");
    });
        str=str.replace(/[0-9] .[0-9]/g,function(x){
            return x.replace(" ","");
        });
    //string=string.replace(" .",".");
    str=str.replace(/[a-z]\s\"/g,function(x){
        return x.replace(" ","");
    });
    str = str.replace(/  +/g, ' ');
    return str;
    }

    string = specialCases(string);
    string =removeSpacesBefore(string);
    string =removeSpacesBefore(string);
    string =addSpacesAfter(string);
    string =addSpacesAfter(string);
    string =specialCases(string);
    console.log(string);
}
let a = terribleFormat(["Terri         bly      formatted text      . With chaotic spacings.?\" Terrible quoting \"! Also" +
"this date is pretty confusing : 20 . 12     .  16 . . . ."]);