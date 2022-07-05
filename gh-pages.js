import { publish } from 'gh-pages';

publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/Taylor13713/taylor-portfolio.git', // Update to point to your repository
    user: {
      name: 'Taylor Li', // update to use your name
      email: 'tli13713@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);