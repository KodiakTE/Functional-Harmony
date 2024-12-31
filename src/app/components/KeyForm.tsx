import { Center, Select } from "@mantine/core";

const keyForm = (props:any):JSX.Element => {
    let setKeyNote = props.setKeyNote;

    return(
        <>
            <Center>            
                <Select
                    label="What Key?"
                    placeholder="Any Key"
                    data={['A', 'A#', 'B', 'C', 'C#','D', 'D#', 'E', 'F', 'F#', 'G', 'G#']}
                    onChange={(value) => setKeyNote(value)}
                />
            </Center>
        </>
    );
};

export default keyForm;