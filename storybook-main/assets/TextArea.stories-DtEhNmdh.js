import{j as r,r as x}from"./iframe-BO4how7V.js";import{a as d,u as l,F as c,t as f}from"./Form-5BACG0Xr.js";import{L as o}from"./Label-Dg0lhbqP.js";import{B as p}from"./Button-BRSyykRx.js";import{S as F}from"./Section-L1VuE5li.js";import{A as j}from"./ActionGroup-1g_0PgZz.js";import{s as u}from"./Action-BcCpRMgW.js";import{d as g}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-BeEPBHbr.js";import{F as b}from"./useFieldComponent-CjWlILZl.js";import"./index-nuYtCEEu.js";import"./flowComponent-_BWaP51b.js";import"./index-B3PYSYUw.js";import"./clsx-B-dksMZM.js";import"./index-CzMnHAtb.js";import"./useLocalizedStringFormatter-Byhh4L4X.js";import"./context-n99Hur2q.js";import"./browser-9RCZAQdm.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-HRe2PJ1I.js";import"./utils-BpiWkIEZ.js";import"./Hidden-cuI6d2d2.js";import"./IconWarning-riXPckyc.js";import"./Text-k4VuksKp.js";import"./EmulatedBoldText-B4e_rnhx.js";import"./Text-BwppUNzg.js";import"./LoadingSpinner-Bt5VpGJB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-T2VJnm-n.js";import"./ProgressBar-Cb_Q8Aey.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-R_XjJcRU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C-n8mYYh.js";import"./useFocus-CFrGhCIR.js";import"./useFocusRing-cZUm55wA.js";import"./useFocusable-Dm6zCBge.js";import"./ContextMenuSection-D98yvfja.js";import"./Dialog-9TwJqweV.js";import"./RSPContexts-C8zlTsZJ.js";import"./OverlayArrow-6T1AUm1N.js";import"./useControlledState-Dy2CU0s2.js";import"./Collection-7Jhx6ozR.js";import"./CollectionBuilder-NvmcR0Ec.js";import"./SelectionIndicator-qPgcj5gy.js";import"./Separator-CDyVGVx6.js";import"./SelectionManager-CUJzsbBx.js";import"./useEvent-BsUSX18g.js";import"./useCollator-fJkQzVou.js";import"./FocusScope-BDHPNMgd.js";import"./VisuallyHidden-BldPGQAk.js";import"./dynamic-DPbzu-N4.js";import"./getActionGroupSlot-DNMgIyad.js";import"./useStatic-BYOxqZVF.js";import"./context-DS1PliZx.js";import"./TextFieldBase-DX5oMAlQ.js";import"./FieldDescription-CJgVFelr.js";import"./TextField-LacAyjo3.js";import"./Form-hZ8SLhDT.js";import"./Group-BtVQV9Eb.js";import"./Input-C8s0JVaR.js";import"./useTextField-shmblCKI.js";import"./useFormReset-DKBI04Qj.js";import"./useFormValidation-BHRl0fwc.js";import"./ReactAriaControlledValueFix-BjDsGSLB.js";import"./react-children-utilities-aRBIKRzv.js";import"./ClearPropsContext-Cr48Xe01.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Ir={title:"Integrations/React Hook Form/TextArea",component:d,render:()=>{const s=async h=>{await u(1500),y(h)},e=l({defaultValues:{message:"",messageDefaultValue:g.medium,messageRequired:"",messageMaxLength:""}}),i=f();return r.jsx(c,{form:e,onSubmit:s,children:r.jsxs(F,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsx(j,{children:r.jsx(p,{type:"submit",children:"Submit"})})]})})}},m={},n={render:s=>{const e=l();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=l();return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(p,{type:"submit",children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
