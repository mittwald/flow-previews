import{j as e,r as x}from"./iframe-BQyHcTNh.js";import{a as d,u,F as p,t as v}from"./Form-Dghv3XBA.js";import{L as i}from"./Label-JK740Dk1.js";import{B as m}from"./Button-ieCP1ArV.js";import{S as j}from"./Section-D4fUAwGu.js";import{A as F}from"./ActionGroup-WBeyu3m_.js";import{s as c}from"./Action-Bi6tM7BN.js";import{R as s,b as r}from"./RadioButton-Bdpn-2H5.js";import{F as R}from"./FieldError-AQx_Co0q.js";import"./index-nuYtCEEu.js";import"./dynamic-V8J33Kah.js";import"./flowComponent-n43oODHt.js";import"./index-BkXVqc6U.js";import"./clsx-B-dksMZM.js";import"./index-D5h5WobT.js";import"./useLocalizedStringFormatter--7zmdW8B.js";import"./context-BymCJUNL.js";import"./browser-CktdIn7a.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-D_Hg-3H4.js";import"./utils-CdCPWCHO.js";import"./Hidden-c61kZDYL.js";import"./IconWarning-D8COeLpG.js";import"./Text-_hc15B6K.js";import"./EmulatedBoldText-77q4Ify-.js";import"./Text-C9BF5CjQ.js";import"./LoadingSpinner-CEYsHom-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C2idEpfM.js";import"./ProgressBar-BXdleHGA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DeM_oEx1.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-qWGUTJsN.js";import"./useFocus-COF7nP05.js";import"./useFocusRing-gNgZcCH8.js";import"./useFocusable-DJd2VQkc.js";import"./ContextMenuSection-ZyWidMUH.js";import"./Dialog-CTkyeFiO.js";import"./RSPContexts-BtdGc8q9.js";import"./OverlayArrow-Dp6PlRHE.js";import"./useControlledState-TEYDAVm8.js";import"./Collection-DEfh8kkF.js";import"./CollectionBuilder-D9BuGY1P.js";import"./SelectionIndicator-BnroM9vv.js";import"./Separator-BIV1anzw.js";import"./SelectionManager-DeoXhPYy.js";import"./useEvent-BWXlYds5.js";import"./useCollator-B9ukcsEW.js";import"./FocusScope-DELlCJxb.js";import"./VisuallyHidden-rd1eTAwo.js";import"./getActionGroupSlot-DtqoduiB.js";import"./useStatic-CIMbf_kn.js";import"./context-B5Yt5ZbD.js";import"./ColumnLayout-CZgjYIcC.js";import"./useFieldComponent-Cyrlnow6.js";import"./ClearPropsContext-CD4xLCoc.js";import"./useMakeFocusable-QwAUUrkX.js";import"./RadioGroup-BZjAm-ZF.js";import"./Form-CjlO_WmK.js";import"./useFormValidation-Dr6xiKJA.js";import"./useFormReset-DB-Y7LtK.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),_e={title:"Integrations/React Hook Form/RadioGroup",component:d,render:()=>{const o=async f=>{await c(1500),g(f)},h=u({defaultValues:{gender:"",genderDefaultValue:"diverse",genderRequired:""}}),l=v();return e.jsx(p,{form:h,onSubmit:o,children:e.jsxs(j,{children:[e.jsx(l,{name:"gender",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(l,{name:"genderDefaultValue",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(l,{name:"genderRequired",rules:{required:"Please select your gender"},children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(F,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},n={},a={render:()=>{const o=u();return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"}),e.jsx(R,{children:"ErrorFromOuterFieldError!"})]})]})}},t={render:()=>{const o=u();return e.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <RadioGroup>
            <Label>Gender</Label>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="diverse">Diverse</Radio>
          </RadioGroup>
        </Field>
        <RadioGroup isInvalid>
          <Label>Gender</Label>
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
          <Radio value="diverse">Diverse</Radio>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </RadioGroup>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <RadioGroup>
            <Label>Gender</Label>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="diverse">Diverse</Radio>
          </RadioGroup>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};const qe=["Default","WithFieldError","WithFocus"];export{n as Default,a as WithFieldError,t as WithFocus,qe as __namedExportsOrder,_e as default};
