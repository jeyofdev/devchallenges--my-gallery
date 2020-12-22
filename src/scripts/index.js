import Counter from './modules/Counter';
import '../styles/app.scss';

const postsNumber = document.getElementById('posts-number');
Counter(postsNumber, 100, 3000);

const followersNumber = document.getElementById('followers-number');
Counter(followersNumber, 2242, 6000);

const followingNumber = document.getElementById('following-number');
Counter(followingNumber, 1432, 4500);
