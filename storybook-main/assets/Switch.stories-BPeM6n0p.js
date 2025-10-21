import{j as r,r as f}from"./iframe-BJcrhiyS.js";import{a as p,u as a,F as c,t as F}from"./Form-CJrts3Ir.js";import{B as m}from"./Button-DDexK_tB.js";import{S as h}from"./Section-DHFbYsCk.js";import{A as x}from"./ActionGroup-B0txZhJy.js";import{s as d}from"./Action-Cl9B75AE.js";import{S as n}from"./Switch-a7sHY69M.js";import{F as S}from"./useFieldComponent-BTSjCSDH.js";import"./index-nuYtCEEu.js";import"./flowComponent-CUnmKrjI.js";import"./index-BWslXHRv.js";import"./clsx-B-dksMZM.js";import"./index-Clh-7_IP.js";import"./useLocalizedStringFormatter-BYGjl_Ur.js";import"./context-C9wRNNkX.js";import"./browser-CleZYiuo.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-DHKN92dZ.js";import"./Text-CzGb6jtw.js";import"./EmulatedBoldText-BXLeVkdu.js";import"./Text-BpL6_bME.js";import"./utils-MMz0RNDK.js";import"./LoadingSpinner-DIhYtINq.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DLFIfSVU.js";import"./ProgressBar-BnMTPpQD.js";import"./Label-BomZPPry.js";import"./Hidden-BPKHXv4N.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-_fpNspWn.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D-MZIwgU.js";import"./useFocus-B02RLksg.js";import"./useFocusRing-Cs9uIsYW.js";import"./useFocusable-o2EAaEwJ.js";import"./ContextMenuSection-B4NyQI2O.js";import"./Dialog-BQ_EXD94.js";import"./RSPContexts-C2e5xu0T.js";import"./OverlayArrow-DSSzOs3h.js";import"./useControlledState-CmFRf9bT.js";import"./Collection-_lGiyPCh.js";import"./CollectionBuilder-B7Z337h2.js";import"./SelectionIndicator-lJ8kUAUa.js";import"./Separator-B85zM0Ob.js";import"./SelectionManager-CQyc1rjw.js";import"./useEvent-hhr9af5x.js";import"./useCollator-DUTRWdjd.js";import"./FocusScope-DZerhXt6.js";import"./VisuallyHidden-DT9WK7BB.js";import"./dynamic-D98kNBqL.js";import"./getActionGroupSlot-i3rgbr5j.js";import"./useStatic-DD6IIAig.js";import"./context-OYcKy-iK.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-CqrVk7-z.js";import"./useToggleState-CvOmtPpp.js";import"./useFormReset-B4UK9p8r.js";import"./react-children-utilities-DZ5iFmYj.js";import"./ClearPropsContext-Bddw_Fzg.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,j=E("submit"),Or={title:"Integrations/React Hook Form/Switch",component:p,render:()=>{const t=async l=>{await d(5e3),j(l)},o=a({defaultValues:{isEnabled:!1}}),u=F();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(h,{children:[r.jsx(u,{name:"isEnabled",children:r.jsx(n,{children:"Text"})}),r.jsx(x,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},e={},i={render:t=>{const o=a();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{...t,children:"Field1"})}),r.jsxs(n,{children:["Field2",r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          <Switch {...props}>Field1</Switch>
        </Field>
        <Switch>
          Field2
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Switch>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field</Switch>
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
}`,...s.parameters?.docs?.source}}};const _r=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,_r as __namedExportsOrder,Or as default};
