'use client'
import { Title, Container, Center, Text, Button } from '@mantine/core';
import { useState } from 'react';
import StartingForm from './components/StartingForm';
import KeyForm from './components/KeyForm';
import ConvertProgressionToKey from './components/ConvertProgressionToKey';
import ChordProgressions from './components/ChordProgressions';

export default function HomePage() {
  const [chordProgression, newChordProgression] = useState<string[]>([]);
  const [numChords, setNumChords] = useState<number | string | undefined>(undefined);
  const [functionalHarmony, setFunctionalHarmony] = useState<boolean>(false);
  const [keyNote, setKeyNote] = useState<string | null>(null);
  const [majorOrMinor, setMajorOrMinor] = useState<string | null>(null);
  const [submittedStartingForm, setSubmittedStartingForm] = useState<boolean>(false);

  const handleResetForm = () => {
    setNumChords(undefined);
    setFunctionalHarmony(false);
    setKeyNote(null);
    setMajorOrMinor(null);
    setSubmittedStartingForm(false);
  }

  return (
    <>
      <Container size="lg">
        <Center>
          <Title order={1} pt={50} pb={50}>Random Chord Progression Maker Thingy v2 Electric Boogaloo</Title>
        </Center>
        {!submittedStartingForm?
          <StartingForm setSubmittedStartingForm={setSubmittedStartingForm} setNumChords={setNumChords} setFunctionalHarmony={setFunctionalHarmony} setMajorOrMinor={setMajorOrMinor}/>
          : null
        }

        {submittedStartingForm ? 
        <>
          <ChordProgressions newChordProgression={newChordProgression} numChords={numChords} functionalHarmony={functionalHarmony} majorOrMinor={majorOrMinor}/>
          <KeyForm setKeyNote={setKeyNote}/>
        </>
        : null}

        {keyNote != null ?
        <> 
          <Center pt={30}>
            <Text size="xl">Your Brand New Chord Progression in the Key of {keyNote}:</Text>
          </Center>
          <ConvertProgressionToKey chordProgression={chordProgression} keyNote={keyNote} majorOrMinor={majorOrMinor}></ConvertProgressionToKey>
          <Center>
            <Button onClick={handleResetForm}>not good enough?</Button>
          </Center>
        </>
      : null}
      </Container>
    </>
  );
}
