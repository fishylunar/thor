// Define Odin event type
interface OdinEvent {
  responder: string;
  station: string;
  timestamp: string;
  message: string;
}
type OdinEventTimestamp = string | undefined;
// array of odin events
type OdinEventsArray = OdinEvent[];

type OdinEvents = {
  Events: OdinEventsArray;
  Timestamp: OdinEventTimestamp;
};

export type { OdinEvent, OdinEvents, OdinEventsArray };

/**
 * Fetches and parses emergency response events from ODIN's 112puls service
 * @returns Promise<OdinEvents> Array of parsed emergency events
 * @throws Error if the fetch fails or if parsing fails
 */
export async function getEvents(): Promise<OdinEvents> {
  const url =
    "https://corsproxy.io/?" + // CORS Proxy xd
    encodeURIComponent("http://www.odin.dk/112puls/");
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "text/html",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();

    // Use the browser's built-in HTML parser
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Get the timestamp
    const timestamp: string | undefined = doc
      .getElementById("CurrentTime")
      ?.textContent?.replace("Sidst opdateret: ", "");

    // Find the table containing the events
    const table = doc.getElementById("GridView1");
    if (!table) {
      throw new Error("Could not find events table");
    }

    // Get all rows except the header row
    const rows = Array.from(table.getElementsByTagName("tr")).slice(1);

    const events: OdinEventsArray = rows.map((row) => {
      const cells = Array.from(row.getElementsByTagName("td"));
      if (cells.length !== 4) {
        throw new Error("Unexpected table structure");
      }

      // Decode HTML entities and clean up the text
      const decode = (text: string = "") => {
        const div = document.createElement("div");
        div.innerHTML = text.trim();
        return div.textContent || "";
      };

      let station = decode(cells[1].innerHTML);
      if (station.length === 1) {
        station = "N/A";
      }

      return {
        responder: decode(cells[0].innerHTML),
        station: station,
        timestamp: decode(cells[2].innerHTML),
        message: decode(cells[3].innerHTML),
      };
    });

    const OdinEvents: OdinEvents = {
      Events: events,
      Timestamp: timestamp,
    };

    return OdinEvents;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch ODIN events: ${error.message}`);
    }
    throw new Error("Failed to fetch ODIN events: Unknown error");
  }
}
