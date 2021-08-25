import React from 'react';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: '#4c4d4f',
        display: 'flex',
        justifyContent: 'space-around',
        width: '100vw',
        height: '500px',

        // marginLeft: '30px',
        // marginRight: '30px'
    },
    block1: {
        alignItems: 'center',
        marginTop: '30px',
        textAlign: 'left',



    },
    text1: {
        marginTop: '25px',
        color: '#d9d9d9',
        fontWeight: 300,
        fontSize: '15px'
    },
    text2: {
        color: '#d9d9d9',
        fontWeight: 700,
        fontSize: '18px',
        marginBottom: '30px',
        marginTop: '40px'
    },
    text3: {
        marginTop: '50px',
        color: '#d9d9d9',
        fontWeight: 300,
        fontSize: '15px'
    },
    image: {
        marginTop: '380px'
    },
    a: {
        textDecoration: 'none',
        color: '#d9d9d9 !important',
    }
}))

const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.footer}>

            <div className={classes.block1}>
                <div className={classes.text2}> <a href="https://elitehouse.kg/about" className={classes.a}> О нас</a></div>
                <div className={classes.text1}> <a href="https://elitehouse.kg/media" className={classes.a}> Новости </a></div>
                <div className={classes.text1}> <a href="https://elitehouse.kg/clients" className={classes.a}>Забота о клиентах</a></div>
                <div className={classes.text1}> <a href="https://elitehouse.kg/clients" className={classes.a}>Управляющая компания</a></div>
                <div className={classes.text1}> <a href="https://elitehouse.kg/oplata" className={classes.a}>Способы оплаты</a></div>
                <div className={classes.text1}> <a href="https://elitehouse.kg/invest" className={classes.a}>Агентская программа</a></div>
                <div className={classes.text1}> <a href="https://elitehouse.kg/invest" className={classes.a}>Инвесторам</a></div>
                <div className={classes.text1}> <a href="https://barter.kg" className={classes.a}>Barter.kg</a></div>
                <div className={classes.text1}> <a href="https://elitehouse.kg/about" className={classes.a}>Вакансии</a></div>
            </div>
            <div className={classes.block1}>
                <div className={classes.text2}>Объекты</div>
                <div className={classes.text1}>Александрия</div>
                <div className={classes.text1}>Асанбай Ордо</div>
                <div className={classes.text1}>Итальянский квартал</div>
                <div className={classes.text1}>Континенталь</div>
                <div className={classes.text1}>Эл Классик</div>
                <div className={classes.text1}>Эл Классик Плюс</div>
                <div className={classes.text1}>Коммерческая недвижимость</div>
                <div className={classes.text1}>New York City</div>
            </div>
            <div className={classes.block1}>
                <div className={classes.text2}>Контакты</div>
                <div className={classes.text3}>
                    Головной офис
                    <br /> г.Бишкек, ул. Абдрахманова, 170/1
                    <br /> бизнес-центр «Ордо», 7 этаж
                    <br /> info@elitehouse.kg
                </div>
                <div className={classes.text3}>
                    Отдел продаж:
                    <br /> 0 (555) 555-555
                </div>
                <div className={classes.text3}>
                    Почта для резюме:
                    <br /> hr@elitehouse.kg
                </div>
            </div>
            <div className={classes.image}>
                <img style={{
                    width: '160px',
                    height: '70px'
                }} src="https://static.tildacdn.com/tild3438-3031-4134-b363-383966353561/elite-house-logo-whi.png" alt="" />
            </div>

        </div>
    );
};

export default Footer;