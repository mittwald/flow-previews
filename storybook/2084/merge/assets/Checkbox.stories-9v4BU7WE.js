import{j as r,r as f}from"./iframe-BJcrhiyS.js";import{a as c,u as a,F as u,t as h}from"./Form-CJrts3Ir.js";import{B as n}from"./Button-DDexK_tB.js";import{S as x}from"./Section-DHFbYsCk.js";import{A as F}from"./ActionGroup-B0txZhJy.js";import{s as d}from"./Action-Cl9B75AE.js";import{C as o}from"./Checkbox-c8cHxnHm.js";import{F as j}from"./useFieldComponent-BTSjCSDH.js";import"./index-nuYtCEEu.js";import"./flowComponent-CUnmKrjI.js";import"./index-BWslXHRv.js";import"./clsx-B-dksMZM.js";import"./index-Clh-7_IP.js";import"./useLocalizedStringFormatter-BYGjl_Ur.js";import"./context-C9wRNNkX.js";import"./browser-CleZYiuo.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-DHKN92dZ.js";import"./Text-CzGb6jtw.js";import"./EmulatedBoldText-BXLeVkdu.js";import"./Text-BpL6_bME.js";import"./utils-MMz0RNDK.js";import"./LoadingSpinner-DIhYtINq.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DLFIfSVU.js";import"./ProgressBar-BnMTPpQD.js";import"./Label-BomZPPry.js";import"./Hidden-BPKHXv4N.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-_fpNspWn.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D-MZIwgU.js";import"./useFocus-B02RLksg.js";import"./useFocusRing-Cs9uIsYW.js";import"./useFocusable-o2EAaEwJ.js";import"./ContextMenuSection-B4NyQI2O.js";import"./Dialog-BQ_EXD94.js";import"./RSPContexts-C2e5xu0T.js";import"./OverlayArrow-DSSzOs3h.js";import"./useControlledState-CmFRf9bT.js";import"./Collection-_lGiyPCh.js";import"./CollectionBuilder-B7Z337h2.js";import"./SelectionIndicator-lJ8kUAUa.js";import"./Separator-B85zM0Ob.js";import"./SelectionManager-CQyc1rjw.js";import"./useEvent-hhr9af5x.js";import"./useCollator-DUTRWdjd.js";import"./FocusScope-DZerhXt6.js";import"./VisuallyHidden-DT9WK7BB.js";import"./dynamic-D98kNBqL.js";import"./getActionGroupSlot-i3rgbr5j.js";import"./useStatic-DD6IIAig.js";import"./context-OYcKy-iK.js";import"./useMakeFocusable-CqrVk7-z.js";import"./Form--RrJpAdD.js";import"./useFormValidation-ofRqxeQo.js";import"./useToggleState-CvOmtPpp.js";import"./useFormReset-B4UK9p8r.js";import"./react-children-utilities-DZ5iFmYj.js";import"./ClearPropsContext-Bddw_Fzg.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,E=b("submit"),kr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const t=async l=>{await d(1500),E(l)},e=a({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),p=h();return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(p,{name:"acceptTerms",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(p,{name:"acceptTermsDefaultValue",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(p,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(o,{children:"Accept terms"})}),r.jsx(F,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},s={},m={render:t=>{const e=a();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsxs(o,{isInvalid:!0,children:["Accept terms",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const e=a();return r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
