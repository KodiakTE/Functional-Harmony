import Graph from '../helpers/Graph';

let majorChords = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'viio'];
let minorChords = ['i', 'iio', 'III', 'iv', 'v', 'VI', 'VII'];

let FunctionalHarmonyNames = ['Tonic', 'Subdominant', 'Dominant'];

let functionalHarmonyGraph = new Graph();
functionalHarmonyGraph.addVertex('Tonic');
functionalHarmonyGraph.addVertex('Subdominant');
functionalHarmonyGraph.addVertex('Dominant');
functionalHarmonyGraph.addEdge('Tonic', 'Subdominant');
functionalHarmonyGraph.addEdge('Tonic', 'Dominant');
functionalHarmonyGraph.addEdge('Subdominant', 'Dominant');
functionalHarmonyGraph.addEdge('Dominant', 'Tonic');

let functionalHarmonyMapMajor = new Map<string, string[]>();
functionalHarmonyMapMajor.set('Tonic', ['I', 'iii']);
functionalHarmonyMapMajor.set('Subdominant', ['ii', 'IV', 'vi']);
functionalHarmonyMapMajor.set('Dominant', ['V', 'viio']);

let functionalHarmonyMapMinor = new Map<string, string[]>();
functionalHarmonyMapMinor.set('Tonic', ['i', 'III']);
functionalHarmonyMapMinor.set('Subdominant', ['iio', 'iv', 'VI']);
functionalHarmonyMapMinor.set('Dominant', ['v', 'VII']);


const createChordProgressionMajor = (numChords: number, functionalHarmony: boolean, majorOrMinor:string):Array<string> => {
    let chordProgression:string[] = [];
        if(!functionalHarmony){
            chordProgression = randomChords(numChords, majorOrMinor);
        }
        else{
            if(majorOrMinor === 'Minor'){
                chordProgression = traverseHarmonyGraph(functionalHarmonyMapMinor, numChords);
            }
            else
            chordProgression = traverseHarmonyGraph(functionalHarmonyMapMajor, numChords);
        }
        return chordProgression;
    }

const randomChords = (numChords: number, majorOrMinor: string):string[] => {
    let chordProgression:string[] = [];
    if(majorOrMinor === 'Minor'){
        for (let i = 0; i < numChords; i++){
            let chord = minorChords[Math.floor(Math.random() * minorChords.length)]; // Randomly select a chord from the minorChords array
            chordProgression.push(chord);
        }
    }
    else{
        for (let i = 0; i < numChords; i++){
            let chord = majorChords[Math.floor(Math.random() * majorChords.length)]; // Randomly select a chord from the majorChords array
            chordProgression.push(chord);
        }
    }
    return chordProgression;
}

const traverseHarmonyGraph = (functionalHarmonyMap: Map<string, string[]>, numChords: number):string[] => {
    let chordProgression:string[] = [];
    //randomy pick a node from functionalHarmonyNames
    let currentNode = FunctionalHarmonyNames[Math.floor(Math.random() * FunctionalHarmonyNames.length)];
    //console.log(currentNode);
    for(let i = 0; i < numChords; i++){
    //pick a random chord from the currentNode using the functionalHarmonyMap object
    let chord = functionalHarmonyMap.get(currentNode)![Math.floor(Math.random() * functionalHarmonyMap.get(currentNode)!.length)];
    chordProgression.push(chord);
    //go to next node
    currentNode = functionalHarmonyGraph.getNeighbors(currentNode)![Math.floor(Math.random() * functionalHarmonyGraph.getNeighbors(currentNode)!.length)]; 
    }
    return chordProgression;
}

export default createChordProgressionMajor;