import{r as F,j as r}from"./iframe-DzjGvN4s.js";import{a as p,u as d,F as l,R as h,S as x,t as j}from"./ResetButton-BC1zJie2.js";import{L as o}from"./Label-B3AoafTb.js";import{B as c}from"./Button-BJ_Dg9g5.js";import{S as g}from"./Section-BM-LoTUP.js";import{A as b}from"./ActionGroup-7GnL-udW.js";import{s as u}from"./Action-y81vuNMi.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-tlYL5sXj.js";import{F as S}from"./FieldError-wOx9kOaR.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D8j0vgwF.js";import"./flowComponent-CmnGOp_t.js";import"./index-bYngC-Dz.js";import"./clsx-B-dksMZM.js";import"./index-CvRHkpxf.js";import"./useLocalizedStringFormatter-exeLKOxN.js";import"./context-kL1uqGsw.js";import"./useRef-DhpslEjl.js";import"./utils-CaY6-C_T.js";import"./ButtonView-BBrehocd.js";import"./browser-DnRnaS9W.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CJv7rcJv.js";import"./Hidden-CvDiJOD9.js";import"./IconWarning-s7NSVc-U.js";import"./remote-cWDQ0h3n.js";import"./Text--QhKw61r.js";import"./EmulatedBoldText-DBPO29Lf.js";import"./Text-CsTzsUsp.js";import"./LoadingSpinner-DZ3G9IyW.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BzmY1str.js";import"./ProgressBar-BHFfTD-E.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-7qQt_FP7.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D3so-j8A.js";import"./useFocus-DFbK7vZ5.js";import"./useFocusRing-wMvVuuCP.js";import"./useFocusable-CvI9gOnC.js";import"./ContextMenuSection-ehzNPOBV.js";import"./Dialog-BxRkHkZu.js";import"./RSPContexts-D4WEG-B8.js";import"./OverlayArrow-k_B_Hrky.js";import"./useControlledState-DSekeTPZ.js";import"./Collection-BYckC4CV.js";import"./CollectionBuilder-60Hh4eJv.js";import"./SelectionIndicator-BO4ZIlru.js";import"./Separator-w2v2LtVY.js";import"./SelectionManager-DC2ExAk3.js";import"./useEvent-DrzTQfG9.js";import"./useCollator-BxOUjI0N.js";import"./FocusScope-D_QyZTFZ.js";import"./VisuallyHidden-SzhNhvGP.js";import"./getActionGroupSlot-BxJKXkIY.js";import"./useStatic-CvNWVJY5.js";import"./context-_PoIYhJG.js";import"./useFieldComponent-BsZ1NoTf.js";import"./useControlledHostValueProps-B88rGyy5.js";import"./FieldDescription-Bk9-3UzX.js";import"./TextField-CxS1QcE8.js";import"./FieldError-Cm2eS0Qx.js";import"./Form-C7-6k5t9.js";import"./Group-BEToeHeW.js";import"./Input-BbhuOsE_.js";import"./useTextField-Cth1_8nw.js";import"./useFormReset-lQZuuaDU.js";import"./useFormValidation-CCaCqHBd.js";import"./AlertText-cLdL_XpT.js";import"./AlertIcon-C0w0dGgz.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Gr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
