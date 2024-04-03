import sanPhamModel from "~/server/models/sanpham";
export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        console.log(body.ten);
        await sanPhamModel.findOneAndUpdate(
            {
                _id: body._id,
            },
            {
                $set:
                {
                    ten: body.ten,
                    gia: body.gia,
                    phanLoai: body.phanLoai,
                    kichThuoc: body.kichThuoc,
                    link:{
                        tikTok: body.link.tikTok,
                        faceBook: body.link.faceBook,
                        shopee: body.link.shopee,
                    },
                    moTa: body.moTa,
                    imgurl: body.imgurl,
                }
            }
        )
        console.log('Cập nhật sản phẩm ' + body.ten + ' thành công !');
        return true;
    }catch(err){
        console.log(err);
        console.log("Cập nhật sp khong thanh cong");
        return false;
    }
})