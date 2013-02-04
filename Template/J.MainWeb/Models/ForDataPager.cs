using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace J.MainWeb.Models
{
    public class ForDataPager<T>
    {
        /// <summary>
        /// 数据总条数
        /// </summary>
        public Int32 RecordCount { get; set; }

        /// <summary>
        /// 每页显示数据数量
        /// </summary>
        public Int32 PageSize { get; set; }

        /// <summary>
        /// 显示页数索引
        /// </summary>
        public Int32 PageIndex { get; set; }

        /// <summary>
        /// 数据列表
        /// </summary>
        public IList<T> Data { get; set; }

        /// <summary>
        /// 用户扩展用数据
        /// </summary>
        public Dictionary<String, Object> UserData { get; set; }
    }
}