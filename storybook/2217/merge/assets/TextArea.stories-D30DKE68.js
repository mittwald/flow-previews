import{j as r,r as F}from"./iframe-DITmTDde.js";import{b as p,u as d,F as l,t as j}from"./Form-CrJtjiP0.js";import{L as o}from"./Label-DcnJ5Vhi.js";import{R as h,S as x}from"./ResetButton-vhInV8y4.js";import{B as c}from"./Button-DgKZKMvA.js";import{S as g}from"./Section-LC8gX_k1.js";import{A as b}from"./ActionGroup-BB5mge67.js";import{s as u}from"./Action-BJnGojjr.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-CxS5LIvb.js";import{F as S}from"./FieldError-CBw2sGOe.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BjimB01T.js";import"./flowComponent-BIGGpSqP.js";import"./index-m2QHiCbK.js";import"./clsx-B-dksMZM.js";import"./index-oEm39XqO.js";import"./useLocalizedStringFormatter-IPLp48A-.js";import"./context-CEC4U_pc.js";import"./browser-wgtkTybB.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DJaUceky.js";import"./utils-C40myb20.js";import"./Hidden-8YgQRG2G.js";import"./useRef-AytpOevM.js";import"./IconWarning-FbTim4wC.js";import"./remote-BYAMMrVX.js";import"./Text-B4ALgTL8.js";import"./EmulatedBoldText-CTBn_63u.js";import"./Text-rw4H23NJ.js";import"./LoadingSpinner-CQhA1l2h.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CsPSNcu1.js";import"./ProgressBar-DNk1ASVc.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DZbkZQ01.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cwz_fpS2.js";import"./useFocus-DrnrNdFb.js";import"./useFocusRing-DXc99t-B.js";import"./useFocusable-m8WXVW9y.js";import"./ContextMenuSection-Dk8lBhMu.js";import"./Dialog-Bmgfq9R9.js";import"./RSPContexts-jFJkk-mB.js";import"./OverlayArrow-CD7gdoFk.js";import"./useControlledState-D6UlgZp0.js";import"./Collection-CIVuuc0n.js";import"./CollectionBuilder-IVJxZg8U.js";import"./SelectionIndicator-711mCjj0.js";import"./Separator-BPOzmHFV.js";import"./SelectionManager-WdH-qHQg.js";import"./useEvent-CgJsVtlm.js";import"./useCollator-CsbGxztB.js";import"./FocusScope-zqNAAOXF.js";import"./VisuallyHidden-CcOPNtcw.js";import"./getActionGroupSlot-C8PBzZsA.js";import"./useStatic-OoNPiP3V.js";import"./context-fizPycLA.js";import"./TextFieldBase-RS_A_YdG.js";import"./FieldDescription-BGaJf4ya.js";import"./useFieldComponent-CR_sI6nz.js";import"./TextField-C51vSSpo.js";import"./FieldError-B8qSKLtD.js";import"./Form-C6LPNxyn.js";import"./Group-BcWNK89K.js";import"./Input-tNtxpliI.js";import"./useTextField-Mn5K0qmA.js";import"./useFormReset-vbhoemIT.js";import"./useFormValidation-gmIFw0Kx.js";import"./useControlledHostValueProps-DAUukQ8V.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Gr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Hr as __namedExportsOrder,Gr as default};
