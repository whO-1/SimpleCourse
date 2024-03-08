export default class ObjectUpdater {
    constructor(funUpdate, funTrigger, funUpdateArgs, funTriggerArgs, initState = "" ) {
        this.state = initState;
        this.funUpdate = funUpdate;
        this.funTrigger = funTrigger;
        this.funUpdateArgs = funUpdateArgs;
        this.funTriggerArgs = funTriggerArgs;
    }
    update () {
        const newState = this.funUpdate(this.funUpdateArgs);
        if (this.state !== newState ) {
            this.funTrigger(newState, this.funTriggerArgs);
            this.state = newState;
        }
        return;
    };
}