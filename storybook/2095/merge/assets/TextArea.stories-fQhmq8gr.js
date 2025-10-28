import{j as r,r as x}from"./iframe-BvCo0Jms.js";import{a as d,u as l,F as c,t as f}from"./Form-Cf8bPcIw.js";import{L as o}from"./Label-9SlnZKrY.js";import{B as p}from"./Button-BdRFLyHU.js";import{S as F}from"./Section-B56xh2AV.js";import{A as j}from"./ActionGroup-BBtpfHLw.js";import{s as u}from"./Action-B4Kyn-_S.js";import{d as g}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-Chqx5i1a.js";import{F as b}from"./useFieldComponent-h58tn8zy.js";import"./index-nuYtCEEu.js";import"./flowComponent-D-_a8eO4.js";import"./index-DAXCiU9B.js";import"./clsx-B-dksMZM.js";import"./index-DV2r3peR.js";import"./useLocalizedStringFormatter-CtRq2A2D.js";import"./context-EIbK-86q.js";import"./browser-DOebU0pA.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DMgJ6fuj.js";import"./utils-Cw2xzcbV.js";import"./Hidden-Bxmlm1r5.js";import"./IconWarning-DF-Lhcnu.js";import"./Text-CM7-JVVa.js";import"./EmulatedBoldText-BsN5iyXq.js";import"./Text-BvqGhHlZ.js";import"./LoadingSpinner-6N6Rbt89.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-pJkeE9x7.js";import"./ProgressBar-Upnvx2FX.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DLhdFYyT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BZrRujBy.js";import"./useFocus-C5EW73ar.js";import"./useFocusRing-D8FCXLiH.js";import"./useFocusable-BxQ2X-GC.js";import"./ContextMenuSection-D9cp5lxC.js";import"./Dialog-Bn7Do3Cm.js";import"./RSPContexts-DqErA_gH.js";import"./OverlayArrow-CPNbfpB1.js";import"./useControlledState-C0Hm7DMH.js";import"./Collection-DPawhEbh.js";import"./CollectionBuilder-BCns4Ten.js";import"./SelectionIndicator-CnEt238s.js";import"./Separator-CzBpIsK8.js";import"./SelectionManager-BEbqbhJ2.js";import"./useEvent-CQT5QNCL.js";import"./useCollator-B2HFQgM0.js";import"./FocusScope-Dcb5J3f3.js";import"./VisuallyHidden-ch7dD1y0.js";import"./dynamic-BmXp7BE9.js";import"./getActionGroupSlot-Bgw1lBB1.js";import"./useStatic-BT5cYh4l.js";import"./context-Dhm9rN8k.js";import"./TextFieldBase-DUjDXXxQ.js";import"./FieldDescription-ThKAVIuf.js";import"./TextField-Cg2_j61p.js";import"./Form-DLKKw6GK.js";import"./Group-CxRviubY.js";import"./Input-DUPogfhm.js";import"./useTextField-DZ1FF2T9.js";import"./useFormReset-B8Yq5UFv.js";import"./useFormValidation-DFmu6UDs.js";import"./ReactAriaControlledValueFix-B2lXfI7Z.js";import"./react-children-utilities-K6HpEoIu.js";import"./ClearPropsContext-BXwgDp0Q.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Ir={title:"Integrations/React Hook Form/TextArea",component:d,render:()=>{const s=async h=>{await u(1500),y(h)},e=l({defaultValues:{message:"",messageDefaultValue:g.medium,messageRequired:"",messageMaxLength:""}}),i=f();return r.jsx(c,{form:e,onSubmit:s,children:r.jsxs(F,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsx(j,{children:r.jsx(p,{type:"submit",children:"Submit"})})]})})}},m={},n={render:s=>{const e=l();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=l();return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(p,{type:"submit",children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
