export function Features() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Student Voice</h2>
              <p className="max-w-[600px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                We represent and amplify the voices of all students, ensuring your concerns and ideas are heard.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Events & Activities</h2>
              <p className="max-w-[600px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                We organize engaging events and activities that foster school spirit and community.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Leadership Development</h2>
              <p className="max-w-[600px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                We provide opportunities for students to develop leadership skills and make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  