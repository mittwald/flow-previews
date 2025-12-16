import{j as r,r as F}from"./iframe-B9O3ZODG.js";import{u as p,F as d}from"./Form-BITB_N9N.js";import{L as o}from"./Label-B_yUo08w.js";import{F as l,t as j}from"./Field-C1mLbov2.js";import{B as c}from"./Button-_bqaGPGi.js";import{S as g}from"./Section-D0wO1wxm.js";import{A as b}from"./ActionGroup-Cs7TEC0c.js";import{s as u}from"./Action-BQuW1ndX.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-DTNDFHdb.js";import{F as S}from"./FieldError-Kcym6Pi9.js";import{R as h}from"./ResetButton-DICAuUJI.js";import{S as x}from"./SubmitButton-DarLBIcW.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-B4_YLigQ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dx9-gQDY.js";import"./index-Bk8h6op_.js";import"./index-CtGMuppQ.js";import"./useLocalizedStringFormatter-B-FlnnN8.js";import"./context-Dx2UXtP2.js";import"./Label-CUW7vXaw.js";import"./utils-B6bG5pl_.js";import"./Hidden-1Y6zqjHd.js";import"./dynamic-18R3GcKE.js";import"./IconApp-Bd3S2boz.js";import"./remote-BreErbqH.js";import"./IconX-Bnf6ky8_.js";import"./IconCheck-DJGWCBoR.js";import"./Text-BRHICk1_.js";import"./EmulatedBoldText-Dpkb15Ba.js";import"./Text-Bex48AEt.js";import"./LoadingSpinner-PN97giik.js";import"./ariaLive-CzzNeS0z.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DakXwMZU.js";import"./ProgressBar-TB1EdJrk.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BXmDULV_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CefnHgfW.js";import"./useFocus-CgajmM1R.js";import"./useFocusRing-DApHxXgU.js";import"./useFocusable-x8wHKSzm.js";import"./ContextMenuSection-Hhq7J4bP.js";import"./lib-90ocxLs-.js";import"./Dialog-DJkxmbot.js";import"./RSPContexts-_UgIwAnW.js";import"./OverlayArrow-Bv80aGiZ.js";import"./useControlledState-C-iuwE9o.js";import"./Collection-DF4Xj_TY.js";import"./CollectionBuilder-CNg30nDc.js";import"./SelectionIndicator-DTYkM1Yz.js";import"./Separator-BaiOIBBy.js";import"./SelectionManager-DYOtVSu9.js";import"./useEvent-BwQwG_n8.js";import"./useCollator-KSJVzoQQ.js";import"./FocusScope-kRkt8xnH.js";import"./VisuallyHidden-C9d_MZuH.js";import"./getActionGroupSlot-Cp-CJTrn.js";import"./useStatic-q7_HxIxT.js";import"./context-DoFxq3ih.js";import"./TextFieldBase-CBTlgBcb.js";import"./FieldDescription-Ch5HP30p.js";import"./useFieldComponent-CRvrWckq.js";import"./TextField-DEuIFKut.js";import"./FieldError-BrC6eHcT.js";import"./Form-BpuzTWI4.js";import"./Group-Ds4785A_.js";import"./Input-DL2ocd8r.js";import"./useTextField-_A1P15Z-.js";import"./useFormReset-Cc2EXXxK.js";import"./useFormValidation-Dlo1bwd1.js";import"./useControlledHostValueProps--c5a68bC.js";import"./IconDanger-Aj7LdC1h.js";import"./useRef-jwi4kh1m.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Jr={title:"Integrations/React Hook Form/TextArea",component:l,render:()=>{const s=async f=>{await u(1500),y(f)},e=p({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(d,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=p();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};const Qr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Qr as __namedExportsOrder,Jr as default};
