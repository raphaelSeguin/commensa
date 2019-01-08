import React, {Component} from 'react';

export default class RandomMusic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            playing: false,
        }
        this.audio = {};
    }
    getMusicURL(tag) {
        return new Promise( (resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('GET', `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${tag}`);
            req.onreadystatechange = () => {
                if (req.readyState === 4 ) {
                    if (req.status === 200) {
                        //const resArray = JSON.parse(req.responseText).data;
                        resolve(JSON.parse(req.responseText).data[0].preview);
                    } else {
                        reject(new Error(req.statusText));
                    }
                } 
            }
            req.send();
        });
    }

    loadMusic(url) {
        return new Promise( (resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('GET', url);
            req.responseType = 'arraybuffer';
            req.onreadystatechange = () => {
                if (req.readyState === 4 ) {
                    if (req.status === 200) {
                        this.audio.ctx.decodeAudioData(
                            req.response, 
                            (buffer) => {
                                console.log(buffer);
                                if (this.audio.buffSrc) { 
                                    this.stop();
                                }
                                this.audio.buffSrc = this.audio.ctx.createBufferSource();
                                this.audio.buffSrc.buffer = buffer;
                                this.setState({loading: false});
                                resolve();
                            },
                            (err) => {
                                console.log('Error decoding audio\n', err)
                            }
                        );
                    } else {
                        reject(new Error(req.statusText));
                    }
                } 
            }
            req.send();
        })
    }

    getMusic(tag) {
        this.setState({ loading: true });
        this.getMusicURL(tag)
            .then( url => this.loadMusic(url) )
            .then( () => this.play(0.25) )
            .catch( err => console.log(err))
    }
    componentDidMount() {
        this.initAudio();
    }

    initAudio() {
        this.audio.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }

    play(rate) {
        this.audio.ctx.resume();
        this.audio.buffSrc.connect(this.audio.ctx.destination);
        this.audio.buffSrc.playbackRate.value = rate;
        this.audio.buffSrc.loop = true;
        this.audio.buffSrc.start(0);
        this.setState({playing: true})
    }

    stop() {
        this.audio.buffSrc.stop();
        this.setState({loading: false, playing: false});
    }

    randomString(n) {
        return [...Array(n)].map( c => String.fromCharCode(Math.floor(Math.random() * 26) + 65)).join('');
    }

    render() {
      const {loading, playing} = this.state;
      return (
        <div className="random-music">
            { loading ?
            <div>
                <div className="loading-button"></div>
            </div>
            : playing ?
            <div
                onClick={() => this.stop() }>
                <div className="pause-button"></div>
            </div> 
            : 
            <div 
                onClick={() => {
                    this.getMusic(this.randomString(3));
                }}>
                <div className="play-button"></div>
            </div>
            }
            
            <div 
                onClick={ () => {
                    this.getMusic(this.randomString(3));
                }} >
                <div className="next-button"></div>
            </div>
        </div>
      )
    }
  }
  
  