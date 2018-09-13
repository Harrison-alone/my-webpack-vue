import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/hello.vue';
import World from '../components/world.vue';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'hello',
        component: Hello
    }, {
        path: '/world',
        name: 'world',
        component: World
    }]
})