import { NumberInput,Stack,Switch, Center,Button, Select  } from "@mantine/core";
import { useState } from "react";
import { ValidateMajorOrMinor, ValidateNumberOfChords } from "../helpers/Validation";

const startingForm = (props:any):JSX.Element => {
    let setSubmittedStartingForm = props.setSubmittedStartingForm;
    let setNumChordsParent =props.setNumChords;
    let setFunctionalHarmonyParent = props.setFunctionalHarmony;
    let setMajorOrMinorParent = props.setMajorOrMinor;
    const [numChords, setNumChords] = useState<number | string | undefined>(undefined);
    const [functionalHarmony, setFunctionalHarmony] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [majorOrMinor, setMajorOrMinor] = useState<string | null>(null);

    const handleSubmit = () => {
        if(!ValidateNumberOfChords(numChords) && ValidateMajorOrMinor(majorOrMinor)){
          setError('Please Fill Out All The Fields');
          return;
        }

        //send submitted data back to parent
        setMajorOrMinorParent(majorOrMinor);
        setSubmittedStartingForm(true); 
        setNumChordsParent(numChords);
        setFunctionalHarmonyParent(functionalHarmony);
      };

    return(
        <>
            <Stack align='center' justify='center' gap="lg" h={225} pb={20}>
            <NumberInput
                label="How Many Chords in the Progression?"
                placeholder='Minimum of 1 and max of 20'
                min={1}
                max={20}
                allowNegative={false}
                allowDecimal={false}
                value={numChords}
                onChange={(value) => setNumChords(value)}
            />            
            <Select
                label="Major or Minor?"
                placeholder="Whichever you want"
                data={['Major','Minor']}
                onChange={(value) => setMajorOrMinor(value)}
            />
            <Switch
                label="Functional Harmony?"
                onChange={(event) => setFunctionalHarmony(event.currentTarget.checked)}
            />
            </Stack>
            <Center pb={20}>
                <Button onClick={handleSubmit}>don't click this</Button>
            </Center>
            <Center>
                {error}
            </Center>
        </>
    );
};

export default startingForm;