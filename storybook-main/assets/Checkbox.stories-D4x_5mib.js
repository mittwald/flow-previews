import{j as r,r as x}from"./iframe-BBHdjMJ6.js";import{a as c,u as p,F as a,t as F,R as l,S as f}from"./ResetButton-CsgBdy31.js";import{B as d}from"./Button-P5io5pgW.js";import{S as j}from"./Section-BGan-5YC.js";import{A as b}from"./ActionGroup-CRSw6t78.js";import{s as u}from"./Action-qWLGDSFj.js";import{C as t}from"./Checkbox-B5rjq-2W.js";import{F as E}from"./FieldError-DdPPmb_Z.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cm-8a2Jt.js";import"./flowComponent-Dr_ijNQm.js";import"./index-DnL9UocU.js";import"./clsx-B-dksMZM.js";import"./index-FWsSj9e8.js";import"./useLocalizedStringFormatter-BwLVFU66.js";import"./context-XjgBcoVm.js";import"./useRef-CBW8wZsc.js";import"./utils-gePwv3Li.js";import"./ButtonView-CbJs68it.js";import"./browser-BpCzgQab.js";import"./IconWarning-CyXtdbqA.js";import"./remote-BykRkK4-.js";import"./Text--O-2RTYx.js";import"./EmulatedBoldText-DKBJ0QzH.js";import"./Text-CkngT02A.js";import"./LoadingSpinner-Crr5qNPb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DU6B0w55.js";import"./ProgressBar-C-Wzcy4_.js";import"./Label-Cq91lcPj.js";import"./Hidden-DJEpRFXv.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CDbjeNSC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BicAkDgM.js";import"./useFocus-CRClO8Jv.js";import"./useFocusRing-ClLYF0Wy.js";import"./useFocusable-CfkxnlZA.js";import"./ContextMenuSection-jSS7omV8.js";import"./Dialog-BeRC8Qw9.js";import"./RSPContexts-C5-K-EZi.js";import"./OverlayArrow-D6Rp8cyC.js";import"./useControlledState-CTrYQ-In.js";import"./Collection-C6Dl6i0H.js";import"./CollectionBuilder-DfMW8xNP.js";import"./SelectionIndicator-DJhqJXB-.js";import"./Separator-Dx2ExPSk.js";import"./SelectionManager-CKq6y8XV.js";import"./useEvent-0gy1gNIh.js";import"./useCollator-CP6m8uNZ.js";import"./FocusScope-0pM5bnV4.js";import"./VisuallyHidden-D-7oSl-x.js";import"./getActionGroupSlot-DTels04I.js";import"./useStatic-C9-mjYGz.js";import"./context-DiIk_s_n.js";import"./useFieldComponent-DcHfvLKR.js";import"./FieldError-D_l7_28D.js";import"./Form-Dur_LiI2.js";import"./useFormValidation-jj6Fwru_.js";import"./useToggleState-DFbImMV5.js";import"./useFormReset-CMCffA9I.js";import"./AlertText-Du4ye3-W.js";import"./AlertIcon-BGgK2Oqf.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),qr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
