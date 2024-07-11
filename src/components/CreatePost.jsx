import React from 'react'

export default function CreatePost() {
  return (
    <>
        <form action="#" method="post"  className="shadow p-4 rounded bg-light ">
            <div className="form-body">
                <div className=" ">
                    <div className="form-group  ">
                        <label className="control-label"> Name</label>
                        <input type="text" name="patient_name" className="form-control" placeholder="Name"/>
                    </div>
                    <div className="form-group ">
                        <label className="control-label">Birth Date</label>
                        <input type="date" name="birthdate" className="form-control" placeholder="Date"/>
                    </div>
                    <div className="form-group ">
                        <label className="control-label">Age</label>
                        <input type="text" name="age" id="old" className="form-control" placeholder="Age"/>
                    </div>
                </div>
            </div>
            <div className="form-group row mt-4">
                <div className="col text-center">
                    <button type="submit" className="btn btn-success btn-lg shadow-sm">Submit</button>
                </div>
            </div>
        </form>
    </>
  )
}
