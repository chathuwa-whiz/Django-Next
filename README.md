# Django + Next.js Full-Stack Application

A modern full-stack web application built with Django REST API backend and Next.js frontend, demonstrating best practices for building scalable web applications.

## 🚀 Features

- **RESTful API** with Django REST Framework
- **Modern Frontend** with Next.js 14 and TypeScript
- **Real-time Data** synchronization between frontend and backend
- **CRUD Operations** for blog posts
- **Responsive Design** with Tailwind CSS
- **Cross-Origin Resource Sharing** (CORS) configured
- **Type Safety** with TypeScript interfaces
- **Component-Based Architecture** with React

## 🛠 Tech Stack

### Backend
- **Django 5.0** - Python web framework
- **Django REST Framework** - Powerful toolkit for building APIs
- **SQLite** - Database (easily switchable to PostgreSQL/MySQL)
- **django-cors-headers** - Handle Cross-Origin Resource Sharing

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **React Hooks** - State management and side effects

## 📁 Project Structure

```
my-fullstack-app/
├── backend/                 # Django backend
│   ├── backend/            # Django project settings
│   │   ├── settings.py     # Main settings
│   │   ├── urls.py         # URL routing
│   │   └── wsgi.py         # WSGI config
│   ├── api/                # Django app
│   │   ├── models.py       # Data models
│   │   ├── views.py        # API views
│   │   ├── serializers.py  # Data serialization
│   │   └── urls.py         # API routing
│   ├── manage.py           # Django management
│   └── requirements.txt    # Python dependencies
└── frontend/               # Next.js frontend
    ├── src/
    │   ├── app/            # App Router pages
    │   ├── components/     # React components
    │   └── lib/            # Utilities and API client
    ├── package.json        # Node dependencies
    └── tailwind.config.js  # Tailwind configuration
```

## 🚦 Getting Started

### Prerequisites

- Python 3.8+
- Node.js 18+
- npm or yarn

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/chathuwa-whiz/Django-Next.git
   cd Django-Next
   ```

2. **Create and activate virtual environment**
   ```bash
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

3. **Install Python dependencies**
   ```bash
   cd backend
   pip install django djangorestframework django-cors-headers
   ```

4. **Run database migrations**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create superuser (optional)**
   ```bash
   python manage.py createsuperuser
   ```

6. **Start Django development server**
   ```bash
   python manage.py runserver
   ```

   Backend will be available at `http://localhost:8000`

### Frontend Setup

1. **Install Node.js dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

2. **Start Next.js development server**
   ```bash
   npm run dev
   ```

   Frontend will be available at `http://localhost:3000`

## 📖 Usage

1. **Access the Application**
   - Open your browser and navigate to `http://localhost:3000`
   - You'll see the main interface with a post creation form and post list

2. **Create Posts**
   - Fill in the title and content in the form
   - Click "Create Post" to add a new blog post
   - The post will appear in the list immediately

3. **View Posts**
   - All posts are displayed on the right side
   - Posts are ordered by creation date (newest first)

4. **Admin Panel** (optional)
   - Access Django admin at `http://localhost:8000/admin`
   - Use superuser credentials to manage data

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/posts/` | Retrieve all posts |
| POST   | `/api/posts/` | Create a new post |
| GET    | `/api/posts/{id}/` | Retrieve a specific post |
| PUT    | `/api/posts/{id}/` | Update a specific post |
| DELETE | `/api/posts/{id}/` | Delete a specific post |

### Example API Usage

```bash
# Get all posts
curl http://localhost:8000/api/posts/

# Create a new post
curl -X POST http://localhost:8000/api/posts/ \
  -H "Content-Type: application/json" \
  -d '{"title": "My First Post", "content": "This is the content"}'
```

## 🎨 Customization

### Adding New Features

1. **Backend (Django)**
   - Add new models in `backend/api/models.py`
   - Create serializers in `backend/api/serializers.py`
   - Add views in `backend/api/views.py`
   - Update URLs in `backend/api/urls.py`

2. **Frontend (Next.js)**
   - Add new API functions in `frontend/src/lib/api.ts`
   - Create new components in `frontend/src/components/`
   - Add new pages in `frontend/src/app/`

### Styling

- Modify Tailwind classes in components for quick styling changes
- Update `tailwind.config.js` for custom themes
- Add custom CSS in global styles if needed

## 🔐 Security Considerations

- **CORS**: Currently configured for development (localhost:3000)
- **DEBUG**: Set to `False` in production
- **SECRET_KEY**: Use environment variables in production
- **Database**: Switch to PostgreSQL/MySQL for production
- **Authentication**: Add JWT or session-based auth for user management

## 🚀 Deployment

### Backend (Django)
- **Railway/Heroku**: Easy deployment with Git integration
- **DigitalOcean**: VPS deployment with more control
- **AWS/GCP**: Cloud deployment for scalability

### Frontend (Next.js)
- **Vercel**: Seamless deployment (recommended)
- **Netlify**: Alternative with great CI/CD
- **Static Export**: For traditional hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] User authentication and authorization
- [ ] Post categories and tags
- [ ] Search and filtering functionality
- [ ] Pagination for large datasets
- [ ] Rich text editor for post content
- [ ] Image upload capability
- [ ] Comments system
- [ ] Unit and integration tests
- [ ] Docker containerization
- [ ] CI/CD pipeline

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or run into issues:

1. Check the [Issues](../../issues) section
2. Create a new issue with detailed description
3. Review the documentation and setup steps

## 🙏 Acknowledgments

- Django Team for the amazing web framework
- Vercel Team for Next.js
- Django REST Framework contributors
- Tailwind CSS team for the utility-first CSS framework

---

**Happy Coding! 🎉**