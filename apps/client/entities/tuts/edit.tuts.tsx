
import { 
  Edit,
  SimpleForm,
  
TextInput,
NumberInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditTuts(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="title" variant="outlined"   />
<NumberInput source="exp" variant="outlined"  />

      </SimpleForm>
    </Edit>
  );
}