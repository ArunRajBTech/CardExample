import { JsonProperty } from "json-object-mapper";

export class Item {

    @JsonProperty()
    public id!: string;

    @JsonProperty()
    public title!: string;

    @JsonProperty()
    public content!: string;

    @JsonProperty()
    public image!: string

    constructor() {
        this.id = '';
        this.title = '';
        this.content = '';
        this.image = '';
    }
}