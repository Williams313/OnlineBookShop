





// class ShoppingCart {
//     constructor() {
//         this.items = [];
//     }

//     addItem(book) {
//         const existingItem = this.items.find(item => item.book.id === book.id);
//         if (existingItem) {
//             existingItem.quantity++;
//         } else {
//             this.items.push({ book, quantity: 1 });
//         }
//     }

//     removeItem(bookId) {
//         this.items = this.items.filter(item => item.book.id !== bookId);
//     }

//     getTotalItems() {
//         return this.items.reduce((total, item) => total + item.quantity, 0);
//     }

//     get total() {
//         return this.items.reduce((sum, item) => sum + item.book.price * item.quantity, 0);
//     }

//     clear() {
//         this.items = [];
//     }
// }

// class BookStore {
//     constructor() {
//         this.books = [];
//         this.cart = new ShoppingCart();
//         this.orders = [];
//         this.initializeBooks();
//         this.setupEventListeners();
//     }

//     initializeBooks() {
//         this.books = [
//             { id: 1, title: "JavaScript: The Good Parts", author: "Williams lambert", price: 50.00, stock: 10 },
//             { id: 2, title: "Clean Code", author: "lambert C. Martin", price: 100.000, stock: 15 },
//             { id: 3, title: "Design Patterns", author: "Emeka L Lamberyt", price: 39.99, stock: 8 },
//             { id: 4, title: "The Pragmatic Programmer", author: "lambert willams", price: 40.000, stock: 12 }
//         ];
//         this.renderBooks();
//     }

//     setupEventListeners() {
//         document.getElementById('cart-toggle')?.addEventListener('click', () => {
//             document.getElementById('cart-sidebar')?.classList.add('open');
//         });
        
//         document.getElementById('close-cart')?.addEventListener('click', () => {
//             document.getElementById('cart-sidebar')?.classList.remove('open');
//         });
        
//         document.getElementById('search-input')?.addEventListener('input', (e) => {
//             this.searchBooks(e.target.value);
//         });
        
//         document.getElementById('checkout-btn')?.addEventListener('click', () => {
//             this.processCheckout();
//         });
//     }

//     renderBooks(books = this.books) {
//         const grid = document.getElementById('book-grid');
//         if (!grid) return;
        
//         grid.innerHTML = '';
//         books.forEach(book => {
//             const card = document.createElement('div');
//             card.className = 'book-card';
//             card.innerHTML = `
//                 <div class="book-image">
//                     <i class="fas fa-book fa-3x"></i>
//                 </div>
//                 <div class="book-info">
//                     <h3>${book.title}</h3>
//                     <p>${book.author}</p>
//                     <p class="book-price">$${book.price.toFixed(2)}</p>
//                     <p class="stock-info">In Stock: ${book.stock}</p>
//                 </div>
//                 <button class="btn btn-primary" onclick="bookStore.addToCart(${book.id})">
//                     <i class="fas fa-cart-plus"></i> Add to Cart
//                 </button>
//             `;
//             grid.appendChild(card);
//         });
//     }

//     addToCart(bookId) {
//         const book = this.books.find(b => b.id === bookId);
//         if (book && book.stock > 0) {
//             this.cart.addItem(book);
//             book.stock--;
//             this.renderBooks();
//             this.showToast(`Added "${book.title}" to cart`);
//             this.updateCartUI();
//         }
//     }

//     searchBooks(query) {
//         const filteredBooks = this.books.filter(book => 
//             book.title.toLowerCase().includes(query.toLowerCase()) ||
//             book.author.toLowerCase().includes(query.toLowerCase())
//         );
//         this.renderBooks(filteredBooks);
//     }

//     updateCartUI() {
//         const cartItems = document.getElementById('cart-items');
//         const cartTotal = document.getElementById('cart-total');
//         const cartCount = document.getElementById('cart-count');
        
//         if (!cartItems || !cartTotal || !cartCount) return;
        
//         cartItems.innerHTML = '';
//         this.cart.items.forEach(item => {
//             const cartItem = document.createElement('div');
//             cartItem.className = 'cart-item';
//             cartItem.innerHTML = `
//                 <div>
//                     <h4>${item.book.title}</h4>
//                     <p>$${item.book.price.toFixed(2)} x ${item.quantity}</p>
//                 </div>
//                 <button class="btn btn-outline" onclick="bookStore.removeFromCart(${item.book.id})">
//                     <i class="fas fa-trash"></i>
//                 </button>
//             `;
//             cartItems.appendChild(cartItem);
//         });

