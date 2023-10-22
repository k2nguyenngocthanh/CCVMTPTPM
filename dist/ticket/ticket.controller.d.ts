import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
export declare class TicketController {
    private readonly ticketService;
    constructor(ticketService: TicketService);
    create(createTicketDto: CreateTicketDto): Promise<string>;
    findAll(): Promise<any>;
    remove(id: string): Promise<string>;
}
