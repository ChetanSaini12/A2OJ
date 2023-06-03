const User = require("./../model/user");

const createUser = async function (req, res, next) {
  try {
    const user = await User.create({ userId: req.params.userId });
    res.status(200).json({ message: "created successfully", data: user });
  } catch (error) {
    error.message = error.message || "unexpected Error";
    next(error);
  }
};

const getUser = async function getUser(req, resp, next) {
  try {
    const result = await User.aggregate([
      { $group: { _id: null, userIds: { $addToSet: "$userId" } } },
    ]);

    const userIds = (result.length > 0 ? result[0].userIds : []).join(";");

    resp.status(200).json({ data: userIds, status: 200 });
  } catch (error) {
    error.message = error.message || "Data Can't be fetched";
    next(error);
  }
};

module.exports = {
  createUser,
  getUser,
};
