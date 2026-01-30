import{j as r,r as C}from"./iframe-K4Kgzs5d.js";import{a as p,u as a,F as c,t as j,R as h,S as x}from"./ResetButton-D8mKGoDl.js";import{B as l}from"./Button-CLdF1xvY.js";import{S as B}from"./Section-DhkMhEtB.js";import{A as b}from"./ActionGroup-By1FPS3M.js";import{s as u}from"./Action-D8xdI4CM.js";import{T as i}from"./Text-BPEkrilU.js";import{C as m}from"./CheckboxButton-DJVlmz4a.js";import{C as d}from"./Content-Bke5eZdg.js";import{F as E}from"./FieldError-BIdQs2eG.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-d4gvBHma.js";import"./flowComponent-CbChzPG9.js";import"./index-Coqdyp07.js";import"./clsx-B-dksMZM.js";import"./index-C1Cqv2DY.js";import"./useLocalizedStringFormatter-DDBnVsYO.js";import"./context-BHsz5d3m.js";import"./useRef-D3B_CRoC.js";import"./utils--XC5cWbY.js";import"./ButtonView-CZyRcM7x.js";import"./browser-9MG5lDdh.js";import"./IconWarning-BGpHZy47.js";import"./remote-DgH_DZKx.js";import"./LoadingSpinner-Dt3AVNp7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B9p48ORM.js";import"./ProgressBar-DgQG6kyC.js";import"./Label-Du2Jf-3y.js";import"./Hidden-DNKD1xKj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-IleSnN60.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bsv_-vru.js";import"./useFocus-CfhKlOoP.js";import"./useFocusRing-B7VfbIok.js";import"./useFocusable-H6UpmrOx.js";import"./ContextMenuSection-BbQjr4t3.js";import"./Dialog-D9y6Gm5p.js";import"./RSPContexts-DBQcbxf9.js";import"./OverlayArrow-70hjzCbF.js";import"./useControlledState-UcCiEhN3.js";import"./Collection-BbxJvL2P.js";import"./CollectionBuilder-GLV80gvr.js";import"./SelectionIndicator-LfvmrL3H.js";import"./Separator-D8C38sqW.js";import"./Text-DhK76AHe.js";import"./SelectionManager-D3da5ydz.js";import"./useEvent-B-sfhBuw.js";import"./useCollator-Cz2Nd5FQ.js";import"./FocusScope-A43bauPW.js";import"./VisuallyHidden-DOfAC-AS.js";import"./getActionGroupSlot-DDRLr0XQ.js";import"./useStatic-DUE7vdEn.js";import"./context-Be9deJEN.js";import"./EmulatedBoldText-CJYMqRLn.js";import"./Checkbox-DOF9MhFP.js";import"./useFieldComponent-XDoLqUAT.js";import"./FieldError-CDQ9nLxM.js";import"./Form-BeqJ_QXS.js";import"./useFormValidation-QT1HCjbB.js";import"./useToggleState-BmAlosTU.js";import"./useFormReset-Bu0cPn5B.js";import"./AlertText-DseO20UX.js";import"./AlertIcon-Bh0Qf_48.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Pr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
        </Field>
        <CheckboxButton {...props} isInvalid>
          <Text>Terms and Conditions</Text>
          <Content>Consent to terms and conditions</Content>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
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
}`,...s.parameters?.docs?.source}}};const Wr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Wr as __namedExportsOrder,Pr as default};
