import { Center, Text } from "@mantine/core";

const keyTable = ['A', 'A#', 'B', 'C', 'C#','D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const keyMap = new Map([
    ['A', 0],
    ['A#', 1],
    ['B', 2],
    ['C', 3],
    ['C#', 4],
    ['D', 5],
    ['D#', 6],
    ['E', 7],
    ['F', 8],
    ['F#', 9],
    ['G', 10],
    ['G#', 11]    
]);
const majorPattern = [2, 2, 1, 2, 2, 1];
const majorChordsMap = new Map([
    ['I', [0, 'maj']],
    ['ii', [1, 'min']],
    ['iii', [2, 'min']],
    ['IV', [3, 'maj']],
    ['V', [4, 'maj']],
    ['vi', [5, 'min']],
    ['viio', [6, 'dim']]
]);
const minorPattern = [2, 1, 2, 2, 1, 2];
const minorChordsMap = new Map([
    ['i', [0, 'min']],
    ['iio', [1, 'dim']],
    ['III', [2, 'maj']],
    ['iv', [3, 'min']],
    ['v', [4, 'min']],
    ['VI', [5, 'maj']],
    ['VII', [6, 'maj']]
]);

const convertProgressionToKey = (props:any):JSX.Element => {
    let chordProgression:string[] = props.chordProgression;
    let keyNote:string = props.keyNote;
    let majorOrMinor:string = props.majorOrMinor;
    let KeyProgression:string[] = ProgressionToKeyLogic(chordProgression, keyNote, majorOrMinor);

    return(<> <Center><Text size="xl" fw={700} pb={20}>  {PrintKeyProgression(KeyProgression)}   </Text></Center> </>)
}

const ProgressionToKeyLogic = (chordProgression:string[], keyNote:string, majorOrMinor:string):string[] => {
    let keyScale:string[] = [];

    if(majorOrMinor === 'Major'){
        keyScale = getKeyScale(keyNote, majorPattern);
        return getKeyProgression(keyScale, chordProgression, majorChordsMap)
    }
    else{
        keyScale = getKeyScale(keyNote, minorPattern);
        return getKeyProgression(keyScale, chordProgression, minorChordsMap)
    }
}

const getKeyScale = (keyNote:string, pattern:number[]):string[] => {
    let keyPosition:number = keyMap.get(keyNote) as number;
    let keyScale:string[] = [];

    //Find the scale for the key
    for(let i = 0; i<pattern.length+1; i++){
        keyScale.push(keyTable[keyPosition]);
        keyPosition = (keyPosition + pattern[i]) % 12;
    }
    return keyScale;
}

const getKeyProgression = (keyScale: string[], chordProgression:string[], chordMap: Map<string, (string|number)[]>):string[] => {
        //Make the chord progression in the key
        let keyProgression:string[] = [];
        //console.log(keyScale);
        //console.log(chordProgression);
        for(let i =0; i<chordProgression.length; i++){
            console.log(i);
            let chordPosition: number = chordMap.get(chordProgression[i])![0] as number;
            //console.log("chordPosition:" + chordPosition);
            keyProgression.push(keyScale[chordPosition] + chordMap.get(chordProgression[i])![1]);
        }
        //console.log("keyProgression:" + keyProgression);
        return keyProgression;
}

const PrintKeyProgression = (keyProgression: string[]):string => {
    let progression = '';
    for(let i = 0; i < keyProgression.length; i++){
        progression += keyProgression[i];
        if(i !== keyProgression.length - 1){
            progression += ' ';
        }
    }
    return progression;
}

export default convertProgressionToKey;