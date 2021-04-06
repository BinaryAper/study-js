import {Component} from '../core/component'
import {Form} from '../core/form'
import {Validators} from "../core/validators";
import {apiService} from "../services/api.service"

export class CreateComponent extends Component
{
    constructor(id)
    {
        super(id);
    }

    init()
    {
        this.$el.addEventListener('submit', submitHandler.bind(this))
        const controls = {
            title: [Validators.required],
            fulltext: [
                Validators.required,
                Validators.minLength(10)
            ]
        }

        this.form = new Form(this.$el, controls)
    }
}

async function submitHandler(event)
{
    event.preventDefault()

    if (this.form.isValid()) {
        const formData = {
            type: this.$el.type.value,
            date: new Date().toLocaleString(),
            ...this.form.value()
        }

        await apiService.createPost(formData)

        this.form.clear()

        console.info('All input valid')

        return
    }

    console.error('Fields is not valid')
}

