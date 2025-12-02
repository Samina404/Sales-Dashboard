export async function getAuthToken() {
  const res = await fetch("https://autobizz-425913.uc.r.appspot.com/getAuthorize", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tokenType: "frontEndTest",
    }),
  });

  const data = await res.json();
  return data.token;
}

export async function fetchSales(params: any, token: string) {
  const query = new URLSearchParams(params).toString();

  const res = await fetch(
    `https://autobizz-425913.uc.r.appspot.com/sales?${query}`,
    {
      headers: {
        "X-AUTOBIZZ-TOKEN": token,
      },
    }
  );

  return res.json();
}
