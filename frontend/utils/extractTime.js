export function extractTime(datestring) {
  const date = new Date(datestring);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  return `${hour}:${minutes}`;
}
