import  Children  from './Children';


    const FirstComponent = () => {

        let myWidth="500px";

    return(
    <div class="first">
        <h1>Первый текст</h1>
        <p>
            Текст два
        </p>
        <Children text="Текст который хранится в пропсах" width={myWidth}/>
    </div>
    );
}

export default FirstComponent