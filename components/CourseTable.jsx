import React from "react";
const CourseTable = (props) => {
  console.log('hh', props.data);
  let email = props.email;
  return (
    <div>
      <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
        <div className="flex flex-col justify-center h-full">
          {/* Table */}
          <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Course Title
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Platform</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Status</div>
                      </th>
                    </tr>
                  </thead>
                  {props.data.map((current) => {
                  return  <tbody className="text-sm divide-y divide-gray-100">
                      <tr>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="font-medium text-gray-800">
                              {current.title}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{current.provider}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-green-500">
                            {current.completed ? (
                              "Completed"
                            ) : (
                              <button
                                onClick={async () => {
                                  await fetch(
                                    `/api/markCourseAsCompleted?email=${email}&title=${current.title}&provider=${current.provider}`
                                  );
                                }}
                              >
                                Mark as complete
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    </tbody>;
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseTable;