import store from '@/store';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({
    dynamic: true,
    store,
    name: 'Home',
    namespaced: true,
})
export default class HomeModule extends VuexModule {
    private name: string = '';

    get nameHome() {
        return this.name;
    }

    @Mutation
    public setName(name: string): void {
        this.name = name;
    }

}
