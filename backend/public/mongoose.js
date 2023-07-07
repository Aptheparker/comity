document.getElementById('user-form').addEventListener('submit', async (e) =>
{
    e.preventDefault();
    const name = e.target.name.value;
    const studentID = e.target.studentID.value;
    const phoneNumber = e.target.phoneNumber.value;
    const sex = e.target.sex.value;

    try
    {
        await axios.post('/users', { name, studentID, phoneNumber, sex });
    }
    catch (err)
    {
        console.error(err);
    }
});