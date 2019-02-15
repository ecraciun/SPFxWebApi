import * as React from "react";
import IPerson from "../../models/IPerson";
import PeopleService from "../../services/PeopleService";

export interface IPeopleListState {
    people: IPerson[];
}

export default class PeopleList extends React.Component<IPeopleListState, IPeopleListState> {

    constructor(props: IPeopleListState) {
        super(props);
        this.state = {
            people: []
        };
    }

    private renderPeople() {
        let result = [];
        if (this.state.people !== undefined && this.state.people.length > 0) {
            for (var i = 0; i < this.state.people.length; i++) {
                result.push(
                    <div>
                        <div>First name: {this.state.people[i].firstName}</div>
                        <div>Last name: {this.state.people[i].lastName}</div>
                        <div>Email: {this.state.people[i].email}</div>
                        <div>City: {this.state.people[i].city}</div>
                        <hr />
                    </div>
                );
            }
        }
        return result;
    }

    private loadPeople() {
        var peopleService = new PeopleService();
        peopleService.getAll().then((result: IPerson[]) => {
            this.setState({people: result});
        });
    }

    public render(): JSX.Element {
        return (
            <div>
                <div>
                    Here are some random people:
                </div>
                <div>
                    {this.renderPeople()}
                </div>
                <div>
                    <button onClick={() => this.loadPeople()}>Load them people!</button>
                </div>
            </div>
        );
    }
}