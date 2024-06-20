const tools = [
  {
    icon: '/src/assets/images/text.svg',
    title: '文字',
    limit: 10,
    componentName: 'Text',
    componentSchema: {
      name: '文字',
      componentName: 'Text',
      configName: 'TextConfig',
      // 面板
      settings: {
        content: '这是一个标题文本',
        style: {
          'text-align': 'left',
          'font-size': '14px',
          'font-weight': 'bold',
          color: '#333' // 完全符合style css属性驼峰书写
        }
      }
    }
  }
];

export default tools;
