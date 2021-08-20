import React from 'react';
import { makeStyles } from '@material-ui/styles';



import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';


import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        marginTop: 20,
        width: '350px',
        height: '600px'
    },
    media: {
        height: '50px',
        paddingTop: '56.25%', // 16:9
        width: '350px',


    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        // transition: theme.transitions.create('transform', {
        //     duration: theme.transitions.duration.shortest,
        // }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    text1: {
        marginTop: '20px',
        fontSize: '20px',
        color: '#4c4d4f',
        fontWeight: 700
    },
    text2: {
        marginTop: '20px'
    },
    cards: {
        display: 'flex',
        justifyContent: 'space-around',
        marginLeft: '90px',
        marginRight: '90px',
        marginTop: '20px'
    },
    news: {
        textAlign: 'left',
        marginLeft: '130px',
        fontSize: '50px',
        color: '#000000',
        fontWeight: 700,
    }
}))

const News = () => {
    const classes = useStyles((theme) => ({
        news: {
            fontSize: '40px'
        }

    }))
    return (
        <div className={classes.container}>
            <div className={classes.news}>НОВОСТИ</div>
            <div className={classes.cards}>
                <div>
                    <Card className={classes.root}>

                        {/* <CardHeader
                            // title={item.title}
                            // subheader={item.type}
                        ><p></p></CardHeader> */}
                        <CardMedia
                            className={classes.media}
                            image='https://static.tildacdn.com/tild3461-3763-4061-a331-333436663837/7.jpg'

                            title="Beautiful"
                        />
                        <CardContent>
                            {/* <Typography variant="body2" color="textSecondary" component="p">
                                {item.description.substring(0, 250)}
                            </Typography> */}
                        </CardContent>


                        <Typography className={classes.text1} variant="body2" color="textSecondary">
                            Тимур Файзиев готов инвестировать в бизнес-идею
                            до 100 000 долларов и стать наставником!
                        </Typography>
                        <CardContent>
                            <Typography className={classes.text2} variant="body2" color="textSecondary">

                                Строительная компания Elite House представляет социальный проект «Бизнес Өкүл Ата», который направлен на развитие предпринимательства и поддержку новых бизнес-проектов в Кыргызской Республике.

                            </Typography>
                        </CardContent>
                    </Card >
                </div>
                <div>
                    <Card className={classes.root}>

                        {/* <CardHeader
                            // title={item.title}
                            // subheader={item.type}
                        ><p></p></CardHeader> */}
                        <CardMedia
                            className={classes.media}
                            image='https://static.tildacdn.com/tild3464-6237-4964-b064-323366613461/new.png'

                            title="Beautiful"
                        />
                        <CardContent>
                            {/* <Typography variant="body2" color="textSecondary" component="p">
                                {item.description.substring(0, 250)}
                            </Typography> */}
                        </CardContent>


                        <Typography className={classes.text1} variant="body2" color="textSecondary">
                            Elite House разыгрывает квартиру!
                        </Typography>
                        <CardContent>
                            <Typography className={classes.text2} variant="body2" color="textSecondary">

                                Строительная компания Elite House запускает грандиозную акцию! Приобретая любую недвижимость, вы получаете один лотерейный билет, который будет участвовать в розыгрыше 1-комнатной квартиры в жилом комплексе "Эл Классик Плюс". И это еще не всё! Новый iPhone-11 ждет каждого покупателя в период акции!

                            </Typography>
                        </CardContent>
                    </Card >
                </div>
                <div>
                    <Card className={classes.root}>

                        {/* <CardHeader
                            // title={item.title}
                            // subheader={item.type}
                        ><p></p></CardHeader> */}
                        <CardMedia
                            className={classes.media}
                            image='https://static.tildacdn.com/tild3966-6562-4631-a632-336530656666/51.jpg'

                            title="Beautiful"
                        />
                        <CardContent>
                            {/* <Typography variant="body2" color="textSecondary" component="p">
                                {item.description.substring(0, 250)}
                            </Typography> */}
                        </CardContent>


                        <Typography className={classes.text1} variant="body2" color="textSecondary">
                            Жилой квартал New York City: американская мечта в Бишкеке!
                        </Typography>
                        <CardContent>
                            <Typography className={classes.text2} variant="body2" color="textSecondary">

                                Компания Elite House рада представить вашему вниманию новый жилой квартал бизнес-класса New York City, расположенный в южной части Бишкека, в районе улиц Сухэ-Батора и Аалы Токомбаева.


                            </Typography>
                        </CardContent>
                    </Card >
                </div>

            </div>
        </div>
    );
};

export default News;