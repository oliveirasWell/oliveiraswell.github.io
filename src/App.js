import React, {Component} from 'react';
import './App.css';
import FontAwesome from 'react-fontawesome';


import ReactGA from 'react-ga';

ReactGA.initialize('UA-114647620-1');

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
    },
};

const links = {
    indext: {
        link: 'http://www.indext.com.br',
        text: 'indext.com.br'
    }, react_native_redux_firebase_ex: {
        link: 'https://expo.io/@oliveiraswell/react-native-redux-firebase-auto-boilerplate',
        text: 'React-Native-Firebase Automatic Boilplate'
    }, react_redux_firebase_ex: {
        link: 'https://react-redux-firebase-ex.firebaseapp.com/welcome',
        text: 'React-Redux-Firebase Automatic Boilplate'
    }, lattes: {
        text: 'Lattes Curriculum',
        link: 'http://lattes.cnpq.br/5210830815043936'
    }, wakatime: {
        link: 'https://wakatime.com/@oliveiraswell',
        text: 'Wakatime'
    }, bep: {
        link: 'http://indext.com.br/bep/',
        text: 'BEP - Bovine Electronic Platform'
    }, meteor_hosting: {
        link: 'https://blog.tecsinapse.com.br/hospedando-aplicações-meteor-no-aws-f39996a28419',
        text: 'AWS EB Meteor App Hosting (Portuguese Post at Medium)'
    }, five_dollar: {
        link: 'https://blog.tecsinapse.com.br/um-sistema-de-monitoramento-de-temperatura-custando-menos-de-us-5-f488e8aeafc8',
        text: '$5 Temperature logging system (Portuguese Post at Medium)'
    }, react_firebase: {
        link: 'https://blog.tecsinapse.com.br/criando-uma-aplica%C3%A7%C3%A3o-react-firebase-passo-a-passo-9ebc5a8a442f',
        text: 'Creating a React + Firebase web app step by step (Portuguese Post at Medium)'
    },
};
const colors = {
    spotlight: '#ff0065'
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
        alignSelf: 'flex-end',
    },
    spanColored: {
        color: colors.spotlight
    },
};

class App extends Component {

    componentDidMount() {
        ReactGA.pageview(window.location.pathname + window.location.search);
    };

    render() {
        return (
            <div style={{display: 'flex', padding: '1em', flexDirection: 'column'}}>
                <div style={{width: '100%'}}>
                    <div className={'justifyResponsive'} style={{textTransform: 'uppercase', ...styles.flexDiv, flexFlow: 'wrap'}}>

                        <img className={'black-white-img'} src={require('./perfil.jpg')}
                             alt={'Here I\'am'}
                             style={styles.image}
                        />

                        <span style={{color: 'white', fontSize: '3em', fontWeight: 100}}>Wellington</span>
                        <span style={{color: 'white', fontSize: '3em', fontWeight: 900}}>Oliveira</span>
                    </div>
                    <div style={{display: 'flex', padding: '1em', flexDirection: 'row', color: colors.spotlight}}>
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

                    <div className={'resumeContainer'} style={{minWidth: '50%', padding: '1em'}}>
                        <h1>Hi there</h1>
                        <span style={{color: 'white'}}>
                        Thank you to come here, my name is Wellington, I'm a computer engineer graduated from UFMS - Campo Grande - Brazil, MSc student in software engineering at UFMS.
                        </span>

                        <br/>
                        <br/>
                        <span style={{color: 'white'}}>
                            Current I work as Developer at <a className={'link'} href={'https://wwww.tecsinapse.com.br'}>Tecsinapse</a>, also I'm a co-founder (and fullstack developer, software engineer and etc etc etc) of the startup <a
                            className={'link'} href={'https://www.indext.com.br'}>Indext</a>, with focus on capture and analyse data of bovines.
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
                            Want to send a message? Be my gest! Send an <a className={'link'} href="mailto:well.oliveira.snt@gmail.com">e-mail</a>.
                        </span>

                    </div>

                </div>

                <div className={'linkFixedRight'} style={{minWidth: '25%%', padding: '0.5em', textAlign: 'right'}}>
                    <h1 style={{padding: '1em'}}>Links</h1>
                    <div style={{padding: '1em', display: 'flex', flexDirection: 'row', flexFlow: 'wrap'}}>
                        {
                            Object.values(links).map( (link, index) =>
                                <a key={index} rel="noopener noreferrer" className={'link'} style={{margin: '5px'}}
                                   href={link.link} target='_blank'>
                                    <span style={{fontWeight: index%2 === 0 ? '200':'800'}}> {link.text} </span>
                                </a>
                            )
                        }
                    </div>

                </div>

            </div>
        );
    }
}

export default App;
