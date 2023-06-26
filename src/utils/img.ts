export const getImageBase64 = async (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.src = url
    image.crossOrigin = 'Anonymous'
    image.onload = () => {
      let base64 = imageToBase64(image)
      resolve(base64)
    }
    image.onerror = (err) => {
      console.error('getImageBase64 error', err, url)
      reject(err)
    }
  })
}

export const imageToBase64 = async (img) => {
  const canvas = document.createElement('canvas') //创建一个canvas对象
  canvas.width = img.width
  canvas.height = img.height

  const ctx = canvas.getContext('2d')
  // 把我们创建的图片传入，画布创建完毕
  ctx.drawImage(img, 0, 0, img.width, img.height)
  const ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase()

  const dataURL = canvas.toDataURL('image/jpeg' + ext)
  return dataURL
}
