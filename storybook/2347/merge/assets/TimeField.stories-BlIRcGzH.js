import{r as x,j as r}from"./iframe-teIxY4wP.js";import{a as p,u as a,F as d,R as u,S as F,t as j}from"./ResetButton-BGJ4soxO.js";import{L as t}from"./Label-CKh72PTo.js";import{B as l}from"./Button-CCmGuoae.js";import{S as b}from"./Section-CeVx7gOS.js";import{A as E}from"./ActionGroup-CZ4gZfnQ.js";import{s as c}from"./ActionBatch-BzoAcrhu.js";import{L as S}from"./DateInput-CSL52nKl.js";import{T as o}from"./TimeField-DwCoJLAD.js";import{F as T}from"./FieldError-4X4kCiGy.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bd0vnJCs.js";import"./flowComponent-B3BP6Vj1.js";import"./index-Ctx6H3Hx.js";import"./clsx-B-dksMZM.js";import"./index-SbFVnFKt.js";import"./useLocalizedStringFormatter-cjXC4-Kw.js";import"./context-Bkxu1haQ.js";import"./ActionGroupView-CAxVNdho.js";import"./Content-C4FtWXhl.js";import"./Heading-BcZ49Txx.js";import"./Heading-CqSJbJuk.js";import"./RSPContexts-DVypfZug.js";import"./utils-C8wUhSun.js";import"./Text-CB74-0Ir.js";import"./browser-ClA0f7pc.js";import"./EmulatedBoldText-C0BZfzN3.js";import"./Text-BEd6-Qqe.js";import"./Modal-asH2HsR2.js";import"./useOverlayController-2V9dFGfh.js";import"./useStatic-JzrpAx77.js";import"./Overlay-C9X8JugR.js";import"./OverlayContextProvider-BhqlYdhN.js";import"./LoadingSpinner-CKqfIoaL.js";import"./IconWarning-C8c-iA3p.js";import"./remote-DC3yMzFm.js";import"./Dialog-CPTLkUM-.js";import"./Button-DPcEERaP.js";import"./ProgressBar-uiVLSJyQ.js";import"./Label-CnpPAxdS.js";import"./Hidden-CVxq3czE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BwGc14jy.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Znh85jsw.js";import"./useFocus-Pnl5w-Ue.js";import"./useFocusRing-DM5Gti31.js";import"./useFocusable-C4kMCM88.js";import"./OverlayArrow-BnOVUBMe.js";import"./useControlledState-Dnjkc9fO.js";import"./Collection-CPWnsoE7.js";import"./CollectionBuilder-6gbuY_L9.js";import"./SelectionIndicator-DFQRQ6iO.js";import"./Separator-BaKjxxxO.js";import"./SelectionManager-Th26CzKh.js";import"./useEvent-BcVdyav8.js";import"./useCollator-Dsy6DAyA.js";import"./FocusScope-Crjq_ymp.js";import"./VisuallyHidden-BEOGf6u-.js";import"./ButtonView-JoXTWy5r.js";import"./Flex-B1uMy55R.js";import"./useRef-DqhFWaAg.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DZpqaSo0.js";import"./getActionGroupSlot-BwsAD19l.js";import"./FieldError-HPfFKZ-Z.js";import"./Form-BrsNngNz.js";import"./Group-CXesKRc7.js";import"./Input-D4TpTGNB.js";import"./useFormReset-DcLCq2Kv.js";import"./useFormValidation-CRVUVzjp.js";import"./useSpinButton-DsYVpkJS.js";import"./useFilter-BNzO_ct8.js";import"./useFieldComponent-DaZL5efl.js";import"./AlertText-B6Az6kDS.js";import"./AlertIcon-nbGMee0S.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Yr={title:"Integrations/React Hook Form/TimeField",component:p,render:()=>{const e=async h=>{await c(1500),g(h)},f=a({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=a();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=a();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,zr as __namedExportsOrder,Yr as default};
