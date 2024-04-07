<script lang="ts">
  import Card from "../../card/index.svelte";
  import CardActions from "../../card/card-actions.svelte";
  import { GRADES, isGrade, type Grade } from "../../../utils/grades";
  import FormControl from "../../form/index.svelte";
  import TextInput from "../../form/text-input.svelte";
  import NumberInput from "../../form/number-input.svelte";
  import Select from "../../form/select.svelte";
  import SubmitButton from "../../form/submit-button.svelte";
  import { serverFunctions } from "../../../lib/utils/server-script";

  const { submitStudent } = serverFunctions;

  let name: string = "";
  let grade: Grade = "小1";
  let comiruId: number = 0;

  $: isRegisteredAll =
    name !== undefined &&
    name?.length > 0 &&
    grade !== undefined &&
    isGrade(grade) &&
    comiruId !== undefined;
</script>

<Card title="生徒登録">
  <FormControl label="氏名">
    <TextInput bind:value={name} />
  </FormControl>
  <FormControl label="学年">
    <Select
      bind:value={grade}
      options={GRADES.map((v) => ({ value: v, text: v }))}
    />
  </FormControl>
  <FormControl label="Comiru ID">
    <NumberInput bind:value={comiruId} />
  </FormControl>

  <CardActions>
    <SubmitButton
      disabled={!isRegisteredAll}
      onSubmit={async () => submitStudent(name, grade, comiruId)}
    />
  </CardActions>
</Card>
