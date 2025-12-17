import{j as r,r as C}from"./iframe-BzW-9mMD.js";import{u as d,F as a}from"./Form-xEKyLAtK.js";import{F as c,t as j}from"./Field-DBa6Uppk.js";import{B as l}from"./Button-kdt8pR0M.js";import{S as B}from"./Section-CEIUQkyy.js";import{A as b}from"./ActionGroup-DtgroWHO.js";import{s as u}from"./Action-B9rUenjA.js";import{T as i}from"./Text-V56jcQh9.js";import{C as m}from"./CheckboxButton-ColIUrns.js";import{C as p}from"./Content-BTDfmSOV.js";import{F as E}from"./FieldError-CEOf2ovw.js";import{R as h}from"./ResetButton-D6wtVwDI.js";import{S as f}from"./SubmitButton-CJq3gcLg.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-C2fMNT9-.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-C266PTaS.js";import"./flowComponent-tWRCe5l6.js";import"./index-XmU95KIL.js";import"./clsx-B-dksMZM.js";import"./index-DBI39Uex.js";import"./useLocalizedStringFormatter-CwmxuNTv.js";import"./context-42ert5Ah.js";import"./IconApp-BdfgmDZu.js";import"./remote-BEBWGiXy.js";import"./IconX-w5RRSC5U.js";import"./IconCheck-ORikD9Q4.js";import"./LoadingSpinner-D5sbFVGI.js";import"./ariaLive-CVrDG-JG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DgUosL-f.js";import"./utils-BrWwMsiw.js";import"./ProgressBar-o-cVdTXN.js";import"./Label-CGJ_PWGO.js";import"./Hidden-Dd9I5XIl.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Fj4NeiZR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DuLlpULp.js";import"./useFocus-dCAgOHv-.js";import"./useFocusRing-g2ZbegJf.js";import"./useFocusable-CVjqM_08.js";import"./ContextMenuSection-DvCS3UY5.js";import"./lib-90ocxLs-.js";import"./Dialog-Djk-se_O.js";import"./RSPContexts-B2m0CCTC.js";import"./OverlayArrow-CmaTRoo4.js";import"./useControlledState-Bv03b0O5.js";import"./Collection-B6Gyca40.js";import"./CollectionBuilder-C5j0Sae3.js";import"./SelectionIndicator-C_2dk6EH.js";import"./Separator-DiQ9hKYu.js";import"./Text-lCB5Bcpt.js";import"./SelectionManager-X9WkTlTu.js";import"./useEvent-B5jRbMBF.js";import"./useCollator-DwX94Vm0.js";import"./FocusScope-CKC8wRja.js";import"./VisuallyHidden-BEoWdW55.js";import"./getActionGroupSlot-DzbzA4bT.js";import"./useStatic-CTmF8sLz.js";import"./context-CzkXJT4I.js";import"./EmulatedBoldText-xlY4BdXR.js";import"./useFieldComponent-CbusyouS.js";import"./Checkbox-DKy19Mrc.js";import"./IconCheckboxEmpty-mN3yfhkl.js";import"./FieldError-YIyLtRkF.js";import"./Form-DVsU3UIy.js";import"./useFormValidation-CVoSAArr.js";import"./useToggleState-CbmqsFb2.js";import"./useFormReset-DSNp4f3d.js";import"./IconDanger-BcSmAgIr.js";import"./useRef-D0yR5Dxm.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:c,render:()=>{const t=async F=>{await u(1500),T(F)},o=d({defaultValues:{acceptTerms:!1}}),x=j();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(x,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=d();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=d();return r.jsxs(a,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
