//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace J.Entities
{
    using System;
    using System.Collections.Generic;
    
    public partial class Single
    {
        public int ID { get; set; }
        public Nullable<int> SingleIntNumber { get; set; }
        public Nullable<ESingleIntEnum> SingleIntEnum { get; set; }
        public Nullable<decimal> SingleMoney { get; set; }
        public Nullable<System.DateTime> SingleDatetime { get; set; }
        public string SingleVarchar { get; set; }
        public string SingleLongVarchar { get; set; }
        public Nullable<bool> SingleBit { get; set; }
        internal Nullable<byte> SingleTinyintBool_ { get; set; }
        public Nullable<ESingleTinyintEnum> SingleTinyintEnum { get; set; }
        public string SingleText { get; set; }
        public byte[] SingleBinary { get; set; }
    }
}
