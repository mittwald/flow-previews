import{j as r,r as F}from"./iframe-CIXg2wml.js";import{a as n,u as p,F as a,t as S,R as u,S as l}from"./ResetButton-C1eP4EZB.js";import{B as d}from"./Button-BNUMHVa-.js";import{S as x}from"./Section-BHH0DwO5.js";import{A as E}from"./ActionGroup-D8b5vxgA.js";import{s as c}from"./Action-BuQCX6jm.js";import{S as m}from"./Switch-DHew7IOY.js";import{F as j}from"./FieldError-BH2vnwI0.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DkFDoLPd.js";import"./flowComponent-2SDDcL6i.js";import"./index-stwZ4S38.js";import"./clsx-B-dksMZM.js";import"./index-CUACQQJf.js";import"./useLocalizedStringFormatter-DQ68Yc1-.js";import"./context-TKY6ae7T.js";import"./useRef-BLTU0nYb.js";import"./utils-E3QCR4Ei.js";import"./ButtonView-BpZiG3F4.js";import"./browser-CYeJE0Iy.js";import"./IconWarning-CiSujg9K.js";import"./remote-8tD3tcl0.js";import"./Text-ClE4EaJv.js";import"./EmulatedBoldText--LsvyM20.js";import"./Text-BTcAnKOQ.js";import"./LoadingSpinner-DwfvHd6g.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BbDeItRQ.js";import"./ProgressBar-CFDr9Wxg.js";import"./Label-DkYkYhBQ.js";import"./Hidden-CGz-Nf89.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-pvILaDrT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C_LDf41x.js";import"./useFocus-Xgz2P1v-.js";import"./useFocusRing-CJfArHTm.js";import"./useFocusable-LSbGRyyR.js";import"./ContextMenuSection-C_CrFgfB.js";import"./Dialog-f9GqGINB.js";import"./RSPContexts-CMEo-sGH.js";import"./OverlayArrow-Bgb8SBf8.js";import"./useControlledState-euBd3hty.js";import"./Collection-PnRWL8bH.js";import"./CollectionBuilder-CsxYH4iw.js";import"./SelectionIndicator-Ck0MHypk.js";import"./Separator-BD9AYapb.js";import"./SelectionManager-C-rzUvsK.js";import"./useEvent-D8tLlxQx.js";import"./useCollator-nDdvYdK7.js";import"./FocusScope-BVD53JA4.js";import"./VisuallyHidden-XLC_SZ8x.js";import"./getActionGroupSlot-DDSDNzLp.js";import"./useStatic-CosBs7oI.js";import"./context-CXkwD4h5.js";import"./useFieldComponent-D7V8J4vf.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CFdCdm3H.js";import"./useFormReset-BWhLZN3-.js";import"./FieldError-B2EiL9vq.js";import"./AlertText-Cyx_yayU.js";import"./AlertIcon-DJUqjVOR.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Pr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
