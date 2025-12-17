import{j as r,r as C}from"./iframe-nUnY8CpM.js";import{u as d,F as a}from"./Form-CFvv8rQ9.js";import{F as c,t as j}from"./Field-CI5_U4-n.js";import{B as l}from"./Button-Drav3_ks.js";import{S as B}from"./Section-D3jyF995.js";import{A as b}from"./ActionGroup-DFwXau3j.js";import{s as u}from"./Action-Akn1uW1v.js";import{T as i}from"./Text-CKSRxaE3.js";import{C as m}from"./CheckboxButton-CkUrtnsv.js";import{C as p}from"./Content-DrDhpEui.js";import{F as E}from"./FieldError-Dl4XoXDz.js";import{R as h}from"./ResetButton-hHtNxjTm.js";import{S as f}from"./SubmitButton-DcdLNLZc.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-vyiLhVPE.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-BZsQ8DvG.js";import"./flowComponent-DiVWNePS.js";import"./index-Czo4z9CC.js";import"./clsx-B-dksMZM.js";import"./index-D5rarCk0.js";import"./useLocalizedStringFormatter-DxwRSSu1.js";import"./context-B5Mk59jD.js";import"./IconChevronDown-C6KAqmcJ.js";import"./remote-Bcop36Tp.js";import"./IconX-CEHyWrnq.js";import"./IconCheck-CMQi8hKM.js";import"./LoadingSpinner-Wr4Rr6kM.js";import"./ariaLive-BFPjGELJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BQlojcF-.js";import"./utils-DtyHAF7C.js";import"./ProgressBar-BfYlkvzs.js";import"./Label-B7kFjMQQ.js";import"./Hidden-DuLhuFUb.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-ARnVSCS2.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D0chnYNQ.js";import"./useFocus-ik1bIJBj.js";import"./useFocusRing-FZMFjSRM.js";import"./useFocusable-DICTyCVG.js";import"./ContextMenuSection-DH9LKzKz.js";import"./lib-90ocxLs-.js";import"./Dialog-x6GsWu_T.js";import"./RSPContexts-CWBH7SuF.js";import"./OverlayArrow-CHkAkv_A.js";import"./useControlledState-CaC4m18c.js";import"./Collection-DKxVpLoc.js";import"./CollectionBuilder-UHR0HG3W.js";import"./SelectionIndicator-Cj3HhkcP.js";import"./Separator-DDl87Ima.js";import"./Text-4n54moM_.js";import"./SelectionManager-f8KTi6JZ.js";import"./useEvent-DGx-2GiN.js";import"./useCollator-BNnpPJUs.js";import"./FocusScope-CB6t9Dkj.js";import"./VisuallyHidden-DJajrHPg.js";import"./getActionGroupSlot-CsQGMPlH.js";import"./useStatic-D4OCIKv7.js";import"./context-CUJwrxJk.js";import"./EmulatedBoldText-CfkdfDH6.js";import"./useFieldComponent-CwsJxGlb.js";import"./Checkbox-C74OzBjC.js";import"./IconCheckboxEmpty-DMecw3Om.js";import"./FieldError-CG7ulvH_.js";import"./Form-DX8kqEOp.js";import"./useFormValidation-BmCGlg1a.js";import"./useToggleState-B4dvl8_m.js";import"./useFormReset-B9MhH15U.js";import"./IconDanger-BtbJ86A5.js";import"./useRef-DngU7hM5.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:c,render:()=>{const t=async F=>{await u(1500),T(F)},o=d({defaultValues:{acceptTerms:!1}}),x=j();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(x,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=d();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=d();return r.jsxs(a,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
