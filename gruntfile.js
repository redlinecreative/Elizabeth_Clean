const fs = require('fs');

//======================================//

module.exports = grunt => {

  grunt.initConfig({
    watch: {
      all: {
        files: [
            'layout/*.liquid',
            'sections/*.liquid',
            'snippets/*.liquid',
            'templates/*.liquid',
            'templates/customers/*.liquid',
        ],
        tasks: ['tailwind'],
        options: { livereload: false }
      },
    },

    exec: {
        tailwind: { cmd:'npx tailwindcss -i src/tailwind.css -o assets/application.css', async: false },
    }

  });

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');
  
  //======================================//

  grunt.registerTask('tailwind','Compile Tailwind files', () => {
    grunt.task.run(['exec:tailwind']);
  })

  //======================================//


}
