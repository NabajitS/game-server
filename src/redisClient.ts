import { Client, Repository } from 'redis-om';
import { config } from 'dotenv';
config()


const redisClient = new Client();


(async () => {
    await redisClient.open(`redis://${process.env.USER}:${process.env.PASS}@${process.env.URL}`)
    // await redisClient.open(`redis://default:ISY0MrAriQLscasi8RbXUlCFRzggQdiy@redis-15407.c74.us-east-1-4.ec2.cloud.redislabs.com:15407`)
})();



// redis://${process.env.username}:${process.env.passsword}@${connecctionstrong}

export { redisClient }
