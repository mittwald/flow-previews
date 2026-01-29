import{j as r,r as x}from"./iframe-DBKYLzDC.js";import{a,u as p,F as d,t as j,R as u,S as F}from"./ResetButton-ssRCuNTw.js";import{L as t}from"./Label-Dsk_CpOI.js";import{B as l}from"./Button-BFOZVdd1.js";import{S as b}from"./Section-D0mpF1xZ.js";import{A as E}from"./ActionGroup-C49teGDs.js";import{s as c}from"./Action-CPy4r2qq.js";import{L as S}from"./DateInput-DtU3dBl-.js";import{T as o}from"./TimeField-CMV0N1zZ.js";import{F as T}from"./FieldError-BpFJPqyd.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C4GhTGlQ.js";import"./flowComponent-B-1S5Ra8.js";import"./index-CYdVJgGQ.js";import"./clsx-B-dksMZM.js";import"./index-Dr37f313.js";import"./useLocalizedStringFormatter-DY0sD44g.js";import"./context-DJBj5fN2.js";import"./useRef-CtdmBt-J.js";import"./utils-BUG9eo0Q.js";import"./ButtonView-CEeOUgiW.js";import"./browser-DhKn1UU2.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B1DR540-.js";import"./Hidden-D_QywUVZ.js";import"./IconWarning-BvGiLcXk.js";import"./remote-CY71mNcv.js";import"./Text-gSr4j5A3.js";import"./EmulatedBoldText-BKkyEwwz.js";import"./Text-D7rD6BG6.js";import"./LoadingSpinner-CHsn4uBv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cx-eUYHB.js";import"./ProgressBar-PjCJ3Rn2.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BGvoAl80.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BZ5qqTtf.js";import"./useFocus-TYDADYlM.js";import"./useFocusRing-BksqeYWz.js";import"./useFocusable-C-cRLAom.js";import"./ContextMenuSection-DLB9FUAU.js";import"./Dialog-DCNro2wm.js";import"./RSPContexts-Dx0AtfwO.js";import"./OverlayArrow-DgtaOzAt.js";import"./useControlledState-CAANpQPW.js";import"./Collection-CxTKYF8C.js";import"./CollectionBuilder-6XtVclM0.js";import"./SelectionIndicator-DEY3TFv1.js";import"./Separator-CmMmdds6.js";import"./SelectionManager-0frjYs77.js";import"./useEvent-D9IFBpTk.js";import"./useCollator-BjgLOnUX.js";import"./FocusScope-D67WIeli.js";import"./VisuallyHidden-BW797Lc5.js";import"./getActionGroupSlot-BnE40Egr.js";import"./useStatic-DlOT-tNl.js";import"./context-Duo0MdiJ.js";import"./FieldError-DtV1i0Hc.js";import"./Form-CPSCXeOA.js";import"./Group-eKP5WoY_.js";import"./Input-DeboNFfQ.js";import"./useFormValidation-DNSyvwAg.js";import"./useFormReset-BczjDhHV.js";import"./useSpinButton-QUxeVDBr.js";import"./useFilter-vKjuZpIr.js";import"./useFieldComponent-DRt8IUS_.js";import"./AlertText-DJvQ3Kk8.js";import"./AlertIcon-BOzLdeCm.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
