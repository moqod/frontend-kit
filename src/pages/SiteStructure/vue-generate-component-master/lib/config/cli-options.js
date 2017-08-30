export default [{
    name: 'help',
    type: Boolean,
    group: "options",
    description: 'help'
  }, 
  {
    name: 'html',
    type: String,
    group: "options",
    description: 'set the default html templates'
  }, {
    name: 'style',
    type: String,
    group: "options",
    description: 'set the default style file'
  },{
    name: 'component',
    alias: 'c',
    type: String,
    group: "options",
    description: 'generate Vue js component',
    defaultOption: true
  },{
    name: 'directive',
    alias: 'd',
    type: String,
    group: "options",
    description: 'generate Vue js directive'
  },
  {
    name: 'single',
    alias: 's',
    type: String,
    group: "options",
    description: 'generate Vue js component single file'
  },
    {
    name: 'folder',
    alias: 'f',
    type: Boolean,
    group: "options",
    description: 'generate Vue js component single file inside new folder'
  }

]
