import{j as r,r as x}from"./iframe-CywxDTj6.js";import{b as c,u as p,F as a,t as F}from"./Form-CB7Mj76y.js";import{R as l,S as f}from"./ResetButton-DuDCjHVj.js";import{B as d}from"./Button-Dt6rqZC2.js";import{S as j}from"./Section-DFnKKkTa.js";import{A as b}from"./ActionGroup-C_Gw-9qw.js";import{s as u}from"./Action-DyuzWneU.js";import{C as t}from"./Checkbox-CUHKcVJo.js";import{F as E}from"./FieldError-zwomljJ3.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D64zpBY8.js";import"./flowComponent-DIqRYGZg.js";import"./index-BVyD66xE.js";import"./clsx-B-dksMZM.js";import"./index-CFicy-UB.js";import"./useLocalizedStringFormatter-OykjdJOp.js";import"./context-Wz-N3Tdz.js";import"./browser-CaezisB_.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-JmAwA3ix.js";import"./useRef-B_Nq6vS0.js";import"./IconWarning-BQFONsdl.js";import"./remote-DxJecAWu.js";import"./Text-vlJOJK2L.js";import"./EmulatedBoldText-Vtu08ir6.js";import"./Text-Dc57gZlo.js";import"./LoadingSpinner-Byj--1Pk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DzvzizsP.js";import"./ProgressBar-BoAFCcAD.js";import"./Label-B7but0VW.js";import"./Hidden-D_vom6ZC.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CtuLxX2S.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CStV9ujD.js";import"./useFocus-DDJfJTZx.js";import"./useFocusRing-D1WKjA4v.js";import"./useFocusable-D7CLIfGa.js";import"./ContextMenuSection-DDk2X5KZ.js";import"./Dialog-RfbYVzK-.js";import"./RSPContexts-DB0ICqF0.js";import"./OverlayArrow-kC1F2-h6.js";import"./useControlledState-CrIAtAXB.js";import"./Collection-DZTo--rr.js";import"./CollectionBuilder-CNb94HNq.js";import"./SelectionIndicator-B2WWcQye.js";import"./Separator-DF0yS6SS.js";import"./SelectionManager-Mk_lDA9T.js";import"./useEvent-CDXAxsds.js";import"./useCollator-Dm-KYvmX.js";import"./FocusScope-CPNFfVyd.js";import"./VisuallyHidden-CBo5v6jz.js";import"./getActionGroupSlot-CAhf_Uni.js";import"./useStatic-B4t8cENg.js";import"./context-DM4I0BsB.js";import"./useFieldComponent-DA2iK2GC.js";import"./FieldError-fWQdbmrt.js";import"./Form-B03hL8Gq.js";import"./useFormValidation-CXUK0Gt0.js";import"./useToggleState-RNm0j7EN.js";import"./useFormReset-CCwx8s_G.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),_r={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const qr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,qr as __namedExportsOrder,_r as default};
