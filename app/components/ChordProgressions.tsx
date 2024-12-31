import React, { useEffect, useMemo } from 'react';
import { Center, Stack, Text } from '@mantine/core';
import createChordProgressionMajor from '../helpers/CreateChordProgressions';

const ChordProgressions = (props:any):JSX.Element => {
    //console.log(props);
    let numChords: number|string|undefined = props.numChords;
    let functionalHarmony: boolean= props.functionalHarmony;
    let majorOrMinor: string|null = props.majorOrMinor;
    let newChordProgression = props.newChordProgression;

    let randomChordProgression = useMemo(() => {
        return createChordProgressionMajor(numChords as number, functionalHarmony, majorOrMinor as string);
    }, [numChords, functionalHarmony, majorOrMinor]); 

    //useEffect to mount newChordProgression to the React DOM so it doesn't collide with loading the homepage
    useEffect(() => {
        newChordProgression(randomChordProgression);
    }, [numChords, functionalHarmony, majorOrMinor]);

    return (
        <>
            <Stack pt={30}>
                <Center>
                    <Text size="xl">Your Brand New Chord Progression that has definitely never been used before:</Text>
                </Center>
                <Center><Text size="xl" fw={700} pb={20}>{PrintChordProgression(randomChordProgression)}</Text></Center>
            </Stack>
        </>
    );
};

const PrintChordProgression = (randomChordProgression: string[]):string => {
    let chordProgression = '';
    for(let i = 0; i < randomChordProgression.length; i++){
        chordProgression += randomChordProgression[i];
        if(i !== randomChordProgression.length - 1){
            chordProgression += ' ';
        }
    }
    return chordProgression;
}

export default ChordProgressions;