//         cartTotal.textContent = `$${this.cart.total.toFixed(2)}`;
//         cartCount.textContent = this.cart.getTotalItems();
//     }

//     removeFromCart(bookId) {
//         this.cart.removeItem(bookId);
//         this.renderBooks();
//         this.updateCartUI();
//     }

//     showToast(message) {
//         const toast = document.getElementById('toast');
//         if (!toast) return;
        
//         toast.textContent = message;
//         toast.classList.add('show');
//         setTimeout(() => toast.classList.remove('show'), 3000);
//     }

//     processCheckout() {
//         if (this.cart.items.length === 0) {
//             this.showToast('Your cart is empty');
//             return;
//         }
        
//         this.orders.push({ orderId: Date.now(), items: [...this.cart.items] });
//         this.cart.clear();
//         this.updateCartUI();
//         this.showToast('Order placed successfully!');
//     }
// }

// const bookStore = new BookStore();


// class ShoppingCart {
//     constructor() {
//         this.items = [];
//     }

//     addItem(product) {
//         const existingItem = this.items.find(item => item.product.id === product.id);
//         if (existingItem) {
//             existingItem.quantity++;
//         } else {
//             this.items.push({ product, quantity: 1 });
//         }
//     }

//     removeItem(productId) {
//         this.items = this.items.filter(item => item.product.id !== productId);
//     }

//     getTotalItems() {
//         return this.items.reduce((total, item) => total + item.quantity, 0);
//     }

//     get total() {
//         return this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
//     }

//     clear() {
//         this.items = [];
//     }
// }

// class BookStore {
//     constructor() {
//         this.products = [];
//         this.cart = new ShoppingCart();
//         this.orders = [];
//         this.initializeBooks();
//         this.setupEventListeners();
//     }

//     async initializeBooks() {
//         const books_url = "https://www.dbooks.org/api/recent";
//         try {
//             const response = await fetch(books_url);
//             this.books = await response.json();
//             console.log(this.books)
//             this.renderBooks(this.books);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     }

//     setupEventListeners() {
//         document.getElementById('cart-toggle')?.addEventListener('click', () => {
//             document.getElementById('cart-sidebar')?.classList.add('open');
//         });
        
//         document.getElementById('close-cart')?.addEventListener('click', () => {
//             document.getElementById('cart-sidebar')?.classList.remove('open');
//         });
        
//         document.getElementById('search-input')?.addEventListener('input', (e) => {
//             this.searchBooks(e.target.value);
//         });
        
//         document.getElementById('checkout-btn')?.addEventListener('click', () => {
//             this.processCheckout();
//         });
//     }

//     renderBooks() {
//         const grid = document.getElementById('book-grid');
//         if (!grid) return;

  
//         grid.innerHTML = '';
//         books.forEach(book => {
//             console.log(this.books)
//             const card = document.createElement('div');
//             card.className = 'book-card';
//             card.innerHTML = `
//                 <div class="book-image">
//                     <img src="${book.image}" alt="${book.title}" class="product-image">
//                 </div>
//                 <div class="book-info">
//                     <h3>${book.subtitle}</h3>
//                     <p>${book.authors}</p>
//                     <p class="book-price">$${book.url}</p>
//                 </div>
//                 <button class="btn btn-primary" onclick="bookStore.addToCart(${product.id})">
//                     <i class="fas fa-cart-plus"></i> Add to Cart
//                 </button>
//             `;
//             grid.appendChild(card);
//         });
//     }

//     addToCart(productId) {
//         const product = this.products.find(p => p.id === productId);
//         if (product) {
//             this.cart.addItem(product);
//             this.updateCartUI();
//             this.showToast(`Added "${product.title}" to cart`);
//         }
//     }

//     searchBooks(query) {
//         const filteredProducts = this.products.filter(product => 
//             product.title.toLowerCase().includes(query.toLowerCase()) ||
//             product.category.toLowerCase().includes(query.toLowerCase())
//         );
//         this.renderBooks(filteredProducts);
//     }

//     updateCartUI() {
//         const cartItems = document.getElementById('cart-items');
//         const cartTotal = document.getElementById('cart-total');
//         const cartCount = document.getElementById('cart-count');
        
//         if (!cartItems || !cartTotal || !cartCount) return;
        
//         cartItems.innerHTML = '';
//         this.cart.items.forEach(item => {
//             const cartItem = document.createElement('div');
//             cartItem.className = 'cart-item';
//             cartItem.innerHTML = `
//                 <div>
//                     <h4>${item.product.title}</h4>
//                     <p>$${item.product.price.toFixed(2)} x ${item.quantity}</p>
//                 </div>
//                 <button class="btn btn-outline" onclick="bookStore.removeFromCart(${item.product.id})">
//                     <i class="fas fa-trash"></i>
//                 </button>
//             `;
//             cartItems.appendChild(cartItem);
//         });

