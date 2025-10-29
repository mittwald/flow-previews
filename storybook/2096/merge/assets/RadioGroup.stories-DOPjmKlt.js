import{j as e,r as x}from"./iframe-Tz0J7D4Y.js";import{a as d,u,F as p,t as v}from"./Form-BgW8CYzp.js";import{L as i}from"./Label-B5yMZfoe.js";import{B as m}from"./Button-DpdNCW8h.js";import{S as j}from"./Section-weR_orzI.js";import{A as F}from"./ActionGroup-B5YBX1jR.js";import{s as c}from"./Action-DDvM_T4v.js";import{R as s,b as r}from"./RadioButton-CTdwqDWH.js";import{F as R}from"./useFieldComponent-C0OSANtm.js";import"./index-nuYtCEEu.js";import"./flowComponent-D9iztwJS.js";import"./index-VdFQ9tny.js";import"./clsx-B-dksMZM.js";import"./index-DcQDRvJj.js";import"./useLocalizedStringFormatter-C_7XcxTl.js";import"./context-B1lt5Uf-.js";import"./browser-D-jX3MAX.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CPyZQCy0.js";import"./utils-ja91N2Nx.js";import"./Hidden-DjVegiGf.js";import"./IconWarning-GPTcuJJ8.js";import"./Text-C3A_eB8w.js";import"./EmulatedBoldText-BtDnNRTP.js";import"./Text-c129sBMT.js";import"./LoadingSpinner-BMsTEO2Y.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BC9SKpFI.js";import"./ProgressBar-netLLnC9.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Uehxuchb.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dhdcn6rN.js";import"./useFocus-rnV-N6wP.js";import"./useFocusRing-DD4M3uYZ.js";import"./useFocusable-CEtDZmZ1.js";import"./ContextMenuSection-8rmu86AD.js";import"./Dialog-BCA3xQKB.js";import"./RSPContexts-DMflUE_X.js";import"./OverlayArrow-Dm3PErwP.js";import"./useControlledState-JfMoTEl5.js";import"./Collection-CbkRGRtR.js";import"./CollectionBuilder-H4miGbTt.js";import"./SelectionIndicator-UdR--M88.js";import"./Separator-Dwu5egoh.js";import"./SelectionManager-CcDSxweN.js";import"./useEvent-C9-diYfc.js";import"./useCollator-Sp-uU6d6.js";import"./FocusScope-DD4VjzQ6.js";import"./VisuallyHidden-uhmmiNoS.js";import"./dynamic-CoftMrEe.js";import"./getActionGroupSlot-DlZypVxI.js";import"./useStatic-BDAMVNvv.js";import"./context-CCjUHDCq.js";import"./ColumnLayout-DHfroZpG.js";import"./useMakeFocusable-DcsG0xi9.js";import"./RadioGroup-B3nEuCbF.js";import"./Form-CgZM-WfL.js";import"./useFormValidation-BhAnQ22o.js";import"./useFormReset-Dr7kbm5c.js";import"./react-children-utilities-q3rjAEhP.js";import"./ClearPropsContext-DQdi6jL0.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),_e={title:"Integrations/React Hook Form/RadioGroup",component:d,render:()=>{const o=async f=>{await c(1500),g(f)},h=u({defaultValues:{gender:"",genderDefaultValue:"diverse",genderRequired:""}}),l=v();return e.jsx(p,{form:h,onSubmit:o,children:e.jsxs(j,{children:[e.jsx(l,{name:"gender",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(l,{name:"genderDefaultValue",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(l,{name:"genderRequired",rules:{required:"Please select your gender"},children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(F,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},n={},a={render:()=>{const o=u();return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"}),e.jsx(R,{children:"ErrorFromOuterFieldError!"})]})]})}},t={render:()=>{const o=u();return e.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
