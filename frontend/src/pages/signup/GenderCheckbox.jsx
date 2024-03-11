const GenderCheckbox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <lable className="label gap-2 cursor-pointer">
          <span className="lable-text">Male</span>
          <input type="checkbox" className="checkbox border-slate-500" />
        </lable>
      </div>
      <div className="form-control">
        <lable className="label gap-2 cursor-pointer">
          <span className="lable-text">Female</span>
          <input type="checkbox" className="checkbox border-slate-500" />
        </lable>
      </div>
    </div>
  );
};

export default GenderCheckbox;
