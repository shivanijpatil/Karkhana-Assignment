import React from "react";
import "../css/Voucher.css"

const Voucher = ({ voucher, setVoucher, applyVoucher }) => {
  return (
    <div className="voucher-section">
      <input
        type="text"
        placeholder="Add voucher code"
        value={voucher}
        onChange={(e) => setVoucher(e.target.value)}
      />
    </div>
  );
};

export default Voucher;
