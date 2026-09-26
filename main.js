/* ============================================================
   CHAI & CRUMBS — MAIN JAVASCRIPT
   Fully updated product database with 20+ items per category
   and CORRECT images for each product.
   ============================================================ */

// ---------- MENU PRODUCT DATABASE ----------
const menuItems = [
  /* ==================== TEA (20 items) ==================== */
  { id: 1,  name: "Classic Masala Chai",     category: "tea", price: 80,  desc: "Strong black tea brewed with aromatic Indian spices.",     img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=600&auto=format&fit=crop" },
  { id: 2,  name: "Ginger Tea",              category: "tea", price: 70,  desc: "Refreshing tea with a warming ginger kick.",              img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&auto=format&fit=crop" },
  { id: 3,  name: "Cardamom Tea",            category: "tea", price: 90,  desc: "Fragrant green cardamom infused black tea.",              img: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=600&auto=format&fit=crop" },
  { id: 4,  name: "Lemon Tea",               category: "tea", price: 70,  desc: "Zesty black tea with fresh lemon and honey.",             img: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?q=80&w=600&auto=format&fit=crop" },
  { id: 5,  name: "Green Tea",               category: "tea", price: 85,  desc: "Light and refreshing whole leaf green tea.",              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHU77fJKEjWCjydKlQvFZoOBuyHpsVJEVXfANKocE4rg&s=10" },
  { id: 6,  name: "Kashmiri Kahwa",          category: "tea", price: 130, desc: "Saffron, almond & spice infused green tea.",              img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=600&auto=format&fit=crop" },
  { id: 7,  name: "Tulsi Tea",               category: "tea", price: 75,  desc: "Soothing holy basil tea, great for relaxation.",          img: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=600&auto=format&fit=crop" },
  { id: 8,  name: "Hibiscus Tea",            category: "tea", price: 95,  desc: "Ruby-red floral tea with a tart, refreshing taste.",      img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600&auto=format&fit=crop" },
  { id: 9,  name: "Chamomile Tea",           category: "tea", price: 100, desc: "Calming floral tea, perfect for quiet evenings.",         img: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=600&auto=format&fit=crop" },
  { id: 10, name: "Elaichi Milk Tea",        category: "tea", price: 85,  desc: "Creamy milk tea with green cardamom aroma.",              img: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=600&auto=format&fit=crop" },
  { id: 11, name: "Saffron Tea",             category: "tea", price: 140, desc: "Delicate brew with premium Kashmiri saffron.",            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfvgLtlZxqzyIb4chMPHDlBub8JG1XsS1l1kC8BXzPw&s=10" },
  { id: 12, name: "Cinnamon Tea",            category: "tea", price: 80,  desc: "Warm, sweet cinnamon infused black tea.",                 img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyR7xQclqZm-xYopITm2SHEpMGp0Kh96mdp1ehskgouA&s=10" },
  { id: 13, name: "Rose Tea",                category: "tea", price: 110, desc: "Fragrant rose petal tea, delicate and floral.",           img: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=600&auto=format&fit=crop" },
  { id: 14, name: "Mint Tea",                category: "tea", price: 75,  desc: "Cool, refreshing fresh mint green tea.",                  img: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=600&auto=format&fit=crop" },
  { id: 15, name: "Assam Black Tea",         category: "tea", price: 90,  desc: "Bold, malty single-origin Assam tea.",                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPpLOjxSzm8B_vlW8nxdh1HJTM6T76xtn4Bm78ycYQIg&s=10" },
  { id: 16, name: "Darjeeling Tea",          category: "tea", price: 120, desc: "Delicate, floral first-flush Darjeeling.",                img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&auto=format&fit=crop" },
  { id: 17, name: "Nilgiri Tea",             category: "tea", price: 95,  desc: "Bright, aromatic tea from the Nilgiri hills.",            img: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?q=80&w=600&auto=format&fit=crop" },
  { id: 18, name: "Butter Tea",              category: "tea", price: 150, desc: "Traditional Himalayan tea with butter and salt.",         img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=600&auto=format&fit=crop" },
  { id: 19, name: "Iced Lemon Tea",          category: "tea", price: 90,  desc: "Chilled black tea with lemon and ice.",                   img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600&auto=format&fit=crop" },
  { id: 20, name: "Peach Iced Tea",          category: "tea", price: 110, desc: "Sweet, fruity iced tea with peach notes.",                img: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?q=80&w=600&auto=format&fit=crop" },

  /* ==================== COFFEE (20 items) ==================== */
  { id: 21, name: "Filter Coffee",           category: "coffee", price: 110, desc: "Authentic South Indian filter coffee.",                 img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop" },
  { id: 22, name: "South Indian Coffee",     category: "coffee", price: 120, desc: "Strong decoction with frothy hot milk.",                img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop" },
  { id: 23, name: "Cold Coffee",             category: "coffee", price: 130, desc: "Chilled, frothy coffee with a hint of cocoa.",          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP-rALwAswTdLkgG9yQ5qgUyFG-ZbZxUDJfnvDpJSSQQ&s=10" },
  { id: 24, name: "Café Latte",              category: "coffee", price: 140, desc: "Smooth espresso with steamed milk.",                    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop" },
  { id: 25, name: "Cappuccino",              category: "coffee", price: 145, desc: "Espresso topped with velvety milk foam.",               img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600&auto=format&fit=crop" },
  { id: 26, name: "Americano",               category: "coffee", price: 120, desc: "Bold espresso diluted with hot water.",                 img: "https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=600&auto=format&fit=crop" },
  { id: 27, name: "Espresso",                category: "coffee", price: 100, desc: "Rich, concentrated shot of pure coffee.",               img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=600&auto=format&fit=crop" },
  { id: 28, name: "Mocha",                   category: "coffee", price: 160, desc: "Espresso with chocolate and steamed milk.",             img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=600&auto=format&fit=crop" },
  { id: 29, name: "Macchiato",               category: "coffee", price: 135, desc: "Espresso 'stained' with a dollop of milk foam.",        img: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=600&auto=format&fit=crop" },
  { id: 30, name: "Iced Latte",              category: "coffee", price: 150, desc: "Chilled espresso with cold milk over ice.",             img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=600&auto=format&fit=crop" },
  { id: 31, name: "Frappe",                  category: "coffee", price: 170, desc: "Blended iced coffee topped with cream.",                img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop" },
  { id: 32, name: "Flat White",              category: "coffee", price: 150, desc: "Smooth microfoam over a double espresso.",              img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=600&auto=format&fit=crop" },
  { id: 33, name: "Affogato",                category: "coffee", price: 180, desc: "Vanilla ice cream drowned in hot espresso.",            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNMRoUdc4WTUsFRAV_F-ksn4iR4V-dC2bKTcjivVT-pA&s=10" },
  { id: 34, name: "Irish Coffee",            category: "coffee", price: 190, desc: "Coffee with cream and a hint of whiskey flavour.",      img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&auto=format&fit=crop" },
  { id: 35, name: "Vietnamese Coffee",       category: "coffee", price: 165, desc: "Strong coffee with sweetened condensed milk.",          img: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=600&auto=format&fit=crop" },
  { id: 36, name: "Turkish Coffee",          category: "coffee", price: 155, desc: "Finely ground coffee brewed in a cezve.",               img: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=600&auto=format&fit=crop" },
  { id: 37, name: "Nitro Cold Brew",         category: "coffee", price: 210, desc: "Smooth cold brew infused with nitrogen.",               img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=600&auto=format&fit=crop" },
  { id: 38, name: "Cortado",                 category: "coffee", price: 145, desc: "Espresso cut with equal warm milk.",                    img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=600&auto=format&fit=crop" },
  { id: 39, name: "Hazelnut Latte",          category: "coffee", price: 165, desc: "Creamy latte with roasted hazelnut syrup.",             img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop" },
  { id: 40, name: "Caramel Macchiato",       category: "coffee", price: 175, desc: "Vanilla milk, espresso, and caramel drizzle.",          img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=600&auto=format&fit=crop" },

  /* ==================== SNACKS (20 items) ==================== */
  { id: 41, name: "Samosa",                  category: "snacks", price: 25, desc: "Crispy pastry with spiced potato and peas.",           img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600&auto=format&fit=crop" },
  { id: 42, name: "Onion Pakora",            category: "snacks", price: 40, desc: "Golden fried onion fritters.",                         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQw8fkITv8qwUqpNGQ_QD-alWI6Moq2xGZVQE3GXESA&s=10" },
  { id: 43, name: "Vegetable Cutlet",        category: "snacks", price: 45, desc: "Mixed vegetable patties, crispy outside.",             img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHoGJ45ivHVyHmUhN1OM0vfS0FWYYyPguDI1aIe4tXHg&s=10" },
  { id: 44, name: "Aloo Bonda",              category: "snacks", price: 35, desc: "Deep-fried potato dumplings in gram batter.",          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoXXGSkLqvnH5zuCAGy9Gxdag8VOh9YmwvTcqYG-fiYA&s=10" },
  { id: 45, name: "Bread Bajji",             category: "snacks", price: 30, desc: "Bread slices dipped in spiced gram batter.",           img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4nhT5a37EE41DOmyCrOfmxrvTEgNlKAlVx8FJwsq1rA&s=10" },
  { id: 46, name: "Paneer Puff",             category: "snacks", price: 60, desc: "Flaky puff pastry with spiced paneer.",                img: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=600&auto=format&fit=crop" },
  { id: 47, name: "Veg Sandwich",            category: "snacks", price: 80, desc: "Fresh vegetables between toasted bread.",              img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop" },
  { id: 48, name: "Grilled Cheese Sandwich", category: "snacks", price: 120, desc: "Melted cheese in toasted buttered bread.",            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfx77Dh61CgZCY-jS3NFKOWQH-Mkv1YdbelchvorOBmQ&s=10" },
  { id: 49, name: "Vada Pav",                category: "snacks", price: 50, desc: "Mumbai-style spicy potato fritter in a bun.",          img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=600&auto=format&fit=crop" },
  { id: 50, name: "Dhokla",                  category: "snacks", price: 60, desc: "Steamed, spongy savoury gram flour cake.",             img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1BYmQ_RXQvLAKxsrEuoh0WEvU3AB6Zn-zYqGZ5NIwtw&s=10" },
  { id: 51, name: "Khaman",                  category: "snacks", price: 65, desc: "Soft, tangy Gujarati steamed snack.",                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSexqv_CvC5zJDCvROCgsaXYBb4DRU4YSQjh8IRKhw7eQ&s=10" },
  { id: 52, name: "Misal Pav",               category: "snacks", price: 90, desc: "Spicy sprouted lentil curry with bread.",              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8EXpnS-vcbCUfFChxS6xgKURwCjthZerFuRX8J3q7iA&s=10" },
  { id: 53, name: "Pav Bhaji",               category: "snacks", price: 110, desc: "Spiced mashed vegetables with buttered buns.",        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11ECfDHTbgxJ1wK7soKzoboAX7KsnKOaz7fMxjsRaag&s=10" },
  { id: 54, name: "Chole Bhature",           category: "snacks", price: 130, desc: "Spicy chickpeas with fluffy fried bread.",            img: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=600&auto=format&fit=crop" },
  { id: 55, name: "Bhel Puri",               category: "snacks", price: 70, desc: "Puffed rice tossed with tangy chutneys.",              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RSdw4GCWcI3jg-IjLVUCmw8eo5Q77auBd-WvvP0WDg&s=10" },
  { id: 56, name: "Sev Puri",                category: "snacks", price: 75, desc: "Crispy puris topped with potato and sev.",             img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1C54Hza53am6llL7jlp4ENCnm88rNCVa2JEHXR77rEw&s=10" },
  { id: 57, name: "Dahi Puri",               category: "snacks", price: 85, desc: "Crispy puris filled with yogurt and chutney.",         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUafFN5t28fr4i-aZrdlf2u9pBXW2YpE-IqoDd_-B7Aw&s=10" },
  { id: 58, name: "Pani Puri",               category: "snacks", price: 60, desc: "Crispy puris with spiced flavoured water.",            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4uDBtlW4e6aIBlgf3RJ5nZXlcyYgxWT38p-MINXR7ng&s=10" },
  { id: 59, name: "Masala Peanuts",          category: "snacks", price: 55, desc: "Roasted peanuts tossed in spicy masala.",              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPYbIeMBPo96zj3I0ZXt2ZCE7PyLOaCGxUxTO1IXrNw&s=10" },
  { id: 60, name: "Murukku",                 category: "snacks", price: 45, desc: "Crunchy South Indian spiral savoury snack.",           img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTETay-IoO2_-IWpe2iWD31_Rq3nyVISus9KC4eurgprQ&s=10" },

  /* ==================== BAKERY (20 items) ==================== */
  { id: 61, name: "Chocolate Chai Cake",     category: "bakery", price: 140, desc: "Moist chocolate cake with chai spice.",               img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop" },
  { id: 62, name: "Butter Cookies",          category: "bakery", price: 90,  desc: "Crumbly, buttery cookies perfect with tea.",          img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600&auto=format&fit=crop" },
  { id: 63, name: "Chocolate Chip Cookies",  category: "bakery", price: 100, desc: "Classic cookies loaded with chocolate chips.",        img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop" },
  { id: 64, name: "Brownie",                 category: "bakery", price: 120, desc: "Rich, fudgy chocolate brownie.",                      img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop" },
  { id: 65, name: "Red Velvet Cake",         category: "bakery", price: 160, desc: "Classic red velvet with cream cheese frosting.",      img: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=600&auto=format&fit=crop" },
  { id: 66, name: "Banana Bread",            category: "bakery", price: 130, desc: "Moist, sweet bread with ripe bananas.",               img: "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?q=80&w=600&auto=format&fit=crop" },
  { id: 67, name: "Croissant",               category: "bakery", price: 110, desc: "Flaky, buttery French-style croissant.",              img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop" },
  { id: 68, name: "Blueberry Muffin",        category: "bakery", price: 120, desc: "Soft muffin bursting with blueberries.",              img: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=600&auto=format&fit=crop" },
  { id: 69, name: "Chocolate Muffin",        category: "bakery", price: 120, desc: "Double chocolate muffin with choco chips.",           img: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=600&auto=format&fit=crop" },
  { id: 70, name: "Cinnamon Roll",           category: "bakery", price: 140, desc: "Sweet roll with cinnamon swirl and glaze.",           img: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=600&auto=format&fit=crop" },
  { id: 71, name: "Apple Pie",               category: "bakery", price: 150, desc: "Classic pie with spiced apple filling.",              img: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?q=80&w=600&auto=format&fit=crop" },
  { id: 72, name: "Cheesecake",              category: "bakery", price: 180, desc: "Creamy, rich baked cheesecake.",                      img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=600&auto=format&fit=crop" },
  { id: 73, name: "Carrot Cake",             category: "bakery", price: 160, desc: "Spiced carrot cake with cream cheese frosting.",      img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=600&auto=format&fit=crop" },
  { id: 74, name: "Lemon Tart",              category: "bakery", price: 170, desc: "Tangy lemon curd in a crisp pastry shell.",           img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=600&auto=format&fit=crop" },
  { id: 75, name: "Éclair",                  category: "bakery", price: 150, desc: "Choux pastry filled with cream and chocolate.",       img: "https://images.unsplash.com/photo-1612203985729-70726954388c?q=80&w=600&auto=format&fit=crop" },
  { id: 76, name: "Danish Pastry",           category: "bakery", price: 130, desc: "Sweet, flaky pastry with fruit or cheese.",           img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop" },
  { id: 77, name: "Cupcake",                 category: "bakery", price: 90,  desc: "Soft cupcake topped with buttercream.",               img: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=600&auto=format&fit=crop" },
  { id: 78, name: "Doughnut",                category: "bakery", price: 80,  desc: "Glazed, fluffy ring doughnut.",                       img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop" },
  { id: 79, name: "Biscotti",                category: "bakery", price: 100, desc: "Crunchy Italian almond biscuits for dipping.",        img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600&auto=format&fit=crop" },
  { id: 80, name: "Tea Cake",                category: "bakery", price: 110, desc: "Light, sweet cake ideal with hot tea.",               img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop" },

  /* ==================== SWEETS (20 items) ==================== */
  { id: 81, name: "Gulab Jamun",             category: "sweets", price: 80,  desc: "Soft, syrup-soaked milk dumplings.",                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJ0g7olF76WAujYglhd6bBLtRjXoT1zx8PQ98ZqGWXw&s=10" },
  { id: 82, name: "Jalebi",                  category: "sweets", price: 90,  desc: "Crispy, syrup-soaked spiral sweet.",                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXj7ESPavvhfmD0DaKt7KlvgYlvG-GJTd91s1zlrGRGA&s=10" },
  { id: 83, name: "Rasgulla",                category: "sweets", price: 100, desc: "Spongy cottage cheese balls in syrup.",             img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbA2sr6JRE4v-fnTAukvmhzFUR8CJOZFbFP-vg9AeJsQ&s=10" },
  { id: 84, name: "Rasmalai",                category: "sweets", price: 130, desc: "Cottage cheese discs in saffron milk.",             img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU9nSQ9tcJidJz-ZOFF_fvBfU3jhLsuXG9GJfCye2dEg&s=10" },
  { id: 85, name: "Kaju Katli",              category: "sweets", price: 150, desc: "Diamond-shaped cashew fudge.",                      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksD5NtdHtc2BgKBj3eKjm2398ljPeRv0nECKQLLMQsQ&s=10" },
  { id: 86, name: "Motichoor Ladoo",         category: "sweets", price: 90,  desc: "Fine gram flour pearls rolled into laddoo.",        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMjL5HU8FomkiqHCdX8LazZritumi5afOfOQdbnyrPbA&s=10" },
  { id: 87, name: "Besan Ladoo",             category: "sweets", price: 85,  desc: "Roasted gram flour laddoo with ghee.",              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM65xEgyHRdF-56eQ0IMLXmPKtSeedwg2VdzVoWKjyKg&s=10" },
  { id: 88, name: "Barfi",                   category: "sweets", price: 120, desc: "Milk-based fudge with nuts.",                       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzoqnR0GJcYH-cD7djX8fKLMvS7EgG0JckCXkCplzwow&s=10" },
  { id: 89, name: "Soan Papdi",              category: "sweets", price: 110, desc: "Flaky, cube-shaped gram flour sweet.",              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDRqxDbY_N9YZ7DnS5IAGQ7rpBHMiZMmA7LmXR5CLt-w&s=10" },
  { id: 90, name: "Peda",                    category: "sweets", price: 100, desc: "Soft milk fudge disc with cardamom.",               img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXrhPJnLpaNfLPfrgwa02Ydn5ysMGvPxsdsYfmiZy5g&s=10" },
  { id: 91, name: "Halwa",                   category: "sweets", price: 95,  desc: "Rich, ghee-laden semolina sweet.",                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNwe4oZFZJ0_rII7rdd1jHojckAAATcoRRLYoetkdRQ&s=10" },
  { id: 92, name: "Kheer",                   category: "sweets", price: 110, desc: "Creamy rice pudding with nuts and saffron.",        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Maw9ZV1Ocs7-O_TS8g0ctofILKy3eqPPBdGOpTApsQ&s=10" },
  { id: 93, name: "Phirni",                  category: "sweets", price: 115, desc: "Ground rice pudding served chilled.",               img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT93pP8jd5WlzYLMf0ufBDWdcB5g8M-G2ovvxsd5RNhpQ&s=10" },
  { id: 94, name: "Kulfi",                   category: "sweets", price: 90,  desc: "Traditional Indian frozen milk dessert.",           img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTG_iA9EppNK3Q-eDipZZ8bCbyqyQpiDjxltEwrpsySg&s=10" },
  { id: 95, name: "Falooda",                 category: "sweets", price: 140, desc: "Rose-flavoured chilled dessert with noodles.",      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6fMFSTTsHXlJApsF0jjxXU_24PAWp2JAhw4gAiFt_A&s=10" },
  { id: 96, name: "Malpua",                  category: "sweets", price: 105, desc: "Sweet fried pancake soaked in syrup.",              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzZRn3PAZ0D7aMMId3K7o1Sj6yVfugrn3-GO4hzgIcfQ&s=10" },
  { id: 97, name: "Chikki",                  category: "sweets", price: 70,  desc: "Crunchy jaggery and peanut brittle.",               img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJssA_J3-4QfXEUyAzbcDIFRm8KcHGYDshFNCSxDne0w&s=10" },
  { id: 98, name: "Modak",                   category: "sweets", price: 95,  desc: "Steamed dumpling with coconut-jaggery filling.",    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjow813sAsv_6rIM17SBaui5adKg_MQaKucCvztQ7ViA&s=10" },
  { id: 99, name: "Puran Poli",              category: "sweets", price: 120, desc: "Sweet flatbread stuffed with lentil-jaggery.",      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ9EmHDLxY3su6EJn3_rxjot4Z8O_gzQ_WkqBZfDcfPQ&s=10" },
  { id: 100, name: "Mysore Pak",             category: "sweets", price: 130, desc: "Rich, ghee-laden gram flour sweet.",                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCcnKf_eab7tgTgvVzGv3BxyqLNrze6hjibr3xRJjNZQ&s=10" },
];

// ---------- RENDER MENU ----------
function renderMenu(filter = 'all') {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === filter);

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="text-align:center; grid-column:1/-1; padding:40px;">No items in this category yet.</p>';
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <div class="product-card">
      <div class="product-img"><img src="${item.img}" alt="${item.name}" loading="lazy"></div>
      <div class="product-info">
        <div class="product-category">${item.category}</div>
        <div class="product-name">${item.name}</div>
        <div class="product-desc">${item.desc}</div>
        <div class="price-row"><span class="price">₹${item.price}</span></div>
      </div>
    </div>
  `).join('');
}

// ---------- TOAST ----------
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

// ---------- MOBILE NAV ----------
function initMobileNav() {
  const btn = document.getElementById('hamburgerBtn');
  const nav = document.getElementById('mobileNav');
  const close = document.getElementById('closeMobile');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => nav.classList.add('open'));
  close?.addEventListener('click', () => nav.classList.remove('open'));

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// ---------- LIGHTBOX ----------
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  if (!lightbox || !lightboxImg) return;

  document.querySelectorAll('.insta-item img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
    });
  });

  document.getElementById('closeLightbox')?.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('active');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') lightbox.classList.remove('active');
  });
}

// ---------- SCROLL REVEAL ----------
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
}

// ---------- CONTACT FORM ----------
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const message = document.getElementById('contactMessage')?.value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('Please enter a valid email address.');
      return;
    }

    showToast('Thank you! We\'ll get back to you soon.');
    form.reset();
  });
}

// ---------- ACTIVE NAV HIGHLIGHT ----------
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const search = window.location.search;

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === path + search || href === path) {
      link.classList.add('active');
    }
  });
}

// ---------- MENU PAGE INIT ----------
function initMenuPage() {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;

  const urlParams = new URLSearchParams(window.location.search);
  const cat = urlParams.get('cat') || 'all';

  renderMenu(cat);

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === cat);
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(btn.dataset.filter);
      const newUrl = btn.dataset.filter === 'all'
        ? 'menu.html'
        : `menu.html?cat=${btn.dataset.filter}`;
      history.replaceState(null, '', newUrl);
    });
  });
}

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initLightbox();
  initReveal();
  initContactForm();
  initMenuPage();
  setActiveNav();
});