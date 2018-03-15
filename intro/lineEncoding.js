function lineEncoding(s) 
{
    let encoding = "";
    
    for(let i = 0; i < s.length; ++i)
    {
        let count = 1;
        for(; s[i+1] == s[i]; ++i) ++count;
        
        encoding += (count > 1 ? count+s[i] : s[i]);
    }
    
    return encoding;
}