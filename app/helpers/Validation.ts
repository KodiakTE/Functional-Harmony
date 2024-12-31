const ValidateNumberOfChords = (numChords: number| string| undefined):Boolean => {
    if(numChords == undefined ){
        return false;
    }

    if(typeof numChords === "string"){
        try{
            numChords = parseInt(numChords);
        } catch(e){
            console.log(e);
            return false;
        }
    }
    return true;
}
const ValidateMajorOrMinor = (majorOrMinor: string | null):Boolean => {
    if(majorOrMinor == null){
        return false;
    }
    if (!(['Major', 'Minor'].includes(majorOrMinor))){
        console.log('Invalid Major or Minor');
        return false;
    }
    return true;
}

const ValidateKey = (keyNote: string | null):Boolean => {
    if(keyNote == null){
        return false;
    }
    if (!(['A', 'A#', 'B', 'C', 'C#','D', 'D#', 'E', 'F', 'F#', 'G', 'G#'].includes(keyNote))){
        console.log('Invalid Key Note');
        return false;
    }
    return true;
}

export {ValidateNumberOfChords, ValidateKey, ValidateMajorOrMinor};