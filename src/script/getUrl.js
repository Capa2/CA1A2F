function getUrl(type, filter, target) {
    const local = false;
    let url = "https://karpantschof.com/CA1A2/api/";
    if (local) url = "http://localhost:8080/CA1A2_war_exploded/api/"
    switch (type) {
        case "person":
            url += "person/";
            break
        case "hobby":
            url += "hobby/";
            break
        case "phone":
            url += "phone/";
            break
        case "address":
            url += "address/";
            break
        case "zip":
            url += "zip/";
            break
    };
    switch (filter) {
        case "all":
            url += "list";
            break
        case "phone":
            url += "phone/";
            break
        case "zip":
            url += "zip/";
            break
    };

    if (filter != "all" && target != null) url += target;
    console.log(url);
    return url;
}

export default getUrl;