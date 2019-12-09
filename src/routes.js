import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Logout from './components/auth/Logout'
import Passwords from './components/Passwords'
import EditPassword from './components/EditPassword'
import CreatePassword from './components/CreatePassword'
import DeletePassword from './components/DeletePassword'

const routes = [
    {
        path: '/',
        component: Passwords,
        name: 'home',
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        props: true,
        meta: {
            requiresVisitor: true,
        }
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        props: true,
        meta: {
            requiresVisitor: true,
        }
    },
    {
        path: '/logout',
        name: 'logout',
        component: Logout,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/edit/:index',
        name: 'edit',
        component: EditPassword,
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/delete/:index',
        name: 'delete',
        component: DeletePassword,
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/create',
        name: 'create',
        component: CreatePassword,
        props: true,
        meta: {
            requiresAuth: true
        }
    }
]

export default routes