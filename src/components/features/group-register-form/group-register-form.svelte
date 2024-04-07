<script lang="ts">
  import Card from "../../card/index.svelte";
  import CardActions from "../../card/card-actions.svelte";
  import FormControl from "../../form/index.svelte";
  import TextInput from "../../form/text-input.svelte";
  import MultipleSelect from "../../form/multiple-select/index.svelte";
  import SubmitButton from "../../form/submit-button.svelte";
  import type { StudentRecord } from "../../../types/record";
  import { serverFunctions } from "../../../lib/utils/server-script";

  const { getStudents } = serverFunctions;

  let students: StudentRecord[] = [];

  (async () => {
    students = (await getStudents()).unwrapOr([]);
  })();

  let name: string = "";
  let studentIds: string[] = [];

  $: isRegisteredAll = name?.length > 0 && studentIds?.length > 0;
</script>

<Card title="集団授業登録">
  <FormControl label="グループ名">
    <TextInput bind:value={name} />
  </FormControl>
  <FormControl label="生徒（複数選択）" flexDirection="col">
    <MultipleSelect
      bind:value={studentIds}
      options={students.map((v) => ({ value: v.id, text: v.name }))}
    />
  </FormControl>

  <CardActions>
    <SubmitButton disabled={!isRegisteredAll} />
  </CardActions>
</Card>
