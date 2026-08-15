/*
  Northstar Support Desk — dashboard shell logic
  Owner (setup/scaffold): John

  This file wires the two lookup forms to the sample data files and
  renders results in the "ticket stub" style defined in styles.css.

  Handoff notes:
  - Caroline: swap findOrder()/findProduct() for the real matching logic
    (order-status feature / stock-availability feature tasks).
  - Validation/error-handling owner: the try/catch blocks below are a
    starting point only — flesh out format checks + network error states.
*/

let orders = [];
let products = [];

// Small helpers
function escapeHtml(input) {
  return String(input == null ? '' : input)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function loadData() {
  try {
    const [ordersRes, productsRes] = await Promise.all([
      fetch('data/orders.json'),
      fetch('data/products.json')
    ]);
    orders = await ordersRes.json();
    products = await productsRes.json();
  } catch (err) {
    console.error('Could not load sample data:', err);
  }
}

// --- Order status ---------------------------------------------------

function findOrder(query) {
  const normalizedQuery = String(query || '').trim().toLowerCase();

  if (!normalizedQuery) {
    return null;
  }

  return orders.find(order => {
    const orderId = String(order && order.id || '').trim().toLowerCase();

    return orderId === normalizedQuery;
  }) || null;
}

function renderOrderResult(order) {
  const el = document.getElementById('order-result');
  el.hidden = false;
  el.setAttribute('role', 'status');
  el.setAttribute('aria-live', 'polite');

  if (!order) {
    el.innerHTML = `
      <p class="stub--not-found">
        No order found with that number.
        Double check the order ID and try again.
      </p>
    `;
    return;
  }

  const statusMessages = {
    processing: 'Your order is being prepared.',
    shipped: 'Your order has been shipped.',
    delivered: 'Your order has been delivered.'
  };

  const status = String(order.status || '').toLowerCase();

  const message =
    statusMessages[status] || 'Your order status is currently unavailable.';

  const isCompleted =
    status === 'shipped' || status === 'delivered';

  const badgeClass = isCompleted
    ? 'badge--ok'
    : 'badge--wait';

  el.innerHTML = `
    <div class="stub__row">
      <span class="stub__label">Order</span>
      <span class="stub__value">${escapeHtml(order.id)}</span>
    </div>

    <div class="stub__row">
      <span class="stub__label">Status</span>
      <span class="badge ${badgeClass}">
        ${escapeHtml(order.status)}
      </span>
    </div>

    <div class="stub__row">
      <span class="stub__label">Update</span>
      <span class="stub__value">${escapeHtml(message)}</span>
    </div>

    <div class="stub__row">
      <span class="stub__label">Est. delivery</span>
      <span class="stub__value">${escapeHtml(order.estimatedDelivery)}</span>
    </div>
  `;
}

// --- Stock availability ----------------------------------------------

function findProduct(query) {
  const normalizedQuery = String(query || '').trim().toLowerCase();

  if (!normalizedQuery) {
    return null;
  }

  return products.find(product => {
    const sku = String(product && product.sku || '').trim().toLowerCase();
    const name = String(product && product.name || '').trim().toLowerCase();

    return sku === normalizedQuery || name.includes(normalizedQuery);
  }) || null;
}

function renderStockResult(product) {
  const el = document.getElementById('stock-result');
  el.hidden = false;
  el.setAttribute('role', 'status');
  el.setAttribute('aria-live', 'polite');

  if (!product) {
    el.innerHTML = `
      <p class="stub--not-found">
        No product matched that name or SKU.
        Try searching by product name or exact SKU.
      </p>
    `;
    return;
  }

  const inStock = Number(product.stock) > 0;

  const badgeClass = inStock
    ? 'badge--ok'
    : 'badge--wait';

  const badgeText = inStock
    ? `In stock (${escapeHtml(product.stock)} available)`
    : 'Out of stock';

  const message = inStock
    ? 'This product is currently available.'
    : 'This product is currently unavailable.';

  el.innerHTML = `
    <div class="stub__row">
      <span class="stub__label">Product</span>
      <span class="stub__value">${escapeHtml(product.name)}</span>
    </div>

    <div class="stub__row">
      <span class="stub__label">SKU</span>
      <span class="stub__value">${escapeHtml(product.sku)}</span>
    </div>

    <div class="stub__row">
      <span class="stub__label">Availability</span>
      <span class="badge ${badgeClass}">
        ${escapeHtml(badgeText)}
      </span>
    </div>

    <div class="stub__row">
      <span class="stub__label">Update</span>
      <span class="stub__value">${escapeHtml(message)}</span>
    </div>
  `;
}

// --- Form wiring -------------------------------------------------------

function wireForm({ formId, inputId, errorId, resultId, lookupFn, renderFn }) {
  const form = document.getElementById(formId);
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);

  input.addEventListener('input', () => {
    error.hidden = true;
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value.trim();

    if (!value) {
      error.hidden = false;
      document.getElementById(resultId).hidden = true;
      return;
    }

    error.hidden = true;
    const match = lookupFn(value);
    renderFn(match);
  });
}

async function init() {
  await loadData();

  wireForm({
    formId: 'order-form',
    inputId: 'order-id',
    errorId: 'order-error',
    resultId: 'order-result',
    lookupFn: findOrder,
    renderFn: renderOrderResult
  });

  wireForm({
    formId: 'stock-form',
    inputId: 'product-id',
    errorId: 'stock-error',
    resultId: 'stock-result',
    lookupFn: findProduct,
    renderFn: renderStockResult
  });
}

document.addEventListener('DOMContentLoaded', init);
