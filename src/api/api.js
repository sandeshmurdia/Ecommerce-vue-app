/* eslint-disable no-console */
  export async function throwerror (status) {

    try {
      const response = await fetch(`http://localhost:4000/api/error/${status}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                "token": "kjbdfhdh.djbr.scrff"
            }
          })

          return response
    } catch(e) {
      window.zipy.logException(e);
  
    }
  }
