import{r as x,j as r}from"./iframe-1Z6hWL0q.js";import{a as p,u as a,F as d,R as u,S as F,t as j}from"./ResetButton-DGt7cfbK.js";import{L as t}from"./Label-BLX0X_A7.js";import{B as l}from"./Button-Up8_TRdV.js";import{S as b}from"./Section-DeLmOfWa.js";import{A as E}from"./ActionGroup-D0Uu4uF5.js";import{s as c}from"./ActionBatch-B4cDzNNZ.js";import{L as S}from"./DateInput-D0Ic73Zo.js";import{T as o}from"./TimeField-CanMhiLz.js";import{F as T}from"./FieldError-CSszVQO8.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CeVErRgL.js";import"./flowComponent-CQSqsFz-.js";import"./index-CPV4-njg.js";import"./clsx-B-dksMZM.js";import"./index-OoNE8c9e.js";import"./useLocalizedStringFormatter-FfFR6yJN.js";import"./context-DCww6zBl.js";import"./ActionGroupView-BsDKFWxT.js";import"./Content-BI990Rgh.js";import"./Heading-Dc2YOm8x.js";import"./Heading-BTDLHxEZ.js";import"./RSPContexts-BZtvqclp.js";import"./utils-B0Ub4KXD.js";import"./Text-NSg919ow.js";import"./browser-OyZXUgp8.js";import"./EmulatedBoldText-CsGTmPK_.js";import"./Text-DPhytgE2.js";import"./Modal-DHg5t4ae.js";import"./useOverlayController-zDyCyx1O.js";import"./useStatic-BMrg-KZz.js";import"./Overlay-DFEnDYi7.js";import"./OverlayContextProvider-BlmnF6zY.js";import"./LoadingSpinner-B9ElqUFv.js";import"./IconWarning-CstRa6-6.js";import"./remote-BXzLQ_GS.js";import"./Dialog-BOSurAfE.js";import"./Button-DpyZuV_i.js";import"./ProgressBar-BV7ioShA.js";import"./Label-Berd7YBY.js";import"./Hidden-CX4T_I8z.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8l-Wr5R.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bgz5j4W3.js";import"./useFocus-MFE9JzzM.js";import"./useFocusRing-EnMEiTgA.js";import"./useFocusable-BrwqamRV.js";import"./OverlayArrow-0_UUlvtG.js";import"./useControlledState-DfFBi8JJ.js";import"./Collection-5lvTrIT4.js";import"./CollectionBuilder-zke4D84b.js";import"./SelectionIndicator-CEn-3elL.js";import"./Separator-CYJUtDva.js";import"./SelectionManager-CPzu3hBL.js";import"./useEvent-B2NydoIp.js";import"./useCollator-wpyuYlTN.js";import"./FocusScope-Dlwlk6_J.js";import"./VisuallyHidden-CCJLIB7u.js";import"./ButtonView-CzNSGQ0T.js";import"./Flex-Vk66B6a6.js";import"./useRef-B1h6Z-hA.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DH07SvAX.js";import"./getActionGroupSlot-jkvbnKjz.js";import"./FieldError-CZQJbtEC.js";import"./Form-DiZWQd7A.js";import"./Group-C0vzpAPe.js";import"./Input-DsXoSrKb.js";import"./useFormReset-BI-pxd56.js";import"./useFormValidation-B95RxpRV.js";import"./useSpinButton-EqSme7Jc.js";import"./useFilter-B_sTCvb5.js";import"./useFieldComponent-DdzfuZRi.js";import"./AlertText-BJ3sSdkZ.js";import"./AlertIcon-Blha7MMy.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Yr={title:"Integrations/React Hook Form/TimeField",component:p,render:()=>{const e=async h=>{await c(1500),g(h)},f=a({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=a();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=a();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
