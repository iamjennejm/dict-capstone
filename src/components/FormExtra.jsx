export default function FormExtra(){
    return(
        <div className="flex items-center justify-between ">  
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className=" text-blue-600 focus:ring-blue-700 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="remember">
            Remember me
          </label>
        </div>

        <div className="">
          <a href="#" className="">
            Forgot your password?
          </a>
        </div>
      </div>

    )
}