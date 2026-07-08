export async function sendLead(payload: Record<string, unknown>) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (response.status >= 500) {
    throw new Error("Request failed");
  }

  return response;
}
