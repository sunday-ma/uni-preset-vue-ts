const process = require('node:process')
const ci = require('miniprogram-ci')

// 微信小程序构建发布 https://help.aliyun.com/document_detail/202392.html?spm=a2c6h.13066369.question.13.775c819f4jRCbD

/* eslint import/newline-after-import: "off" */
;(async () => {
  const project = new ci.Project({
    appid: 'wx1be960bc06f8c221',
    type: 'miniProgram',
    projectPath: process.cwd(),
    privateKeyPath: `${process.cwd()}/conf/private.wx1be960bc06f8c221.key`,
    // ignores: ['node_modules/**/*'],
    ignores: [''],
  })
  try {
    const uploadResult = await ci.upload({
      project,
      version,
      desc,
      setting: {
        es6: true,
        minify: true,
      },
      onProgressUpdate: console.log,
    })
    console.log(uploadResult)
  }
  catch (error) {
    if (error.errCode === -1)
      console.log('上传成功')

    console.log(error)
    console.log('上传失败')
    process.exit(-1)
  }
})()
