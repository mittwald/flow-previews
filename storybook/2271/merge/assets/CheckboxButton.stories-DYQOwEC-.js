import{j as r,r as C}from"./iframe-BEQP9uXD.js";import{a as p,u as a,F as c,t as j,R as h,S as x}from"./ResetButton-DdaJGn48.js";import{B as l}from"./Button-C9UvHdV0.js";import{S as B}from"./Section-CiWy9GDM.js";import{A as b}from"./ActionGroup-BV_YmXox.js";import{s as u}from"./Action-DdIVuJ0B.js";import{T as i}from"./Text-BQmA_ZwI.js";import{C as m}from"./CheckboxButton-CrcXm4BM.js";import{C as d}from"./Content-DNRSI0xJ.js";import{F as E}from"./FieldError-DcwQV8mK.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BAr_-wMD.js";import"./flowComponent-84Jhttbw.js";import"./index-CA9bKJEG.js";import"./clsx-B-dksMZM.js";import"./index-COHhcPte.js";import"./useLocalizedStringFormatter-CVsWWxAE.js";import"./context-DjvYmnOm.js";import"./useRef-CBNU1Kxo.js";import"./utils-CvsvUfaH.js";import"./ButtonView-Cr-9skPP.js";import"./browser-D8S-En3T.js";import"./IconWarning-BArZWwdB.js";import"./remote-Ba3iobwA.js";import"./LoadingSpinner-Dfl-93Ba.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BLAt4FO4.js";import"./ProgressBar-CsmWPwQb.js";import"./Label-DEkvlGAI.js";import"./Hidden-BRgRW0lF.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BaFA04Xw.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BjEuYOvC.js";import"./useFocus-DENBDZ81.js";import"./useFocusRing-QizZnVOy.js";import"./useFocusable-WQftMZYd.js";import"./ContextMenuSection-Xp9S-BLD.js";import"./Dialog-DQ54l-rN.js";import"./RSPContexts-22nxuYm5.js";import"./OverlayArrow-B0-Exi0z.js";import"./useControlledState-IAFCDfDW.js";import"./Collection-DrDb7tKr.js";import"./CollectionBuilder-DgIT4THq.js";import"./SelectionIndicator-Baqg4pYL.js";import"./Separator-CwdQYf1y.js";import"./Text-Dh3KhDzI.js";import"./SelectionManager-Cg9_nPGa.js";import"./useEvent-d-xS6mf7.js";import"./useCollator-Dxy4kckI.js";import"./FocusScope-D5mGJCBF.js";import"./VisuallyHidden-BLDMQ79k.js";import"./getActionGroupSlot-B63naLE5.js";import"./useStatic-DVE9BYeG.js";import"./context-DGvxxzOj.js";import"./EmulatedBoldText-BYVdDx5b.js";import"./Checkbox-DYYho7p2.js";import"./useFieldComponent-BKGW_bMF.js";import"./FieldError-WngkcyXU.js";import"./Form-BbvSEhBq.js";import"./useFormValidation-Kra5hQIO.js";import"./useToggleState-CUsTRM_6.js";import"./useFormReset-QF_OYRwm.js";import"./AlertText-J3TBTDdf.js";import"./AlertIcon-aU-KTTvT.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Pr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
