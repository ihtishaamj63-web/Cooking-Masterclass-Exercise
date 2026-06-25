<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>COOKING MASTERCLASS</h3>
        <div class="footer-line"></div>
        <p>
          Curating exceptional cooking workshops hosted by expert chefs from
          around the world.
        </p>
      </div>

      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">All Classes</a></li>
          <li><a href="#">Available Classes</a></li>
          <li><a href="#">Our Chefs</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Contact</h4>
        <ul>
          <li>info@cookingmasterclass.com</li>
          <li>+1 (555) 123-4567</li>
          <li>New York, NY 10001</li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Follow Us</h4>
        <div class="social-links">
          <a href="#" class="social-link">Facebook</a>
          <a href="#" class="social-link">Instagram</a>
          <a href="#" class="social-link">Twitter</a>
          <a href="#" class="social-link">YouTube</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2024 Cooking Masterclass. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  background: #1a1a1a;
  color: #ffffff;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
}

.footer-section h3 {
  font-family: "Arial", sans-serif;
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 2px;
  margin: 0 0 1rem;
  color: #ffffff;
}

.footer-section h4 {
  font-family: "Arial", sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 0 0 1.2rem;
  color: #999;
}

.footer-line {
  width: 40px;
  height: 2px;
  background: #c41e3a;
  margin-bottom: 1rem;
}

.footer-section p {
  color: #999;
  font-size: 0.9rem;
  line-height: 1.6;
  font-family: "Arial", sans-serif;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 0.8rem;
}

.footer-section ul li a,
.footer-section ul li {
  color: #999;
  text-decoration: none;
  font-size: 0.9rem;
  font-family: "Arial", sans-serif;
  transition: color 0.2s ease;
}

.footer-section ul li a:hover {
  color: #c41e3a;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.social-link {
  color: #999;
  text-decoration: none;
  font-size: 0.9rem;
  font-family: "Arial", sans-serif;
  transition: color 0.2s ease;
}

.social-link:hover {
  color: #c41e3a;
}

.footer-bottom {
  border-top: 1px solid #333;
  padding: 1.5rem 2rem;
  text-align: center;
}

.footer-bottom p {
  color: #666;
  font-size: 0.8rem;
  font-family: "Arial", sans-serif;
  margin: 0;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 1.5rem 1.5rem;
  }

  .footer-bottom {
    padding: 1.5rem;
  }
}
</style>
