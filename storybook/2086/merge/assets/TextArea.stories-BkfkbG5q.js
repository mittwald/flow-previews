import{j as r,r as x}from"./iframe-DOYRhvKw.js";import{a as d,u as l,F as c,t as f}from"./Form-CJukERYt.js";import{L as o}from"./Label-D1jneSDA.js";import{B as p}from"./Button-C2r2j3I4.js";import{S as F}from"./Section-BJf3Kb9f.js";import{A as j}from"./ActionGroup-BQVi9nN6.js";import{s as u}from"./Action-BNkegqWa.js";import{d as g}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-BG5CZo2j.js";import{F as b}from"./useFieldComponent-CVvykpK2.js";import"./index-nuYtCEEu.js";import"./flowComponent-STxdqvts.js";import"./index-CBooujIz.js";import"./clsx-B-dksMZM.js";import"./index-CsHgCCkK.js";import"./useLocalizedStringFormatter-DmT4fRR_.js";import"./context-NzKNm45Y.js";import"./browser-BfmJHaZX.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DPl4piTh.js";import"./utils-Bgpcx055.js";import"./Hidden-vFw0yyvc.js";import"./IconWarning-CT2mn3WV.js";import"./Text-uG3ng9U4.js";import"./EmulatedBoldText-wbMAxmw1.js";import"./Text-ChShlFeN.js";import"./LoadingSpinner-x8jgjTbZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DqQnue56.js";import"./ProgressBar-DECQ-pQm.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CzwTtnKl.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-GLnS58A3.js";import"./useFocus-19H2kxNT.js";import"./useFocusRing-BgXDKXFW.js";import"./useFocusable-DT2cLKuD.js";import"./ContextMenuSection-C5Ehy01g.js";import"./Dialog-QPXJS7lu.js";import"./RSPContexts-D64TVg0j.js";import"./OverlayArrow-C0WVRV0f.js";import"./useControlledState-BpyUCkTO.js";import"./Collection-BmR1fMr0.js";import"./CollectionBuilder-COEzD4ng.js";import"./SelectionIndicator-DAPFHJnO.js";import"./Separator-9JM_OpZ0.js";import"./SelectionManager-BtUAX0vR.js";import"./useEvent-Tq7AIfXA.js";import"./useCollator-Dm4rB5GB.js";import"./FocusScope-CgTCZfj1.js";import"./VisuallyHidden-DLTCEUwm.js";import"./dynamic-nHNYFzn9.js";import"./getActionGroupSlot-DkFy2TVv.js";import"./useStatic-kDWe5hml.js";import"./context-CjasfPnd.js";import"./TextFieldBase-BQTokYYT.js";import"./FieldDescription-Blyf9m0W.js";import"./TextField-zZoLVZYC.js";import"./Form-iQ1p0tBu.js";import"./Group-HF6ucXVn.js";import"./Input-OSTDVC9B.js";import"./useTextField-B558uymh.js";import"./useFormReset-BHPIYNcK.js";import"./useFormValidation-37foNTGu.js";import"./ReactAriaControlledValueFix-BeGVeEzJ.js";import"./react-children-utilities-BC28ceB8.js";import"./ClearPropsContext-BqcXprie.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Ir={title:"Integrations/React Hook Form/TextArea",component:d,render:()=>{const s=async h=>{await u(1500),y(h)},e=l({defaultValues:{message:"",messageDefaultValue:g.medium,messageRequired:"",messageMaxLength:""}}),i=f();return r.jsx(c,{form:e,onSubmit:s,children:r.jsxs(F,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsx(j,{children:r.jsx(p,{type:"submit",children:"Submit"})})]})})}},m={},n={render:s=>{const e=l();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=l();return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(p,{type:"submit",children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
        </Field>
        <TextArea isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextArea>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
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
}`,...a.parameters?.docs?.source}}};const Wr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Wr as __namedExportsOrder,Ir as default};
