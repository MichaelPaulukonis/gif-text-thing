import P5 from 'p5/lib/p5.min.js'
import sketch from './sketch'
import randomPost from './sketch/tumblr-random.js'
import TextManager from './sketch/TextManager'
import corpus from './sketch/corpus.default'
import GuiControl from './sketch/gui'

const textManager = new TextManager()
let newCorpus = []
const gc = new GuiControl()

const seed = Math.random()
gc.params.noiseSeed = seed
console.log(`seed: ${seed}`)

const theStuff = () => {
  const builder = (p5Instance) => {
    textManager.randomPost = randomPost // uh.... if needed
    sketch({ p5Instance, textManager, corpus: newCorpus, config: gc.params, gui: gc })
  }

  const launch = () => randomPost()
    .then((texts) => {
      newCorpus = corpus.concat(texts)
    })
    .finally((_) => {
      new P5(builder) // eslint-disable-line no-new
    })

  launch()
}

theStuff()
