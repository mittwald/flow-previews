import{j as r,r as x}from"./iframe-DSXKf9Qs.js";import{a as c,u as p,F as a,t as F,R as l,S as f}from"./ResetButton-DQocwP5Q.js";import{B as d}from"./Button-D9RPwGO-.js";import{S as j}from"./Section-C2etDRXq.js";import{A as b}from"./ActionGroup-Cult8i-N.js";import{s as u}from"./Action-D8TvePO3.js";import{C as t}from"./Checkbox-D9f3QfZ2.js";import{F as E}from"./FieldError-DyLpPvQc.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-waHTXRlt.js";import"./flowComponent-aTnVZ28_.js";import"./index-_ST8Xdbb.js";import"./clsx-B-dksMZM.js";import"./index-xIXPquhv.js";import"./useLocalizedStringFormatter-DnMeMDV0.js";import"./context-DU2DYbHB.js";import"./useRef-i8-2SC7v.js";import"./utils-BkNrSrSW.js";import"./ButtonView-d2J1OyEz.js";import"./browser-zi1f_NHh.js";import"./IconWarning-CsaNdeaY.js";import"./remote-Gy-Ku51P.js";import"./Text-C7KW9wgf.js";import"./EmulatedBoldText-CWbGlL7P.js";import"./Text-BGc7dsTw.js";import"./LoadingSpinner-CM9ywy6H.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DD62R7IC.js";import"./ProgressBar-zeu61Rhn.js";import"./Label-Dnlar29r.js";import"./Hidden-Bsr5uGtI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D2CXizlL.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D3-3tpV2.js";import"./useFocus-BkCMpCSs.js";import"./useFocusRing-9tutEJo4.js";import"./useFocusable-BiabYp81.js";import"./ContextMenuSection-8AZZSNKN.js";import"./Dialog-Dgijbiav.js";import"./RSPContexts-C47t6iqA.js";import"./OverlayArrow-wV4le4-P.js";import"./useControlledState-C8VBbj0I.js";import"./Collection-Bm0CT5e0.js";import"./CollectionBuilder-fJJ3qX8z.js";import"./SelectionIndicator-BtJjQV2B.js";import"./Separator-BRbgnZrd.js";import"./SelectionManager-DlGSpMCY.js";import"./useEvent-BOIZmRJ7.js";import"./useCollator-dJhHztcY.js";import"./FocusScope-C1tZWIaN.js";import"./VisuallyHidden-p8Ypb2KO.js";import"./getActionGroupSlot-CBC8VLuN.js";import"./useStatic-CLatwN1t.js";import"./context-CiYX6UJF.js";import"./useFieldComponent-CCab4n06.js";import"./FieldError-D2u-4343.js";import"./Form-CmWGeahq.js";import"./useFormValidation-CZFMPKAm.js";import"./useToggleState-9MhzwE3d.js";import"./useFormReset-CY4Zdzy9.js";import"./AlertText-ppaXibkF.js";import"./AlertIcon-Bx5_fWVD.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),qr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
