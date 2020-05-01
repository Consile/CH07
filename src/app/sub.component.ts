import { Component } from "@angular/core"
import { TestAService } from './testa.service';

@Component({
    selector: 'app-sub',
    templateUrl: './sub.component.html',
    styleUrls: ['./sub.component.css'],
    providers: [TestAService]
})

export class SubComponent {
    title: string;

    constructor(private aService: TestAService) {
        this.aService.setTitle('子组件');
        this.title = this.aService.getTitle();

    }
}