<template>
  <footer>
        <div class="state">
            <p class="header">دارندگان</p>
            <p>توصعه سال ۲۰۲۰</p>
            <p>ایران</p>
            <p class="end">حق کپی ۲۰۲۲</p>
        </div>
        <div class="office">
            <p class="header">اداره</p>
            <p>کردستان مریوان</p>
            <p>آذر ۱۶، پلاک ۴</p>
            <div id="map" class="end link" ><p>نقشه</p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></div>
        </div>
        <div class="connect">
            <p class="header">صفحه های اجتماعی</p>
            <div class="link"><p>اینستاگرام</p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></div>
            <div class="link"><p>تویتر</p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></div>
            <div class="link"><p>فیسبوک</p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></div>
        </div>
        <div class="contact">
            <p class="header">ارتباط با ما</p>
            <div class="number">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg><p>+۹۸ ۰۹۱۸ ۵۶۶ ۲۰۹۴</p></div>
            <div class="email">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                </svg><p>Khaledisoran1999@gmail</p>
            </div>
        </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>

footer {
    --text: #f4f4f4;
    --text-inverse: #d0e8f2;
    --background: #475a5e;
    --spacing: 1em;


    display: flex;
    justify-content: space-between;
    align-items: start;
    font-family: sans-serif, 'Segoe UI', Tahoma, Geneva, Verdana;
    max-width: 100%;
    padding: var(--spacing) calc(var(--spacing) * 2);
    background: var(--background);
    
    font-size: 20px;

    direction: rtl;
}


svg {
    fill: var(--text-inverse);
}

/* ============link=========== */

.link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
    min-width: 100px;
    max-width: 120px;
}

.link::after {
    content: "";
    position: absolute;
    right: 100%;
    left: 0;
    bottom: 0.05em;
    border-top: 1px solid var(--text-inverse);
    transition: right 150ms ease-out;
}

.link:hover::after {
    right: 0;
}








/* ============state============ */

.state .header {
    font-weight: 900;
    font-size: 0.9em;
    color: var(--text);
    margin: var(--spacing) 0;
}

.state p{
    font-size: 0.8em;
    color: var(--text-inverse);
    margin: 0.05em 0;
}

.state .end {
    margin: var(--spacing) 0;
}








/* ==============office============ */

.office .header {
    font-weight: 900;
    font-size: 0.9em;
    color: var(--text);
    margin: var(--spacing) 0;
}

.office p{
    font-size: 0.8em;
    color: var(--text-inverse);
    margin: 0.05em 0;
}

.office .end {
    margin: var(--spacing) 0;
}








/* ==============connect=============== */

.connect .header {
    font-weight: 900;
    font-size: 0.9em;
    color: var(--text);
    margin: var(--spacing) 0;
}

.connect p{
    font-size: 0.8em;
    color: var(--text-inverse);
    margin: 0.05em 0;
}

.connect .end {
    margin: var(--spacing) 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
}








/* ===========contact========== */
.contact .header {

    font-weight: 900;
    font-size: 0.9em;
    color: var(--text);
    margin: var(--spacing) 0;
}

.contact p{
    font-size: 0.8em;
    color: var(--text-inverse);
}

.contact .number p {
    margin-left: 0.5em;
    text-decoration: underline;
    direction: ltr;
}

.contact .email p {
    margin-left: 0.5em;
    text-decoration: underline;
    direction: ltr;
}

.contact div{
    margin: 0.05em 0;
    display: flex;
}

</style>