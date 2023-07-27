const app = require('../app')
const mongoose=require('mongoose')
const request=require('supertest')
describe("tijaabinta helitaanka xogta ku jirta about ",()=>{

    it("get testing ",async()=>{
        const res=await request(app).get("/about")
        expect(res.statusCode).toBe(200)
    })
   
    it("post testing ",async()=>{
        const response=await request(app).post("/about").send({
            faafahinyar: "shirkada lagu kireeye guryaha",
            faafahin: "shirkadan waxay kuu qabaneysaa adeeg waliba oo ku saabsan kireenta guryaha",
        })
        expect(response.statusCode).toBe(201)
    })
    it("put testing",async()=>{
        const updatetest=await request(app).put("/about/6493ecb5e9ff1b02073cd593")
        expect(updatetest.statusCode).toBe(200)
    })
    it("delet testing",async()=>{
        const deletetest=await request(app).delete("/about/6493ecb5e9ff1b02073cd593")
        expect(deletetest.statusCode).toBe(200)
    })
})
describe("tijaabinta get post updete delete ee Gallary",()=>{
    it("get testing ",async()=>{
        const gallaryget=await request(app).get("/Gellary")
        expect(gallaryget.statusCode).toBe(200)
    })
   
    it("post testing ",async()=>{
        const responsegallary=await request(app).post("/Gellary").send({
        imgtitle:"guri dabaq eh",
          Image:"https://unsplash.com/photos/2d4lAQAlbDA"
        })
        expect(responsegallary.statusCode).toBe(201)
    })
    it("put testing",async()=>{
        const gallaryupdate=await request(app).put("/Gellary/6495df9fc4428a7fb1ce7a14")
        expect(gallaryupdate.statusCode).toBe(200)
    })
    it("delet testing",async()=>{
        const gallarydel=await request(app).delete("/Gellary/6495df9fc4428a7fb1ce7a14")
        expect(gallarydel.statusCode).toBe(200)
    })
})
describe("get post put del ourcleint",()=>{
    it("get testing ",async()=>{
        const cleintget=await request(app).get("/ourcleint")
        expect(cleintget.statusCode).toBe(200)
    })
   
    it("post testing ",async()=>{
        const rescleint=await request(app).post("/ourcleint").send({
            cleintname:"khadra",
            clientlogo:"ciko"
        })
        expect(rescleint.statusCode).toBe(201)
    })
    it("put testing",async()=>{
        const updatecleint=await request(app).put("/ourcleint/6495e6d59ace172bdf5142e3")
        expect(updatecleint.statusCode).toBe(200)
    })
    it("delet testing",async()=>{
        const cleintdel=await request(app).delete("/ourcleint/6495e6d59ace172bdf5142e3")
        expect(cleintdel.statusCode).toBe(200)
    })
})
describe("get post put and delet in service",()=>{
    it("get testing ",async()=>{
        const serviceget=await request(app).get("/service")
        expect(serviceget.statusCode).toBe(200)
    })
   
    it("post testing ",async()=>{
        const serviepost=await request(app).post("/service").send({
            title:"waxaan qabanaa",
            description:"yyyjjii",
            icon:"jji"
        })
        expect(serviepost.statusCode).toBe(201)
    })
    it("put testing",async()=>{
        const serviceput=await request(app).put("/service/6495efdd8deeaf89552bc52f")
        expect(serviceput.statusCode).toBe(200)
    })
    it("delet testing",async()=>{
        const servicedel=await request(app).delete("/service/6495efdd8deeaf89552bc52f")
        expect(servicedel.statusCode).toBe(200)
    })
})
describe("get post put and delet in contectform",()=>{
    it("get testing ",async()=>{
        const contectget=await request(app).get("/contect")
        expect(contectget.statusCode).toBe(200)
    })
   
    it("post testing ",async()=>{
        const contectpost=await request(app).post("/contect").send({
            name:"hayaat",
           phone:"9998",
           message:"cabashada ayaan ahay"
        })
        expect(contectpost.statusCode).toBe(201)
    })
    it("put testing",async()=>{
        const contectput=await request(app).put("/contect/649747c9dd7c106e7aa4409e")
        expect(contectput.statusCode).toBe(200)
    })
    it("delet testing",async()=>{
        const contectdel=await request(app).delete("/contect/649747c9dd7c106e7aa4409e")
        expect(contectdel.statusCode).toBe(200)
    })
})
describe("get post put and delet in home",()=>{
    it("get testing ",async()=>{
        const homeget=await request(app).get("/home")
        expect(homeget.statusCode).toBe(200)
    })
   
    it("post testing ",async()=>{
        const posthome=await request(app).post("/home").send({
            noocaguriga:"filo",
            area:"wadir",
            address:"jidcakaaro",
            age:"1yaer",
            rent:"290",
            deposite:"$300",
            parkin:"yes",
            imagepreview:"https://unsplash.com/photos/2d4lAQAlbDA",
           isavalible:"yes",
           rooms:"5qol",
           suuliyada:"2 suuli",
           masterroom:"yes",
           faafaahin:"guriga waaa guri wayn oo leh geedo bdn oo u fcn in lagu nasto",
           Useid:"648802dc6db5e7dff84850a5"
        })
        expect(posthome.statusCode).toBe(201)
    })
    it("put testing",async()=>{
        const puthome=await request(app).put("/home/64908b0f888f02e9cb281b5e")
        expect(puthome.statusCode).toBe(200)
    })
    it("delet testing",async()=>{
        const delhome=await request(app).delete("/home/64908b0f888f02e9cb281b5e")
        expect(delhome.statusCode).toBe(200)
    })
})
describe("get post put and delet in image",()=>{
    it("get testing ",async()=>{
        const getimage=await request(app).get("/image")
        expect(getimage.statusCode).toBe(200)
    })
   
    it("post testing ",async()=>{
        const postimg=await request(app).post("/image").send({
            Homeid:"6499585cfe37a31769553234" ,
            imageurl:"https://unsplash.com/photos/2d4lAQAlbDA"
        })
        expect(postimg.statusCode).toBe(201)
    })
    it("put testing",async()=>{
        const putimg=await request(app).put("/image/649959420af846009cead3cd")
        expect(putimg.statusCode).toBe(200)
    })
    it("delet testing",async()=>{
        const delimg=await request(app).delete("/image/649959420af846009cead3cd")
        expect(delimg.statusCode).toBe(200)
    })
})
describe("get post put and delet in homesitting",()=>{
    it("get testing ",async()=>{
        const homeget=await request(app).get("/homesit")
        expect(homeget.statusCode).toBe(200)
    })
   
    it("post testing ",async()=>{
        const posthome=await request(app).post("/homesit").send({
            name:"betahouse",
            title:"waa shirkad",
            logo:"bbbt",
            description:"iiiu8",
            address:"wadajir",
            email:"beta@gmail.com",
            phone:"44440",
            whatapp:"99888",
            facebook:"betahouse",
            instagram:"betahouse",
            tiktok:"betahouse",
            Herotitle:"www",
            HeroDiscritpion:"eee",
            heroimage:"hhhrr",
            Footertext:"beta@gmail.com"
        })
        expect(posthome.statusCode).toBe(201)
    })
    it("put testing",async()=>{
        const puthome=await request(app).put("/homesit/649962400e067f154df9692c")
        expect(puthome.statusCode).toBe(200)
    })
    it("delet testing",async()=>{
        const delhome=await request(app).delete("/homesit/649962400e067f154df9692c")
        expect(delhome.statusCode).toBe(200)
    })
})