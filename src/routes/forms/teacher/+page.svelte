<script lang="ts">
    import Preview from "./preview.svelte";
    import CardBody from "$components/card/body.svelte";
    import CardActions from "$components/card/actions.svelte";
    import FormControl from "$components/form/index.svelte";
    // import TextInput from "../../form/text-input.svelte";
    // import ColorPicker from "svelte-awesome-color-picker";
    // import SubmitButton from "../../form/submit-button.svelte";
    // import { serverFunctions } from "../../../lib/utils/
    // import { type ColorCode, isColorCodeimport , ColorCode } from "$root/lib/color/Brand";

    const { submitTeacher } = serverFunctions;

    const initialColor = Math.floor(Math.random() * 0x1000000)
        .toString(16)
        .padStart(6, "0");

    let personalColor: ColorCode = `#${initialColor}`;
    let familyName: string = "";
    let givenName: string = "";

    $: isRegisteredAll =
        familyName.length > 0 &&
        givenName.length > 0 &&
        isColorCode(personalColor);
    $: userName = `${familyName}${givenName}`;
</script>

<CardBody title="講師登録">
    <div class="flex flex-row gap-4">
        <FormControl label="氏">
            <TextInput bind:value={familyName} />
        </FormControl>
        <FormControl label="名">
            <TextInput bind:value={givenName} />
        </FormControl>
    </div>

    <FormControl label="配色">
        <TextInput bind:value={personalColor} />
        <ColorPicker
            bind:hex={personalColor}
            isAlpha={false}
            label=""
            isTextInput={false}
        />
    </FormControl>

    <Preview {personalColor} {userName} show={isRegisteredAll} />

    <CardActions>
        <SubmitButton
            disabled={!isRegisteredAll}
            onSubmit={async () =>
                submitTeacher(familyName, givenName, personalColor)}
        />
    </CardActions>
</CardBody>
