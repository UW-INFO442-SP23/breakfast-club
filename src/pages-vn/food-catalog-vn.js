import React, { useState } from 'react';
import { Link } from "react-router-dom";

function FoodCardVN(props) {
    return (
        <div className="card">
              <div className="card-body">
                <h3 className="card-title">{props.foodsvn.name}</h3>
              </div>
              <img className="card-img-bot" src={props.foodsvn.img} alt={props.foodsvn.name} />
        </div>
    )
  }

function FoodCatalogVN(props) {
  const [filters, setFilters] = useState({
    carb: false,
    protein: false,
    fat: false,
    df: false,
    gf: false,
    vegan: false,
    vegetarian: false,
    produce: false,
    grains: false,
    dairy: false,
    meat: false,
    canned: false
  });

  const handleFilterChange = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter]
    }));
  };

  const filteredFoodsVN = props.foodsvn.filter((food) => {
    return (
      (!filters.carb || food.carb === "true") &&
      (!filters.protein || food.protein === "true") &&
      (!filters.fat || food.fat === "true") &&
      (!filters.df || food.df === "true") &&
      (!filters.gf || food.gf === "true") &&
      (!filters.vegan || food.vegan === "true") &&
      (!filters.vegetarian || food.vegetarian === "true") &&
      (!filters.produce || food.produce === "true") &&
      (!filters.grains || food.grains === "true") &&
      (!filters.dairy || food.dairy === "true") &&
      (!filters.meat || food.meat === "true") &&
      (!filters.canned || food.canned === "true") 
    );
  });

  return (
    <div className="catalog">
      <div className="translate">
        <p>
        <Link to="/catalog" className=""><strong>English</strong></Link> |&nbsp;
        <Link to="/catalog-vn" className=""><strong>Tiếng Việt</strong></Link>
        </p>
      </div>
      <h2>Danh Mục Thực Phẩm</h2>
      <h3 id="catalogDesc">Sử dụng bộ lọc để điều hướng qua các loại thực phẩm đáp ứng nhu cầu dinh dưỡng của bạn!</h3>
      <section className='catalog-content'>
        <section id="filter-box">
            <h4>Nguồn Dinh Dưỡng Đa Lượng:</h4>
            <label>
            <input
                type="checkbox"
                checked={filters.carb}
                onChange={() => handleFilterChange("carb")}
            />
            Chất Bột Đường
            </label>
            <label>
            <input
                type="checkbox"
                checked={filters.protein}
                onChange={() => handleFilterChange("protein")}
            />
            Chất Đạm
            </label>
            <label>
            <input
                type="checkbox"
                checked={filters.fat}
                onChange={() => handleFilterChange("fat")}
            />
            Mỡ
            </label>
            <h4>Ưu Tiên Chế Độ Ăn Uống:</h4>
            <label>
            <input
                type="checkbox"
                checked={filters.df}
                onChange={() => handleFilterChange("df")}
            />
            Sữa Miễn Phí
            </label>
            <label>
            <input
                type="checkbox"
                checked={filters.gf}
                onChange={() => handleFilterChange("gf")}
            />
            Không Chứa Gluten
            </label>
            <label>
            <input
                type="checkbox"
                checked={filters.vegan}
                onChange={() => handleFilterChange("vegan")}
            />
            Thuần Chay
            </label>
            <label>
            <input
                type="checkbox"
                checked={filters.vegetarian}
                onChange={() => handleFilterChange("vegetarian")}
            />
            Chay
            </label>
            <h4>Danh Mục Thực Phẩm:</h4>
            <label>
            <input
                type="checkbox"
                checked={filters.produce}
                onChange={() => handleFilterChange("produce")}
            />
            Sản Vật
            </label>
            <label>
            <input
                type="checkbox"
                checked={filters.grains}
                onChange={() => handleFilterChange("grains")}
            />
            Hạt
            </label>
            <label>
            <input
                type="checkbox"
                checked={filters.dairy}
                onChange={() => handleFilterChange("dairy")}
            />
            Sữa & Trứng
            </label>
            <label>
            <input
                type="checkbox"
                checked={filters.meat}
                onChange={() => handleFilterChange("meat")}
            />
            Thịt
            </label>
            <label>
            <input
                type="checkbox"
                checked={filters.canned}
                onChange={() => handleFilterChange("canned")}
            />
            Đóng Hộp
            </label>
        </section>
        <section className="card-deck">
          {filteredFoodsVN.length > 0 ? (
              filteredFoodsVN.map((arrayItem) => (
                <FoodCardVN foodsvn={arrayItem} key={arrayItem.name} />
              ))
            ) : (
              <p id="noResults">Không có kết quả nào được tìm thấy.</p>
            )}
        </section>
    </section>
    </div>
  );
}

export default FoodCatalogVN;
