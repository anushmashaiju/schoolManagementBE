const sendToken = async (user, res) => {
  try {
    const access_token = user.generateAcessToken();

    if (!access_token) {
      throw new Error("token  generation  failed");
    }

    res.status(201).json({
      token: access_token,
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendToken;
