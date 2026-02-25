import{r as C,j as r}from"./iframe-CAK8FS83.js";import{a as d,u as a,F as c,R as h,S as x,t as j}from"./ResetButton-BkxxWY5H.js";import{B as l}from"./Button-itgufTCs.js";import{S as B}from"./Section-CvIAO9t7.js";import{A as b}from"./ActionGroup-DOh7AJi0.js";import{s as u}from"./ActionBatch-BT7PEprG.js";import{T as i}from"./Text-DLuRhlhH.js";import{C as m}from"./CheckboxButton-D2ErcWm-.js";import{C as p}from"./Content-DIxZ35M2.js";import{F as E}from"./FieldError-Ijqs7ZUi.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D8OXR4zz.js";import"./flowComponent-BWp16SNy.js";import"./index-GWEfEQw2.js";import"./clsx-B-dksMZM.js";import"./index-CbMMdC0j.js";import"./useLocalizedStringFormatter-DFt6g5YR.js";import"./context-Cva5eEgc.js";import"./ActionGroupView-CCGUgUS0.js";import"./Heading-C00t5x9z.js";import"./Heading-CCBwW_g2.js";import"./RSPContexts-B_v10Iug.js";import"./utils-th26LVD6.js";import"./Modal-C0YYyFVW.js";import"./useOverlayController-Cgn9MX8W.js";import"./useStatic-CRQBoMuN.js";import"./Overlay-oKaaxmZR.js";import"./OverlayContextProvider-CzGKjwc7.js";import"./LoadingSpinner-BC7xHqe0.js";import"./IconWarning-EFpx-Gs1.js";import"./remote-BiZ00o_J.js";import"./Dialog-Bg78UE4C.js";import"./Button-Bm8bnERu.js";import"./ProgressBar-D_fN64Me.js";import"./Label-f9ALmkld.js";import"./Hidden-Dit-znYS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-uRe61yXZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BYhFSapw.js";import"./useFocus-CUz8YQ_V.js";import"./useFocusRing-Dri4WoMi.js";import"./useFocusable-wkYmEvUK.js";import"./OverlayArrow-DH2T_qZc.js";import"./useControlledState-ik7lpKJV.js";import"./Collection-BMrNZuZq.js";import"./CollectionBuilder-D4rXdo4w.js";import"./SelectionIndicator-D_639S3U.js";import"./Separator-DMNyXuQl.js";import"./Text-BoinRLOA.js";import"./SelectionManager-BFBPCCBk.js";import"./useEvent-KVfko5RZ.js";import"./useCollator-BmCOWQts.js";import"./FocusScope-B2Hz6ms7.js";import"./VisuallyHidden-CgwkfWyQ.js";import"./ButtonView-LoZK7xQ_.js";import"./Flex-CRH3-b1R.js";import"./useRef-CHg-rbUQ.js";import"./browser-Bqr1AXz8.js";import"./ContextMenuSection-gHmxmSmE.js";import"./getActionGroupSlot-BB_J4wrM.js";import"./EmulatedBoldText-C97iA6m9.js";import"./Checkbox-B-dciGqW.js";import"./useFieldComponent-DkAI1nDB.js";import"./FieldError-W7aOon2A.js";import"./Form-CCLCpM-d.js";import"./useFormValidation-CCAHF_BW.js";import"./useToggleState--Lsum0qS.js";import"./useFormReset-ClNM6Kah.js";import"./AlertText-B2BWCbW6.js";import"./AlertIcon-DLSo9NlW.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Nr as __namedExportsOrder,Mr as default};
