import{j as r,r as x}from"./iframe-BrcQhcwR.js";import{a as c,u as p,F as a,t as F,R as l,S as f}from"./ResetButton-BB_es5yP.js";import{B as d}from"./Button-DdI6TSg5.js";import{S as j}from"./Section-BOZrahl-.js";import{A as b}from"./ActionGroup-DQKpdPni.js";import{s as u}from"./Action-EPprNG1t.js";import{C as t}from"./Checkbox-C8EmS_EY.js";import{F as E}from"./FieldError-D24voWaJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CAxQXs-G.js";import"./flowComponent-m6SyqnPg.js";import"./index-Del26Dy4.js";import"./clsx-B-dksMZM.js";import"./index-CSUT2NCR.js";import"./useLocalizedStringFormatter-hxpvTBNb.js";import"./context-DOSLHoOx.js";import"./useRef-DT2mR3RP.js";import"./utils-DM5Jp8EX.js";import"./ButtonView-B7ZIb4eI.js";import"./browser-BdJDgoMU.js";import"./IconWarning-MWZFtagw.js";import"./remote-BHShYJ5P.js";import"./Text-PyhJCmvh.js";import"./EmulatedBoldText-Bbt3btdp.js";import"./Text-CzkXk5bL.js";import"./LoadingSpinner-C-WbSXYT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CztCXt43.js";import"./ProgressBar-DhNSphWE.js";import"./Label-ChTBNZrK.js";import"./Hidden-D0_rVqY-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-0hwKkY3Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BBaWFJWg.js";import"./useFocus-BKws8v7-.js";import"./useFocusRing-DEM6_VkF.js";import"./useFocusable-BcdgZhOs.js";import"./ContextMenuSection-BV3yleYZ.js";import"./Dialog-DAgI8QrG.js";import"./RSPContexts-CLcTs2D_.js";import"./OverlayArrow-DY7ECRqq.js";import"./useControlledState-DsUZezc6.js";import"./Collection-kTlo8aNF.js";import"./CollectionBuilder-DHL6mUJ2.js";import"./SelectionIndicator-Bi_ZzqWB.js";import"./Separator-BpDC4shb.js";import"./SelectionManager-B-CgmQdR.js";import"./useEvent-D8AEfF0F.js";import"./useCollator-DSAWxNmx.js";import"./FocusScope-CxLgpb_M.js";import"./VisuallyHidden-CIPoghQB.js";import"./getActionGroupSlot-Dt2slLBi.js";import"./useStatic-Cr39OxgC.js";import"./context-C9I6Qco3.js";import"./useFieldComponent-CsbQ-7mY.js";import"./FieldError-BZvulriJ.js";import"./Form-DI5rGqIO.js";import"./useFormValidation-CstoYpvO.js";import"./useToggleState-CC7Uki4s.js";import"./useFormReset-BHDJFB5Q.js";import"./AlertText-BAa8Yse9.js";import"./AlertIcon-CzBRtVHG.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),qr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
