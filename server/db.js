const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/readium",
  {
    logging: false,
  }
);

const Author = db.define("author", {
  name: {
    type: Sequelize.STRING,
  },
  bio: {
    type: Sequelize.TEXT,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
});

const Comment = db.define("comment", {
  content: {
    type: Sequelize.TEXT,
  },
});

const Story = db.define("story", {
  title: { type: Sequelize.STRING },
  content: { type: Sequelize.TEXT },
  imageUrl: { type: Sequelize.STRING },
});

Author.hasMany(Story);
Story.belongsTo(Author);

Author.hasMany(Comment);
Comment.belongsTo(Author);

Story.hasMany(Comment);
Comment.belongsTo(Story);

module.exports = { db, Author, Comment, Story };
