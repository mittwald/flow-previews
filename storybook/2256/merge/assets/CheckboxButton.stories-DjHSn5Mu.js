import{j as r,r as C}from"./iframe-DjKJp4LH.js";import{a,u as p,F as c,t as j,R as h,S as x}from"./ResetButton-B_aVigIr.js";import{B as l}from"./Button-BDEZ1Pgg.js";import{S as B}from"./Section-CJ66IskI.js";import{A as b}from"./ActionGroup-BWGbWjuD.js";import{s as u}from"./Action-CS8Seurr.js";import{T as i}from"./Text-DIX_PQ8a.js";import{C as m}from"./CheckboxButton-mWUVvKE_.js";import{C as d}from"./Content-DZRc5l5O.js";import{F as E}from"./FieldError-DkeOn6Iq.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-D6qVG3rB.js";import"./index-DwtlgCJu.js";import"./clsx-B-dksMZM.js";import"./index-PXjpOTa6.js";import"./browser-DP-AFXYC.js";import"./dynamic-Cwgd_SYw.js";import"./useLocalizedStringFormatter-Dnneor8b.js";import"./context-CaWPG6rd.js";import"./useRef-JBXf8btE.js";import"./utils-DyC1AhIW.js";import"./IconWarning-6PZXNPQv.js";import"./remote-X6dXUxim.js";import"./LoadingSpinner-pyPoMdb7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DheLTGmH.js";import"./ProgressBar-Bp6bQOCH.js";import"./Label-7z6Dpe4l.js";import"./Hidden-Cj7p_Cun.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel--MzsjFNv.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cba7eTZL.js";import"./useFocus-DfQL19Qh.js";import"./useFocusRing-BGVhnkul.js";import"./useFocusable-Cypk5WsB.js";import"./ContextMenuSection-D6Byc7PS.js";import"./Dialog-B6ze-qTj.js";import"./RSPContexts-BW0AZj1S.js";import"./OverlayArrow-NBjjGcXc.js";import"./useControlledState-B7AKSDvs.js";import"./Collection-DCkcEv4P.js";import"./CollectionBuilder-BUtswklx.js";import"./SelectionIndicator-B0FAwcHG.js";import"./Separator-BnnFI041.js";import"./Text-DDR-J2dK.js";import"./SelectionManager-BjFMgKhL.js";import"./useEvent-D3fHv2-i.js";import"./useCollator-C3dV1__C.js";import"./FocusScope-5Nl-wNMA.js";import"./VisuallyHidden-BM-dzb4f.js";import"./getActionGroupSlot-BcFDPTef.js";import"./useStatic-DSbbnRPw.js";import"./context-BJ5dxW4L.js";import"./EmulatedBoldText-CMQt-Xk-.js";import"./Checkbox-DTU5i0w4.js";import"./useFieldComponent-7yFtRUym.js";import"./FieldError-CRskrSrV.js";import"./Form-DzoAzIf2.js";import"./useFormValidation-D-rCh5i6.js";import"./useToggleState-DZbD7mMm.js";import"./useFormReset-BtBZQ9D7.js";import"./AlertText-B4kskhvn.js";import"./AlertIcon-DJ6AhYBh.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Ir={title:"Integrations/React Hook Form/CheckboxButton",component:a,render:()=>{const t=async F=>{await u(1500),T(F)},o=p({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=p();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Pr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Pr as __namedExportsOrder,Ir as default};
