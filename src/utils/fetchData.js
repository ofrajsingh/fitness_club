export const exerciseOptions = {
    method: 'GET',
    headers: {
    //   'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Key': '74ab2ebf38msh57f1e49d90ed853p12a2acjsn8ff0273c600d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    //   'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Key': '74ab2ebf38msh57f1e49d90ed853p12a2acjsn8ff0273c600d',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData= async (url, options)=>{
    const response= await fetch(url, options);
    const data= await response.json();
    return data; 
}