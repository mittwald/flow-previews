import{j as r,r as x}from"./iframe-C9fRvTrj.js";import{u as p,F as c}from"./Form-BnT7ftAH.js";import{B as d}from"./Button-BYUXEkA_.js";import{S as F}from"./Section-Os3PQZDv.js";import{A as j}from"./ActionGroup-D8loN3Ok.js";import{s as a}from"./Action-DsOzwT3Y.js";import{C as o}from"./Checkbox-zOxmmcQM.js";import{F as b}from"./FieldError-Bd58Epno.js";import{F as u,t as E}from"./Field-C9gkn32I.js";import{R as l}from"./ResetButton-Dd_iBR74.js";import{S as f}from"./SubmitButton-BwKhKVf4.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CUSAF5aW.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B9iKHe4d.js";import"./index-BKw8uTi3.js";import"./index-CLvMUAwA.js";import"./IconChevronDown-D_WjmewV.js";import"./remote-BH-MD2MY.js";import"./IconX-BNOWC-zb.js";import"./IconCheck-DKwGf3uB.js";import"./Text-D323xmXD.js";import"./EmulatedBoldText-CPA2fMYQ.js";import"./Text-BRNikD3K.js";import"./utils-CPkfOZj3.js";import"./LoadingSpinner-CwlmKrOH.js";import"./ariaLive-ZUjptcOn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-zNln5p4w.js";import"./context-Bv4btMDO.js";import"./Button-CwWpYEN0.js";import"./ProgressBar-DI2IDnVu.js";import"./Label-DetJ9FyC.js";import"./Hidden-D46P9k-k.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-KJitgciI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-_4yw8jQQ.js";import"./useFocus-bSaDUtch.js";import"./useFocusRing-cRMmIaF9.js";import"./useFocusable-BSBdu-8d.js";import"./ContextMenuSection-BxarHMTi.js";import"./lib-90ocxLs-.js";import"./Dialog-CyDp-GbU.js";import"./RSPContexts-CUBdls5w.js";import"./OverlayArrow-iEWyRd5r.js";import"./useControlledState-BGzazcEz.js";import"./Collection-b6pGDgVm.js";import"./CollectionBuilder-BloNGw2M.js";import"./SelectionIndicator-Qi7XUyY0.js";import"./Separator-OMU_Us2E.js";import"./SelectionManager-CtYNKPbJ.js";import"./useEvent-CG8oG6I6.js";import"./useCollator-RZF5ztqV.js";import"./FocusScope-CuzzTLeS.js";import"./VisuallyHidden-FzUX7Nba.js";import"./dynamic-C1VXiIMv.js";import"./getActionGroupSlot-Dhkl0Gym.js";import"./useStatic-0FUtvL5U.js";import"./context-CrKYMuPA.js";import"./IconCheckboxEmpty-vYtyRov2.js";import"./useFieldComponent-jGlg5Icl.js";import"./FieldError-BSiYpFWr.js";import"./Form-FOSkHwoF.js";import"./useFormValidation-BLFhZbJU.js";import"./useToggleState-CMXYs8Gp.js";import"./useFormReset-CS_NLM25.js";import"./IconDanger-Cax3VcTl.js";import"./useRef-CxgC11e8.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Vr={title:"Integrations/React Hook Form/Checkbox",component:u,render:()=>{const t=async h=>{await a(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=E();return r.jsx(c,{form:e,onSubmit:t,children:r.jsxs(F,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(o,{children:"Accept terms"})}),r.jsxs(j,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:t=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await a(2e3),children:[r.jsx(u,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsxs(o,{isInvalid:!0,children:["Accept terms",r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const e=p();return r.jsxs(c,{form:e,onSubmit:async()=>await a(2e3),children:[r.jsx(u,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
