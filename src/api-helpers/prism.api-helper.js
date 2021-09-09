import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-scss'

class PrismApiHelper {
  initPrism() {
    window.Prism = window.Prism || {}
    window.Prism.manual = true
    Prism.highlightAll()
  }
}

export default new PrismApiHelper()