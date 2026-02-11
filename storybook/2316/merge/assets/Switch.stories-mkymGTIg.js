import{r as F,j as r}from"./iframe-BWSm23JV.js";import{a as n,u as p,F as a,R as u,S as l,t as S}from"./ResetButton-DYI22zh_.js";import{B as d}from"./Button-B45r898z.js";import{S as x}from"./Section-DgtxUa5M.js";import{A as E}from"./ActionGroup-DMDH4DjJ.js";import{s as c}from"./Action-cxW9JZWQ.js";import{S as m}from"./Switch-DNbMghBK.js";import{F as j}from"./FieldError-DNnGmqvO.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-WPTM_TAt.js";import"./flowComponent-JjUcob8a.js";import"./index-dkn6ScVQ.js";import"./clsx-B-dksMZM.js";import"./index-D0YiHBOl.js";import"./useLocalizedStringFormatter-BKZxLutv.js";import"./context-4oRtfVxK.js";import"./useRef-DTcr5n_c.js";import"./utils-Dla7ZNEN.js";import"./ButtonView-CajacAb0.js";import"./browser-S_Q3Hufb.js";import"./IconWarning-R37DsKRA.js";import"./remote-DcEXMbRM.js";import"./Text-BaJ5HEnd.js";import"./EmulatedBoldText-Bqi8zNtS.js";import"./Text-DreghWw5.js";import"./LoadingSpinner-CWXG4qcN.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DWVSyZOa.js";import"./ProgressBar-CVcTQ1yy.js";import"./Label--12nIVsO.js";import"./Hidden-C-tiV80t.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C6wIzqCz.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C_E4YsZw.js";import"./useFocus-CrlSoDhl.js";import"./useFocusRing-CI0bGTjl.js";import"./useFocusable-7cwTszGB.js";import"./ContextMenuSection-DuWXEO2a.js";import"./Dialog-uisnl94N.js";import"./RSPContexts--whDujQs.js";import"./OverlayArrow-Lv31M_SN.js";import"./useControlledState-BdTYoDdO.js";import"./Collection-7HXUzyj9.js";import"./CollectionBuilder-CIbQ3PZQ.js";import"./SelectionIndicator-2rIWK9av.js";import"./Separator-7FCd2LVI.js";import"./SelectionManager-CahjVjpE.js";import"./useEvent-BAiWPb0X.js";import"./useCollator-68O4Bddb.js";import"./FocusScope-C7G-5g6h.js";import"./VisuallyHidden-BTdnLv2k.js";import"./getActionGroupSlot-BXCkrZKT.js";import"./useStatic-B14v8lYB.js";import"./context-DzxYIN56.js";import"./useFieldComponent-Cr8cfCaw.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D9SqIMbN.js";import"./useFormReset-DeveCpy2.js";import"./FieldError-BA3GdU0H.js";import"./AlertText-b5oldDtH.js";import"./AlertIcon-CwdoSZHL.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Pr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Wr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,Wr as __namedExportsOrder,Pr as default};
