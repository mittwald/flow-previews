import{r as x,j as r}from"./iframe-BWSm23JV.js";import{a,u as p,F as d,R as u,S as F,t as j}from"./ResetButton-DYI22zh_.js";import{L as t}from"./Label-T9tt80_8.js";import{B as l}from"./Button-B45r898z.js";import{S as b}from"./Section-DgtxUa5M.js";import{A as E}from"./ActionGroup-DMDH4DjJ.js";import{s as c}from"./Action-cxW9JZWQ.js";import{L as S}from"./DateInput-hfoSc-5A.js";import{T as o}from"./TimeField-CMNMR7xY.js";import{F as T}from"./FieldError-DNnGmqvO.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-WPTM_TAt.js";import"./flowComponent-JjUcob8a.js";import"./index-dkn6ScVQ.js";import"./clsx-B-dksMZM.js";import"./index-D0YiHBOl.js";import"./useLocalizedStringFormatter-BKZxLutv.js";import"./context-4oRtfVxK.js";import"./useRef-DTcr5n_c.js";import"./utils-Dla7ZNEN.js";import"./ButtonView-CajacAb0.js";import"./browser-S_Q3Hufb.js";import"./Label.module-CUYTf9Jc.js";import"./Label--12nIVsO.js";import"./Hidden-C-tiV80t.js";import"./IconWarning-R37DsKRA.js";import"./remote-DcEXMbRM.js";import"./Text-BaJ5HEnd.js";import"./EmulatedBoldText-Bqi8zNtS.js";import"./Text-DreghWw5.js";import"./LoadingSpinner-CWXG4qcN.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DWVSyZOa.js";import"./ProgressBar-CVcTQ1yy.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C6wIzqCz.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C_E4YsZw.js";import"./useFocus-CrlSoDhl.js";import"./useFocusRing-CI0bGTjl.js";import"./useFocusable-7cwTszGB.js";import"./ContextMenuSection-DuWXEO2a.js";import"./Dialog-uisnl94N.js";import"./RSPContexts--whDujQs.js";import"./OverlayArrow-Lv31M_SN.js";import"./useControlledState-BdTYoDdO.js";import"./Collection-7HXUzyj9.js";import"./CollectionBuilder-CIbQ3PZQ.js";import"./SelectionIndicator-2rIWK9av.js";import"./Separator-7FCd2LVI.js";import"./SelectionManager-CahjVjpE.js";import"./useEvent-BAiWPb0X.js";import"./useCollator-68O4Bddb.js";import"./FocusScope-C7G-5g6h.js";import"./VisuallyHidden-BTdnLv2k.js";import"./getActionGroupSlot-BXCkrZKT.js";import"./useStatic-B14v8lYB.js";import"./context-DzxYIN56.js";import"./FieldError-BA3GdU0H.js";import"./Form-DKTVNEPJ.js";import"./Group-BVyYtesD.js";import"./Input-Cdu3oBr0.js";import"./useFormReset-DeveCpy2.js";import"./useFormValidation-C5ZFiF_6.js";import"./useSpinButton-Cneza5Qi.js";import"./useFilter-CFACYw1j.js";import"./useFieldComponent-Cr8cfCaw.js";import"./AlertText-b5oldDtH.js";import"./AlertIcon-CwdoSZHL.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "ErrorFromForm"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Cr as __namedExportsOrder,kr as default};
