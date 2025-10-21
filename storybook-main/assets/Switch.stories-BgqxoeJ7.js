import{j as r,r as f}from"./iframe-BziZnbbf.js";import{a as p,u as a,F as c,t as F}from"./Form-Zt6xDFWh.js";import{B as m}from"./Button-BsOsKcj7.js";import{S as h}from"./Section-Bis1QFtl.js";import{A as x}from"./ActionGroup-B1HE_ON6.js";import{s as d}from"./Action-CnCRBxQU.js";import{S as n}from"./Switch-CdSeU6yu.js";import{F as S}from"./useFieldComponent-yHiwdZcU.js";import"./index-nuYtCEEu.js";import"./flowComponent-JHIQPa02.js";import"./index-DKHZz9bz.js";import"./clsx-B-dksMZM.js";import"./index-_EM7mgZk.js";import"./useLocalizedStringFormatter-Bzp87kLk.js";import"./context-BDhuSyDo.js";import"./browser-BTvp61GS.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-CJvxfsrj.js";import"./Text-C2tTVpcM.js";import"./EmulatedBoldText-BRsPLuIL.js";import"./Text-fJHWLREE.js";import"./utils-C0RTyIHD.js";import"./LoadingSpinner-DE7xOG4e.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Czn71cHm.js";import"./ProgressBar-BJFeHLpH.js";import"./Label-SVpetMhq.js";import"./Hidden-Bnko_h1D.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-fjbW-LOk.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D5emiALM.js";import"./useFocus-ycXwMZE-.js";import"./useFocusRing-CNOPmzHu.js";import"./useFocusable-KPf6K6gw.js";import"./ContextMenuSection-DQ1qfDRr.js";import"./Dialog-DGrVuAqN.js";import"./RSPContexts-CRnpb7uM.js";import"./OverlayArrow-CA6KUquN.js";import"./useControlledState-DwOoiAv5.js";import"./Collection-BOZKLSmZ.js";import"./CollectionBuilder-9i2XwoUY.js";import"./SelectionIndicator-8CTToPIL.js";import"./Separator-CEtV88kO.js";import"./SelectionManager-D4K7ysz9.js";import"./useEvent-D5k1dgJL.js";import"./useCollator-DChPehJd.js";import"./FocusScope-BuPYUVVd.js";import"./VisuallyHidden-zje2lKRT.js";import"./dynamic-BFzO3wyN.js";import"./getActionGroupSlot-CSQVqoba.js";import"./useStatic-D6NPOV-R.js";import"./context-OFPqHilR.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-BDpn2_Dk.js";import"./useToggleState-DifH9MCn.js";import"./useFormReset-CzU-0SyG.js";import"./react-children-utilities-gpYjsLoV.js";import"./ClearPropsContext-DUOPbXiH.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,j=E("submit"),Or={title:"Integrations/React Hook Form/Switch",component:p,render:()=>{const t=async l=>{await d(5e3),j(l)},o=a({defaultValues:{isEnabled:!1}}),u=F();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(h,{children:[r.jsx(u,{name:"isEnabled",children:r.jsx(n,{children:"Text"})}),r.jsx(x,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},e={},i={render:t=>{const o=a();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{...t,children:"Field1"})}),r.jsxs(n,{children:["Field2",r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field1</Switch>
        </Field>
        <Switch>
          Field2
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Switch>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field</Switch>
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
}`,...s.parameters?.docs?.source}}};const _r=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,_r as __namedExportsOrder,Or as default};
