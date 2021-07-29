import React, { Component } from 'react'
import Particles from 'react-particles-js'
import './App.css'
import Navegation from './components/Navegation/Navegation.js'
import Logo from './components/Logo/Logo.js'
import ImgLinkForm from './components/ImgLinkForm/ImgLinkForm.js'
import Rank from './components/Rank/Rank.js'
import bubble from './components/bubble.png'
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js'
import Clarifai from 'clarifai'
import Signin from './components/Signin/Signin.js'
import Register from './components/Register/Register.js'

const app = new Clarifai.App({
  apiKey: 'aa5b0278252c467b929ac51d3e2acd31'
});

const particlesOptions = {
  particles: { number: { value: 12, density: { enable: true, value_area: 800 } }, color: { value: "#e6f7ef" }, shape: { type: "image", image: { src: bubble, height: 100, width: 100 }, stroke: { width: 0, color: "#000" }, polygon: { sides: 10 }, }, opacity: { value: 0.8, random: true, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } }, size: { value: 100, random: true, anim: { enable: true, speed: 10, size_min: 40, sync: false } }, line_linked: { enable: false, distance: 200, color: "#ffffff", opacity: 1, width: 2 }, move: { enable: true, speed: 6.3, direction: "top", random: true, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } } }, interactivity: { detect_on: "canvas", events: { onhover: { enable: false, mode: "grab" }, onclick: { enable: false, mode: "push" }, resize: true }, modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } } }, retina_detect: true
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imgUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }


  calculateFaceLocation = (data) => {
    const faceCoord = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('imageinput')
    const width = Number(image.width)
    const height = Number(image.height)
    console.log(width, height)
    return {
      leftCol: faceCoord.left_col * width,
      topRow: faceCoord.top_row * height,
      rightCol: width - (faceCoord.right_col * width),
      bottomRow: height - (faceCoord.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box)
    this.setState({ box: box })
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = () => {
    this.setState({ imgUrl: this.state.input })

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response))
        .catch(err => console.log('Erro : ', err))
      )
  }

  onRouteChange = (route) => {
    if (route === 'signout') this.setState ({isSignedIn: false})
    else if (route === 'home') this.setState ({isSignedIn : true})
    this.setState({ route: route })
  }

  render() {
    const { isSignedIn, imgUrl, route, box } = this.state 
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navegation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route === 'home' ?
          <div>
            <Logo />
            <Rank />
            <ImgLinkForm onButtonSubmit={this.onButtonSubmit} onInputChange={this.onInputChange} />
            <FaceRecognition box={box} imgUrl={imgUrl} />
          </div>
          :
          (
            route === 'signin' || route === 'signout' ?
              <div>
                <Logo />
                <Signin onRouteChange={this.onRouteChange} />
              </div>
              :
              <div>
                <Logo />
                <Register onRouteChange={this.onRouteChange} />
              </div>
          )


        }

      </div>
    );
  }
}

export default App;
