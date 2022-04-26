class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);
    let body = null;
    console.log(response);

    const contentType = response.headers.get('Content-Type');
    if (contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      console.log(body.data.main.temp)
      return body;
    }
    throw new Error(response.data.message);
  }
}

export default HttpClient;
