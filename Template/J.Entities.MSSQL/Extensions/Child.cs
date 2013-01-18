namespace J.Entities
{
    using System;
    using System.Collections.Generic;
    
    public partial class Child
    {
		public Nullable<bool> ChildTinyintBool {
			get
			{
				if (ChildTinyintBool_ == null)
					return null;
				else if (ChildTinyintBool_ != 0)
					return true;
				else
					return false;
			}
			set 
			{
				if (value == null)
					ChildTinyintBool_ = null;
				else if (value.Value)
					ChildTinyintBool_ = 1;
				else
					ChildTinyintBool_ = 0;
			} 
		}
    }
}
