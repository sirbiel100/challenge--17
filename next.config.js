/** 
 * @type {import('next').NextConfig}
 */


const nextConfig = {
  output: "export",
}

const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig