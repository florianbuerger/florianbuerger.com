
import Spinner from './spin'

// TODO: write something with less suck,
// so many rely on old hacks, flexbox ftw,
// but this still sucks.

const opts = {
  lines: 17, // The number of lines to draw
  length: 2, // The length of each line
  width: 2, // The line thickness
  radius: 17, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  color: '#fff', // #rgb or #rrggbb or array of colors
  opacity: 0.05, // Opacity of the lines
  rotate: 0, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  speed: 1, // Rounds per second
  trail: 58, // Afterglow percentage
  fps: 20, // Frames per second when using setTimeout() as a fallback for CSS
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  className: 'spinner', // The CSS class to assign to the spinner
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: false, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  position: 'absolute' // Element positioning
}

const orientation = (img) =>
  img.width > img.height
    ? 'landscape'
    : 'portrait'

export default class Lightbox {
  constructor(el) {
    this.el = $(el)
    this.el.on('click', e => this.hide())
  }

  show(url) {
    if (!url) throw new Error('url required')

    const spinner = new Spinner(opts)
    const img = $('<img/>')
    const el = this.el
    var spin

    const id = setTimeout(() => {
      spin = spinner.spin().el
      el.append(spin)
    }, 250)

    el.addClass('show').find('img').remove()

    img.on('load', () => {
      clearTimeout(id)

      if (spin) {
        spinner.stop()
        $(spin).remove()
      }

      img.attr('class', orientation(img[0]))
      el.append(img)
    })

    img.attr('src', url)

  }

  hide() {
    this.el.removeClass('show')
  }

  src() {
    return this.el.find('img').attr('src')
  }
}

