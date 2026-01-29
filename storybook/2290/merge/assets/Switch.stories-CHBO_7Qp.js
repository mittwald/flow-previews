import{j as r,r as F}from"./iframe-pec-daIN.js";import{a as n,u as p,F as a,t as S,R as u,S as l}from"./ResetButton-BHrI3BIr.js";import{B as d}from"./Button-TbsWowXg.js";import{S as x}from"./Section-DDPMHRBL.js";import{A as E}from"./ActionGroup-Cw8xMur0.js";import{s as c}from"./Action-8dbKhHvU.js";import{S as m}from"./Switch-DXJaXfG9.js";import{F as j}from"./FieldError-r6Iz548x.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-KYdmGlVp.js";import"./flowComponent-Dhs06173.js";import"./index-DJTXzqQk.js";import"./clsx-B-dksMZM.js";import"./index-CHD_W7k-.js";import"./useLocalizedStringFormatter-DQtSZIdS.js";import"./context-6wXKo3vr.js";import"./useRef-DUas6rLX.js";import"./utils-DgvXfbTX.js";import"./ButtonView-DOrN6z8l.js";import"./browser-CB013lxp.js";import"./IconWarning-BNWGnhvf.js";import"./remote-CL_x9DF5.js";import"./Text-KadZ5_Og.js";import"./EmulatedBoldText-CH8TmYXX.js";import"./Text-ChVSp7Zj.js";import"./LoadingSpinner-DJdNJN2d.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BVdTMk7w.js";import"./ProgressBar-BMgVEN8s.js";import"./Label-BgXd0ScX.js";import"./Hidden-BHo1_O4t.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-EN4dlqGk.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BXePSkUY.js";import"./useFocus-8lECnDuB.js";import"./useFocusRing-D1bapTtD.js";import"./useFocusable-DHeceSRU.js";import"./ContextMenuSection-DNSduqHu.js";import"./Dialog-CHeMFU-y.js";import"./RSPContexts-CXn4NsJp.js";import"./OverlayArrow-DWFODRfO.js";import"./useControlledState-C8wEjdVb.js";import"./Collection-CMUMsBwk.js";import"./CollectionBuilder-UpU1wmgz.js";import"./SelectionIndicator-Cx4KKVM-.js";import"./Separator-ChvruPVC.js";import"./SelectionManager-DC-DY4jN.js";import"./useEvent-TrAkXyi-.js";import"./useCollator-Bc_1nfh_.js";import"./FocusScope-D8KAWd4v.js";import"./VisuallyHidden-CRkS1ULJ.js";import"./getActionGroupSlot-BTwNrt7T.js";import"./useStatic-DtKIUYIw.js";import"./context-CSF0VmIA.js";import"./useFieldComponent-BVaTpDhT.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-C94FIhG_.js";import"./useFormReset-DlmAX50c.js";import"./FieldError-DRdVsyAa.js";import"./AlertText-XXHjf97y.js";import"./AlertIcon-Df2ALci7.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Pr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Wr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,Wr as __namedExportsOrder,Pr as default};
