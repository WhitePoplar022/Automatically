namespace J.Entities
{
    using System;
    using System.Collections.Generic;
    
    public partial class Parent
    {
		public Nullable<bool> ParentTinyintBool
		{
			get
			{
				if (ParentTinyintBool_ == null)
					return null;
				else if (ParentTinyintBool_ != 0)
					return true;
				else
					return false;
			}
			set
			{
				if (value == null)
					ParentTinyintBool_ = null;
				else if (value.Value)
					ParentTinyintBool_ = 1;
				else
					ParentTinyintBool_ = 0;
			}
		}
	}
}
