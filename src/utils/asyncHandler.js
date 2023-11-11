import { promises } from "tar/lib/read-entry";

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).reject((err) => next(err));
  };
};

export default asyncHandler;

// Writing higher order function(HOF) EXAMPLE.. (function calling another function as variable or expression)

// const asyncHandler = (func) => () => {}

// similarly writing HOF with async

// const asyncHandler = (func) => async () => {};

/*
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};
*/
