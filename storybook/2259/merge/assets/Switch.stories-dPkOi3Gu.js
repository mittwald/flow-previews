import{j as r,r as F}from"./iframe-BB26x0WO.js";import{b as n,u as p,F as a,t as S}from"./Form-D1o3KJhA.js";import{R as u,S as l}from"./ResetButton-CQhqclH6.js";import{B as d}from"./Button-BTY4YrG_.js";import{S as x}from"./Section-IPK-m1wF.js";import{A as E}from"./ActionGroup-B49LzYT3.js";import{s as c}from"./Action-DydPJm0t.js";import{S as m}from"./Switch-DEmlbzrx.js";import{F as j}from"./FieldError-EbPb3FIT.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-iWxR2zWf.js";import"./flowComponent-hUu8AB53.js";import"./index-DcuZ1z3T.js";import"./clsx-B-dksMZM.js";import"./index-CQcoQf9d.js";import"./useLocalizedStringFormatter-C6TuZupA.js";import"./context-CFwMSK2D.js";import"./browser-CM4yKXDn.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-B0cjT-cu.js";import"./useRef-BoNolS4p.js";import"./IconWarning-xtBRgQwR.js";import"./remote-BOIRgCVv.js";import"./Text-CVJJy1PS.js";import"./EmulatedBoldText-BMfkuJfp.js";import"./Text-C-QQ-f-7.js";import"./LoadingSpinner-jG3qv65g.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CmW95qcG.js";import"./ProgressBar-1d3YwxHK.js";import"./Label-xrwNKiTo.js";import"./Hidden-Pwu5MO4E.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CXkgZKB9.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DgIl3AW_.js";import"./useFocus-BTahgc6b.js";import"./useFocusRing-3NylsfEU.js";import"./useFocusable-BCoGMlTE.js";import"./ContextMenuSection-DGimkJAp.js";import"./Dialog-rd60ApeF.js";import"./RSPContexts-DeiYbaO6.js";import"./OverlayArrow-DRxGu_ip.js";import"./useControlledState-Bi3RtZ50.js";import"./Collection-3Y1iCCsF.js";import"./CollectionBuilder-DSmRSiR5.js";import"./SelectionIndicator-eJ3IiPq5.js";import"./Separator-BCEfhEi-.js";import"./SelectionManager-CGOc2Oun.js";import"./useEvent-Dv3TI5So.js";import"./useCollator-Cs7p5znT.js";import"./FocusScope-CBDPVkwa.js";import"./VisuallyHidden-GAE_mByz.js";import"./getActionGroupSlot-DvPCnOJu.js";import"./useStatic-CBwNmb4h.js";import"./context-tsnqiuvV.js";import"./useFieldComponent-uqIFFsha.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-C0CJHC_W.js";import"./useFormReset-DftD3Tx4.js";import"./FieldError-BdEQwJOQ.js";import"./AlertText-By5Jrr-P.js";import"./AlertIcon-8w60vasN.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Wr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Dr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,Dr as __namedExportsOrder,Wr as default};
