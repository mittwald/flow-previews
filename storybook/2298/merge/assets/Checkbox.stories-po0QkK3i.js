import{j as r,r as x}from"./iframe-CJFOFCad.js";import{a as c,u as p,F as a,t as F,R as l,S as f}from"./ResetButton-BkgcDrX7.js";import{B as d}from"./Button-D5kumnA4.js";import{S as j}from"./Section-CCwmV9uG.js";import{A as b}from"./ActionGroup-B-ixDo6k.js";import{s as u}from"./Action-Vq-tbHvg.js";import{C as t}from"./Checkbox-BcI9J94R.js";import{F as E}from"./FieldError-Dc2Z54jn.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CfulQ7wG.js";import"./flowComponent-CJG1rMDz.js";import"./index-BSRN0wm6.js";import"./clsx-B-dksMZM.js";import"./index-Cu9s0VFH.js";import"./useLocalizedStringFormatter-cHnXWnWa.js";import"./context-CMyux8LD.js";import"./useRef-B-LbwbXp.js";import"./utils-CsQ8IQtm.js";import"./ButtonView-BS0xOJCI.js";import"./browser-C8kWAWSZ.js";import"./IconWarning-1TKJLzWG.js";import"./remote-BxHvJS68.js";import"./Text-CI7VZqhd.js";import"./EmulatedBoldText-BF5DLBnT.js";import"./Text-8vym_gVd.js";import"./LoadingSpinner-CM8bIOhN.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BaNQUerH.js";import"./ProgressBar-D1JMQZ2r.js";import"./Label-Ce0MMouV.js";import"./Hidden-DmbQVkh7.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cb3KoAb3.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-NyliDXf7.js";import"./useFocus-Cgy8euA9.js";import"./useFocusRing-wbIo7ugc.js";import"./useFocusable-13L7602I.js";import"./ContextMenuSection-C56vs4OS.js";import"./Dialog-YkcYiA7q.js";import"./RSPContexts-CNS2UWja.js";import"./OverlayArrow-DEHMSq9h.js";import"./useControlledState-DvHOpAD3.js";import"./Collection-B9y5YoW-.js";import"./CollectionBuilder-Dz6WVvJx.js";import"./SelectionIndicator-BI4debiO.js";import"./Separator-CS0DDWqc.js";import"./SelectionManager-DYEiw_sj.js";import"./useEvent-Bx7Hxhw9.js";import"./useCollator-DYyzym3S.js";import"./FocusScope-BYRCsx--.js";import"./VisuallyHidden-CZLhXAB_.js";import"./getActionGroupSlot-MsF1cFZX.js";import"./useStatic-C0hf5llT.js";import"./context-DTASnmZz.js";import"./useFieldComponent-CVIwC-Yy.js";import"./FieldError-B3-rgjm7.js";import"./Form-B3lCmY-S.js";import"./useFormValidation-DcThlYcg.js";import"./useToggleState-DFzC1yi5.js";import"./useFormReset-DXleDB5s.js";import"./AlertText-BB2MdEuH.js";import"./AlertIcon-BfQxSvrI.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),qr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
