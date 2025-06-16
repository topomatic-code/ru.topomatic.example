export default {
    "my:cmd": async (e: Context) => {
        const pt = await e.cadview?.getpoint(e.tr('Укажите тестовую точку'));
        await e.showMessage(pt!.toString(), "error");
    }
}