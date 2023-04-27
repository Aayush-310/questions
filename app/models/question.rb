class Question < ApplicationRecord
    validates :title, presence:true,uniqueness:true
    validates :tag, presence:true, length:{minimum:1,maximum:20}
end
