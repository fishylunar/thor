import { OdinEvent, OdinEvents } from '@/logic/Odin';
import { Table, TableBody, TableRow, TableCell, TableHeader } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

interface OdinEventsTableProps {
  events: OdinEvents | null;
}

export function OdinEventsTable({ events }: OdinEventsTableProps) {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow className='font-black'>
            <TableCell>Responder</TableCell>
            <TableCell>Station</TableCell>
            <TableCell>Message</TableCell>
            <TableCell>Timestamp</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody className='divide-y'>
        {events?.Events ? (
            events.Events.map((odinEvent: OdinEvent) => (
              <TableRow key={odinEvent.timestamp}>
                <TableCell>{odinEvent.responder}</TableCell>
                <TableCell>{odinEvent.station}</TableCell>
                <TableCell>{odinEvent.message}</TableCell>
                <TableCell>{odinEvent.timestamp}</TableCell>
              </TableRow>
            ))
          ) : (
            Array(20)
              .fill(null)
              .map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton className="w-20 h-4" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-20 h-4" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-20 h-4" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-40 h-4" />
                  </TableCell>
                </TableRow>
              ))
          )}
        </TableBody>
      </Table>
    </>
  );
}
