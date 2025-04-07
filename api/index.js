export default async function handler(req, res) {
  const response = await fetch("https://script.google.com/macros/s/AKfycbwXVBztZTe4z1smquSexaMI8lvHOKp60k9-FtriGup6pQJtsvDCMdHvF7Mqt69e7FI/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req.body)
  });

  const text = await response.text();
  res.status(200).send(text);
}
