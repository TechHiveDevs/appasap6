
import { 
  Create,
  SimpleForm,
  
TextInput,
NumberInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateTuts(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="title" variant="outlined"   />
<NumberInput source="exp" variant="outlined"  />

        </SimpleForm>
      </Create>
    );
  }
