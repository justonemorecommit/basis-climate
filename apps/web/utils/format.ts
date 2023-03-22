import { DateTime } from "luxon";

export function formatDate(isoString: string) {
  return DateTime.fromISO(isoString).toLocaleString(DateTime.DATE_SHORT);
}
