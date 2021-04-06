import {HeaderComponent} from './components/header.component'
import {NavigationComponent} from './components/navigation.component'
import {PostsComponent} from './components/posts.component'
import {FavoriteComponent} from './components/favorite.component'
import {CreateComponent} from './components/create.component'

new HeaderComponent('header')
const navigation = new NavigationComponent('navigation');

const posts = new PostsComponent('posts')
const favorites = new FavoriteComponent('favorite')
const create = new CreateComponent('create')

navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite', component: favorites}
])