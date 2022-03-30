import { vlad } from './example'
import showInfo from './example'
import './styles/main.scss'
import exampleImg from './assets/example.svg'

const exlImg = document.getElementById('exlImg')
exlImg.src = exampleImg
exlImg.width = '200'

const exlTitle = document.getElementById('exlTitle')
exlTitle.textContent = showInfo(vlad)