//         cartTotal.textContent = `$${this.cart.total.toFixed(2)}`;
//         cartCount.textContent = this.cart.getTotalItems();
//     }

//     removeFromCart(productId) {
//         this.cart.removeItem(productId);
//         this.updateCartUI();
//     }

//     showToast(message) {
//         const toast = document.getElementById('toast');
//         if (!toast) return;
        
//         toast.textContent = message;
//         toast.classList.add('show');
//         setTimeout(() => toast.classList.remove('show'), 3000);
//     }

//     processCheckout() {
//         if (this.cart.items.length === 0) {
//             this.showToast('Your cart is empty');
//             return;
//         }
        
//         this.orders.push({ orderId: Date.now(), items: [...this.cart.items] });
//         this.cart.clear();
//         this.updateCartUI();
//         this.showToast('Order placed successfully!');
//     }
// }

// const bookStore = new BookStore();

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push({ product, quantity: 1 });
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    get total() {
        return this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    }

    clear() {
        this.items = [];
    }
}

class BookStore {
    constructor() {
        this.products = [];
        this.cart = new ShoppingCart();
        this.orders = [];
        this.initializeBooks();
        this.setupEventListeners();
    }

    async initializeBooks() {
        const books_url = "https://www.dbooks.org/api/recent";
        try {
            const response = await fetch(books_url);
            const data = await response.json();
            this.products = data.books.map(book => ({
                ...book,
                id: book.id,
                title: book.title,
                category: book.authors,
                price: this.generateRandomPrice()
            }));
            this.renderBooks(this.products);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    generateRandomPrice() {
        return Number((Math.random() * (50 - 5) + 5).toFixed(2));
    }

    setupEventListeners() {
        document.getElementById('cart-toggle')?.addEventListener('click', () => {
            document.getElementById('cart-sidebar')?.classList.add('open');
        });
        
        document.getElementById('close-cart')?.addEventListener('click', () => {
            document.getElementById('cart-sidebar')?.classList.remove('open');
        });
        
        document.getElementById('search-input')?.addEventListener('input', (e) => {
            this.searchBooks(e.target.value);
        });
        
        document.getElementById('checkout-btn')?.addEventListener('click', () => {
            this.processCheckout();
        });
    }

    renderBooks(books = this.products) {
        const grid = document.getElementById('book-grid');
        if (!grid) return;

        grid.innerHTML = '';
        books.forEach(book => {
            const card = document.createElement('div');
            card.className = 'book-card';
            card.innerHTML = `
                <div class="book-image">
                    <img src="${book.image}" alt="${book.title}" class="product-image">
                </div>
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p>${book.authors}</p>
                    <p class="book-price">$${book.price.toFixed(2)}</p>
                </div>
                <button class="btn btn-primary" onclick="bookStore.addToCart('${book.id}')">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            `;
            grid.appendChild(card);
        });
    }

    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            this.cart.addItem(product);
            this.updateCartUI();
            this.showToast(`Added "${product.title}" to cart`);
        }
    }

    searchBooks(query) {
        const filteredProducts = this.products.filter(product => 
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
        this.renderBooks(filteredProducts);
    }

    updateCartUI() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        const cartCount = document.getElementById('cart-count');
        
        if (!cartItems || !cartTotal || !cartCount) return;
        
        cartItems.innerHTML = '';
        this.cart.items.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div>
                    <h4>${item.product.title}</h4>
                    <p>$${item.product.price.toFixed(2)} x ${item.quantity}</p>
                </div>
                <button class="btn btn-outline" onclick="bookStore.removeFromCart('${item.product.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartItems.appendChild(cartItem);
        });

        cartTotal.textContent = `$${this.cart.total.toFixed(2)}`;
        cartCount.textContent = this.cart.getTotalItems();
    }

    removeFromCart(productId) {
        this.cart.removeItem(productId);
        this.updateCartUI();
    }

    showToast(message) {
        const toast = document.getElementById('toast');
        if (!toast) return;
        
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    processCheckout() {
        if (this.cart.items.length === 0) {
            this.showToast('Your cart is empty');
            return;
        }
        
        this.orders.push({ orderId: Date.now(), items: [...this.cart.items] });
        this.cart.clear();
        this.updateCartUI();
        this.showToast('Order placed successfully!');
    }
}

const bookStore = new BookStore();