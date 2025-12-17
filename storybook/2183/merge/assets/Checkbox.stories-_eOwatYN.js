import{j as r,r as x}from"./iframe-BsCnutBU.js";import{u as p,F as c}from"./Form-BTeyd2P5.js";import{F as a,t as F}from"./Field-DEtzRgkR.js";import{B as d}from"./Button-PMfVxp4L.js";import{S as j}from"./Section-C1RjpY9f.js";import{A as b}from"./ActionGroup-B3HbARs1.js";import{s as u}from"./Action-CDxlZfJH.js";import{C as o}from"./Checkbox-C9axrBNG.js";import{F as E}from"./FieldError-CJPS-seQ.js";import{R as l}from"./ResetButton-CQkSIzTo.js";import{S as f}from"./SubmitButton-Cjg-acN2.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-b7DWXv2S.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-DlsVuPIo.js";import"./flowComponent-DoLxyVDl.js";import"./index-xZbZEtqW.js";import"./clsx-B-dksMZM.js";import"./index-PlwcbQcr.js";import"./useLocalizedStringFormatter-Bo0x_WGr.js";import"./context-DzQn9XcF.js";import"./IconChevronDown-C43PU1K-.js";import"./remote-LwvHvQd9.js";import"./IconX-BpqNIxw6.js";import"./IconCheck-C2zwGnIP.js";import"./Text-CNxpKe1i.js";import"./EmulatedBoldText-DyWG-htd.js";import"./Text-BOWjpC0c.js";import"./utils-Dcbzlj6n.js";import"./LoadingSpinner-C-Vur43u.js";import"./ariaLive-CXcB5l43.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-YTgHheMP.js";import"./ProgressBar-BvRvte-F.js";import"./Label-B_59qcJ5.js";import"./Hidden-gYrC-ftW.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CiTBxdfM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CHCx2MC1.js";import"./useFocus-zRbhNQvs.js";import"./useFocusRing-eAFZ6BYE.js";import"./useFocusable-Czch9xtI.js";import"./ContextMenuSection-DnLRDkoA.js";import"./lib-90ocxLs-.js";import"./Dialog-CUr7rK7w.js";import"./RSPContexts-Dp9qqhDW.js";import"./OverlayArrow-D6gKPtoN.js";import"./useControlledState-CigtIRD8.js";import"./Collection-C8-9jDK9.js";import"./CollectionBuilder-CJjXf3Iw.js";import"./SelectionIndicator-Baq8cblo.js";import"./Separator-BirN-56R.js";import"./SelectionManager-QwxvBoUZ.js";import"./useEvent-CvU6uOe-.js";import"./useCollator-O8BhpWis.js";import"./FocusScope-Bn9eK5Im.js";import"./VisuallyHidden-xvADZrl6.js";import"./getActionGroupSlot-D8KutjkD.js";import"./useStatic-BIAK3C1m.js";import"./context-bnUckVor.js";import"./IconCheckboxEmpty-BPLgLYLH.js";import"./useFieldComponent-DKQov8fN.js";import"./FieldError-oQwctYYH.js";import"./Form-te5EpUcA.js";import"./useFormValidation-hrdfW_GO.js";import"./useToggleState-CXDuTq0F.js";import"./useFormReset-DwCUeF5J.js";import"./IconDanger-d9R36P01.js";import"./useRef-CoHtiAMY.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Vr={title:"Integrations/React Hook Form/Checkbox",component:a,render:()=>{const t=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(c,{form:e,onSubmit:t,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(o,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:t=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsxs(o,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const e=p();return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,i as WithFocus,Gr as __namedExportsOrder,Vr as default};
