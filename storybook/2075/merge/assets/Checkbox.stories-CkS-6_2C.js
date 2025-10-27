import{j as r,r as f}from"./iframe-C3YinX3s.js";import{a as c,u as a,F as u,t as h}from"./Form-C_5hYMpv.js";import{B as n}from"./Button-B9MewrUz.js";import{S as x}from"./Section-C_5nF8l2.js";import{A as F}from"./ActionGroup-BpJBuAaq.js";import{s as d}from"./Action-DH4q3DMK.js";import{C as o}from"./Checkbox-Dj1OVmFa.js";import{F as j}from"./useFieldComponent-unfYr68o.js";import"./index-nuYtCEEu.js";import"./flowComponent-DbYaKppP.js";import"./index-PmbawSGG.js";import"./clsx-B-dksMZM.js";import"./index-BppZCGPZ.js";import"./useLocalizedStringFormatter-D8x_j-oY.js";import"./context-XadyItFl.js";import"./browser-DlgIuTl3.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-6TASCfRR.js";import"./Text-40KOd3GJ.js";import"./EmulatedBoldText-DmHQDGMB.js";import"./Text-2o-hGpxv.js";import"./utils-CkQtaKCN.js";import"./LoadingSpinner-BiveWKkE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CBEcZBzR.js";import"./ProgressBar-DHxU0Tpr.js";import"./Label-uL4LTRYY.js";import"./Hidden-RtymAw99.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-6oysTp78.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CEE7eirG.js";import"./useFocus-DuIK45_5.js";import"./useFocusRing-BT4tpo7d.js";import"./useFocusable-Cpx8bVI7.js";import"./ContextMenuSection-ko5_btdi.js";import"./Dialog-CifFL37q.js";import"./RSPContexts-DbIyirJn.js";import"./OverlayArrow-Bx4uFTPE.js";import"./useControlledState-DTNxqflL.js";import"./Collection-CFBStWe-.js";import"./CollectionBuilder-YYQa8BK8.js";import"./SelectionIndicator-CWOLS5ft.js";import"./Separator-BjhRMKQy.js";import"./SelectionManager-C2fMWUbc.js";import"./useEvent-NeYNfT16.js";import"./useCollator-DJ52WOHW.js";import"./FocusScope-fcPAzZ97.js";import"./VisuallyHidden-Bah8oUIC.js";import"./dynamic-BlWCyvfa.js";import"./getActionGroupSlot-DrHtarua.js";import"./useStatic-K2T119cA.js";import"./context-C6PcGqQE.js";import"./useMakeFocusable-DG0DAth_.js";import"./Form-BCJL5_dO.js";import"./useFormValidation-mKao3Dkx.js";import"./useToggleState-DxJyq5N8.js";import"./useFormReset-BgD1M5By.js";import"./react-children-utilities-Tlnpa_z4.js";import"./ClearPropsContext-CJ1szkV5.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,E=b("submit"),kr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const t=async l=>{await d(1500),E(l)},e=a({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),p=h();return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(p,{name:"acceptTerms",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(p,{name:"acceptTermsDefaultValue",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(p,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(o,{children:"Accept terms"})}),r.jsx(F,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},s={},m={render:t=>{const e=a();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsxs(o,{isInvalid:!0,children:["Accept terms",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const e=a();return r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const Or=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,Or as __namedExportsOrder,kr as default};
