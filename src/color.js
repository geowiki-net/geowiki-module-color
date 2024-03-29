module.exports = {
  id: 'color',
  version: '1.0.0'
}

const Twig = require('twig')
const colorInterpolate = require('color-interpolate')

Twig.extendFunction('colorInterpolate', function (map, value) {
  const colormap = colorInterpolate(map)
  return colormap(value)
})
