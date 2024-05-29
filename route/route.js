const express = require('express')
const router = express.Router()

router.post("/", (req,res)=>{
    const result = {
        status: 201,
       message: "Spares created Successfully",
        result: null
   }
    res.status(200).json(result);
});

router.get('/', (req, res)=> {
//test
    const relt = 
       {
            status:200,
            message:"Spares fetched successfully",
            result:{                
                "currentPage": 1,
                 "totalPageCount": 1,
                 "totalDataCount": 4,
                 "data": [
                     {
                       "partName":"partName1",
                        "id":76543,
                       "assetId":87654,
                        "quantity":4,
                        "cycleFrequency":"2 Months",
                        "replacementFrequency":"5 Years"
                     },
                     {
                        "partName":"partName2",
                         "id": 39876,
                         "assetId":87654,
                         "quantity":4,
                         "cycleFrequency":"2 Months",
                         "replacementFrequency":"5 Years"
                      },
                      {
                        "partName":"partName3",
                         "id":686535,
                        "assetId":87654,
                         "quantity":4,
                         "cycleFrequency":"2 Months",
                         "replacementFrequency":"5 Years"
                      },
                      {
                        "partName":"partName4",
                         "id":22457,
                         "assetId":87654,
                         "quantity":4,
                         "cycleFrequency":"2 Months",
                         "replacementFrequency":"5 Years"
                      },
                     ]
            }
    }
    
      res.status(200).json(result);
  });


  router.put("/:spareId", (req,res)=>{
    const result = {
        status: 200,
        message: "Spares updated Successfully",
        result: null
    }
    res.status(200).json(result);
});


router.delete("/:spareId", (req,res)=>{
   const result = {
        status: 200,
        message: "Spares deleted Successfully",
        result: null
    }
    res.status(200).json(result);
});



module.exports = router