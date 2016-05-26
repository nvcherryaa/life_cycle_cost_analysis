class CreateDepartments < ActiveRecord::Migration
  def change
    create_table :departments do |t|

      t.string :name, null: false
      t.string :code, null: false
      t.string :password, null: false
      t.string :description

      t.timestamps null: false
    end
  end
end
