import{j as r,r as F}from"./iframe-DcJYxA4H.js";import{a as n,u as p,F as a,t as S,R as u,S as l}from"./ResetButton-CXFeL3NK.js";import{B as d}from"./Button-ByRmZgOS.js";import{S as x}from"./Section-BfQoljOJ.js";import{A as E}from"./ActionGroup-B_pSbWAL.js";import{s as c}from"./Action-Dlz18l4c.js";import{S as m}from"./Switch-CNxKYhBR.js";import{F as j}from"./FieldError-B2Tu46Cr.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BeRAROrj.js";import"./flowComponent-BLRiscD5.js";import"./index-DqZIl2km.js";import"./clsx-B-dksMZM.js";import"./index-BLaZpk-P.js";import"./useLocalizedStringFormatter-CF3rZOx1.js";import"./context-qV6jeEP3.js";import"./useRef-SxwSBVoc.js";import"./utils-DilzIpMR.js";import"./ButtonView-ByBYPO5_.js";import"./browser-DuGwj8Dx.js";import"./IconWarning-C1b-rglK.js";import"./remote-Bz3vE1W1.js";import"./Text-DtgxB8-I.js";import"./EmulatedBoldText-B8m3SU7U.js";import"./Text-CtAF_MdJ.js";import"./LoadingSpinner-Cq4_0Dfa.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-igLlXErA.js";import"./ProgressBar-NBTy9B_U.js";import"./Label-C5pMaxrW.js";import"./Hidden-DfDLmmBw.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpAfaget.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CoiuKGvm.js";import"./useFocus-CBKKPZUx.js";import"./useFocusRing-KHZvHeNt.js";import"./useFocusable-CBOZtalu.js";import"./ContextMenuSection-QDoQ1eGc.js";import"./Dialog-Dz1EswEt.js";import"./RSPContexts-B2T9ptP_.js";import"./OverlayArrow-wMKeeSQ0.js";import"./useControlledState-BqUYry3y.js";import"./Collection-CKg9fKRI.js";import"./CollectionBuilder-Cc_loPne.js";import"./SelectionIndicator-DgZf9HEL.js";import"./Separator-BAQ5hF_i.js";import"./SelectionManager-yA8P5A7T.js";import"./useEvent-stiRI7x_.js";import"./useCollator-CoXNjTxb.js";import"./FocusScope-CWIATeBq.js";import"./VisuallyHidden-5QTr2j1N.js";import"./getActionGroupSlot-DWUJnrNV.js";import"./useStatic-CtzGIMZo.js";import"./context-D2f0m16x.js";import"./useFieldComponent-rnjT2dRC.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Dz0vAxRa.js";import"./useFormReset-BxLymg31.js";import"./FieldError-BmNSHu0e.js";import"./AlertText-DzwHJxKU.js";import"./AlertIcon-5jttAq4b.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Pr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
