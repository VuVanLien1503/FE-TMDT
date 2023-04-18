import '../css/Crud.css'

export default function Crud() {
    return (
        <>
            <div id="main__crud">
                <div className="grid wide container__form-edit">
                    <div className="crud__title">
                        <h1>XIN CHÀO TRƯƠNG MẠNH THẮNG</h1>
                    </div>
                    <div className="row container-btn">
                        <div className="col l-2 container-btn-create">
                            <div className="btn btn-create">Thêm sản phẩm</div>
                        </div>
                    </div>
                    <div>
                        <div className="row table__head">
                            <h3 className="col l-1">STT</h3>
                            <h3 className="col l-1">Ảnh</h3>
                            <h3 className="col l-3">Tên sản phẩm</h3>
                            <h3 className="col l-3">Mô tả</h3>
                            <h3 className="col l-1">Số lượng</h3>
                            <h3 className="col l-1">Giá</h3>
                            <h3 className="col l-2">Chỉnh sửa</h3>
                        </div>

                        <div className="row table__content">
                            <div className="col l-1">1</div>
                            <div className="col l-1">
                                <img src="/img/logo/a5e589e8e118e937dc660f224b9a1472.png"/>
                            </div>
                            <div className="col l-3">SAM SUNG GALAXY aaaaaaaaaaaaaaaaaaaaaa</div>
                            <div className="col l-3">Mô tả</div>
                            <div className="col l-1">Số lượng</div>
                            <div className="col l-1">Giá</div>
                            <div className="col l-2">
                                <div className="row">
                                    <div className="col l-6">
                                        <div className="btn btn-edit">Sửa</div>
                                    </div>
                                    <div className="col l-6">
                                        <div className="btn btn-delete">Xoá</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row table__content">
                            <div className="col l-1">1</div>
                            <div className="col l-1">
                                <img src="/img/logo/a5e589e8e118e937dc660f224b9a1472.png"/>
                            </div>
                            <div className="col l-3">SAM SUNG GALAXY aaaaaaaaaaaaaaaaaaaaaa</div>
                            <div className="col l-3">Mô tả</div>
                            <div className="col l-1">Số lượng</div>
                            <div className="col l-1">Giá</div>
                            <div className="col l-2">
                                <div className="row">
                                    <div className="col l-6">
                                        <div className="btn btn-edit">Sửa</div>
                                    </div>
                                    <div className="col l-6">
                                        <div className="btn btn-delete">Xoá</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}