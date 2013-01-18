namespace J.Entities
{
    using System;
    using System.Collections.Generic;
    
    public partial class Single
    {
		public Nullable<bool> SingleTinyintBool
		{
			get
			{
				if (SingleTinyintBool_ == null)
					return null;
				else if (SingleTinyintBool_ != 0)
					return true;
				else
					return false;
			}
			set
			{
				if (value == null)
					SingleTinyintBool_ = null;
				else if (value.Value)
					SingleTinyintBool_ = 1;
				else
					SingleTinyintBool_ = 0;
			}
		}
    }
}
