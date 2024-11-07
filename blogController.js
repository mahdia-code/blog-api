// blogController.js
let blogs = []; 

const blogController = {
    createBlog: (req, res) => {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required' });
        }
        const newBlog = { id: blogs.length + 1, title, content };
        blogs.push(newBlog);
        res.status(201).json({ message: 'Blog created successfully' });
    },

    readBlog: (req, res) => {
        if (blogs.length === 0) {
            return res.status(404).json({ message: 'No blogs found' });
        }
        res.status(200).json({ message: 'Blog read successfully', blogs });
    },

    updateBlog: (req, res) => {
        const { id, title, content } = req.body;
        const blog = blogs.find(b => b.id === id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        if (title) blog.title = title;
        if (content) blog.content = content;
        res.status(200).json({ message: 'Blog updated successfully' });
    },

    deleteBlog: (req, res) => {
        const { id } = req.body;
        const index = blogs.findIndex(b => b.id === id);
        if (index === -1) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        blogs.splice(index, 1);
        res.status(200).json({ message: 'Blog deleted successfully' });
    }
};

module.exports = blogController;