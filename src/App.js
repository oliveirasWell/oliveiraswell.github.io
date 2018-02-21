import React, {Component} from 'react';
import './App.css';
import FontAwesome from 'react-fontawesome';

const socialLinks = {
    twitter: {
        name: 'Twitter',
        icon: 'twitter',
        link: 'https:/twitter.com/oliveiraswell'
    },
    facebook: {
        name: 'Facebook',
        icon: 'facebook',
        link: 'https://www.facebook.com/well.oliveira.snt'
    },
    medium: {
        name: 'Medium',
        icon: 'medium',
        link: 'https://medium.com/@oliveiraswell'
    },
    linkedin: {
        name: 'linkedin',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/wellington-de-oliveira-dos-santos-5729737b/'
    },
    github: {
        name: 'Github',
        icon: 'github',
        link: 'https://github.com/oliveirasWell/'
    },
    instagram: {
        name: 'Instagram',
        icon: 'instagram',
        link: 'https://www.instagram.com/oliveiraswell/'
    },
    gitlab: {
        name: 'Gitlab',
        icon: 'gitlab',
        link: 'https://gitlab.com/oliveiraswell'
    }
};

const styles = {
    marginRight20: {marginRight: '20px'},
    image: {
        width: '3em',
        height: '3em',
        borderRadius: '50%',
        backgroundPosition: 'center',
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        margin: '0 5px 5px',
    },
    flexDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'flex-end',
    },
    spanColored: {
        color: '#ff0065'
    },
};


const images = [
    {
        link: 'https://i.imgur.com/O7o9vbr.jpg',
        size: '45%'
    }, {
        link: 'https://i.imgur.com/4V38bJJ.jpg',
        size: '45%'
    },
];


class App extends Component {
    render() {
        return (
            <div style={{display: 'flex', padding: '1em', flexDirection: 'column'}}>
                <div style={{width: '100%'}}>
                    <div style={{textTransform: 'uppercase', ...styles.flexDiv}}>

                        <img className={'black-white-img'} src={require('./perfil.jpg')}
                             alt={'Here I\'am'}
                             style={styles.image}
                        />

                        <span style={{color: 'white', fontSize: '3em', fontWeight: 100}}>Wellington</span>
                        <span style={{color: 'white', fontSize: '3em', fontWeight: 900}}>Oliveira</span>
                    </div>
                    <div style={{display: 'flex', padding: '1em', flexDirection: 'row', color: '#ff0065'}}>
                        <span style={styles.marginRight20}>Fullstack Dev</span>
                        <span style={styles.marginRight20}>Computer Engineer</span>
                        <span style={styles.marginRight20}>MSc student in software engineering</span>
                    </div>
                </div>

                <div style={{display: 'flex', padding: '1em', flexDirection: 'row'}}>

                    <div style={{display: 'flex', padding: '1em', flexDirection: 'column', maxWidth: '15%', flex: '1'}}>
                        {
                            Object.values(socialLinks).map((item, index) => {
                                return <div key={index}>
                                    <a href={item.link} className={'link'}>
                                        <FontAwesome name={item.icon} size={'2x'} style={{margin: '10px'}}/>
                                        {item.name}
                                    </a>
                                </div>
                            })
                        }
                    </div>

                    <div style={{minWidth: '50%', maxWidth: '50%', padding: '1em'}}>
                        <h1>Hi there</h1>
                        <span style={{color: 'white'}}>
                        Thank you to come here, my name is Wellington, I'm a computer engineer graduated from UFMS - Campo Grande - Brazil, MSc student in software engineering at UFMS.
                        </span>

                        <br/>
                        <br/>
                        <span style={{color: 'white'}}>
                            Current I work as Developer at <a className={'link'} href={'https://wwww.tecsinapse.com.br'}>Tecsinapse</a>, also I'm a co-founder (and fullstack developer, software engineer and etc etc etc) of the startup <a
                            className={'link'} href={'www.indext.com.br'}>Indext</a>, with focus on capture and analyse data of bovines.
                        </span>

                        <br/>
                        <br/>
                        <span style={{color: 'white'}}>
                            In my current interests are <span style={styles.spanColored}>React</span>, <span style={styles.spanColored}>React Native</span>, <span style={styles.spanColored}>Code Minering</span>, <span
                            style={styles.spanColored}>Machine Learning</span>, <span style={styles.spanColored}>Tests automation</span> and <span style={styles.spanColored}>General enviroment automation</span> from scripts to start app on startup to residential automation.
                        </span>

                        <br/>
                        <br/>
                        <span style={{color: 'white'}}>
                            Want to send a message? Be my gest! Send an <a className={'link'} href="mailto:webmaster@example.com">e-mail</a>.
                        </span>

                    </div>

                </div>

                <div style={{minWidth: '25%%', maxWidth: '25%', padding: '0.5em', position: 'absolute', right: 0, textAlign: 'right'}}>
                    <h1 style={{padding: '1em'}}>Links</h1>
                    <div style={{padding: '1em', display: 'flex', flexDirection: 'row', flexFlow: 'wrap'}}>

                        <a className={'link'} style={{margin: '5px', fontWeight: '100'}} href='http://www.indext.com.br' target='_blank'>
                            <span style={{fontWeight: '100'}}> indext.com.br</span>
                        </a>
                        <a className={'link'} style={{margin: '5px', fontWeight: '500'}} href='https://react-redux-firebase-ex.firebaseapp.com/welcome' target='_blank'>
                            <span> React-Redux-Firebase Automatic Boilplate</span>
                        </a>
                        <a className={'link'} style={{margin: '5px', fontWeight: '800'}} href='https://expo.io/@oliveiraswell/react-native-redux-firebase-auto-boilerplate' target='_blank'>
                            <span style={{fontWeight: '800'}}> React Native Boilerplate</span>
                        </a>
                        <a className={'link'} style={{margin: '5px'}} href='http://lattes.cnpq.br/5210830815043936' target='_blank'>
                            <span style={{fontWeight: '100'}}> Lattes curriculum </span>
                        </a>
                    </div>

                </div>

            </div>
        );
    }
}

export default App;
