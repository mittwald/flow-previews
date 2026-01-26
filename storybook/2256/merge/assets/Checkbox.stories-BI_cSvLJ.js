import{j as r,r as x}from"./iframe-ICCBaEZ0.js";import{a as c,u as p,F as a,t as F,R as l,S as f}from"./ResetButton-DHM0HwV0.js";import{B as d}from"./Button-BPUjkcWl.js";import{S as j}from"./Section-f7ELsjIS.js";import{A as b}from"./ActionGroup-Cyu4G9Rw.js";import{s as u}from"./Action-BI-eqtgf.js";import{C as t}from"./Checkbox-BMrumPje.js";import{F as E}from"./FieldError-CXiPiawI.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D4nz3o_q.js";import"./flowComponent-BP2zunxu.js";import"./index-Bz_4mo81.js";import"./clsx-B-dksMZM.js";import"./index-Dbcsq1pl.js";import"./useLocalizedStringFormatter-CSoJHnbm.js";import"./context-BA_6GkxW.js";import"./useRef-CiWut0dQ.js";import"./utils-Bdyed02U.js";import"./ButtonView-BszEJvVk.js";import"./browser-BXZux_wF.js";import"./IconWarning-DNTau7lk.js";import"./remote-CrBsxa38.js";import"./Text-wotACWdr.js";import"./EmulatedBoldText-CJhsU2oU.js";import"./Text-6VRpzXYD.js";import"./LoadingSpinner-DZTaEi_R.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CEB885Bq.js";import"./ProgressBar-DNR75UAD.js";import"./Label-AJl99fin.js";import"./Hidden-DZAoEMIQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CrekXyf_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bkx3Up2v.js";import"./useFocus-sIQn0Mmu.js";import"./useFocusRing-C-l0oxpd.js";import"./useFocusable-Da3kr2d3.js";import"./ContextMenuSection-CUOZwZ8m.js";import"./Dialog-YdLNLYvV.js";import"./RSPContexts-yVX-lDWS.js";import"./OverlayArrow-BzKyLQdS.js";import"./useControlledState-0-xiytms.js";import"./Collection-CXuidDK4.js";import"./CollectionBuilder-D1MQIG8v.js";import"./SelectionIndicator-6JK-VVYS.js";import"./Separator-Npr-6AmU.js";import"./SelectionManager-CgsCNKwD.js";import"./useEvent-DVme5dXh.js";import"./useCollator-hfiTQ-EU.js";import"./FocusScope-BgxYME-V.js";import"./VisuallyHidden-CIUq3upT.js";import"./getActionGroupSlot-BNL4E6BB.js";import"./useStatic-EBffme0U.js";import"./context-CFn3lEGQ.js";import"./useFieldComponent-C2gLyH5u.js";import"./FieldError-Uso8nKHu.js";import"./Form-Dqb0_Mn-.js";import"./useFormValidation-BK0HiA-u.js";import"./useToggleState-CF685k98.js";import"./useFormReset-mc9YwuWr.js";import"./AlertText-CQRiaMTC.js";import"./AlertIcon-DVbl3jDT.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),qr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...i.parameters?.docs?.source}}};const wr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,wr as __namedExportsOrder,qr as default};
