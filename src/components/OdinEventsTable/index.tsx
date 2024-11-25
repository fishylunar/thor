import { OdinEvent, OdinEvents } from '@/logic/Odin';
import { Table, TableBody, TableRow, TableCell, TableHeader } from "@/components/ui/table";

interface OdinEventsTableProps {
  events: OdinEvents | null;
}

export function OdinEventsTable({ events }: OdinEventsTableProps) {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Responder</TableCell>
            <TableCell>Station</TableCell>
            <TableCell>Timestamp</TableCell>
            <TableCell>Message</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events && events.map((odinEvent: OdinEvent) => (
            <TableRow key={odinEvent.timestamp}>
              <TableCell>{odinEvent.responder}</TableCell>
              <TableCell>{odinEvent.station}</TableCell>
              <TableCell>{odinEvent.timestamp}</TableCell>
              <TableCell>{odinEvent.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
