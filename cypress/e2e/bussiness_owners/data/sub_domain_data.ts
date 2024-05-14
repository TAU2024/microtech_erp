let r = Math.floor(Math.random() * 1000);


export class SubDomainData{
    static count =1;
    static subDomain = "saidDomain"+ r.toString();
    static todayDate = new Date().toISOString().split('T')[0];
}
