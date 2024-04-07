<script lang="ts">
    import Navbar from "../components/navbar/index.svelte";
    import TeacherRegisterForm from "../components/features/teacher-register-form/teacher-register-form.svelte";
    import StudentRegisterForm from "../components/features/student-register-form/student-register-form.svelte";
    import GroupRegisterForm from "../components/features/group-register-form/group-register-form.svelte";
</script>

<Navbar title="ダッシュボード" />
<div class="p-4 flex md:flex-row flex-wrap flex-col gap-4">
    <TeacherRegisterForm />
    <StudentRegisterForm />
    <GroupRegisterForm />
</div>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>
