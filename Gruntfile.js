module.exports = function(grunt) {
  grunt.initConfig({
    s3: {
      options: {
        bucket: 'ragesh-grunt-s3-test'
      },
      dev: {
        upload: [{
          src: "test/file1.txt",
          dest: "test.zip",
          options: { gzip: true }
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-s3');
};
