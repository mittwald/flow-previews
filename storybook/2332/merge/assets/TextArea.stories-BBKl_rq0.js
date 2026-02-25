import{r as F,j as r}from"./iframe-COJ9RE48.js";import{a as p,u as d,F as l,R as h,S as x,t as j}from"./ResetButton-ClaeOlVC.js";import{L as o}from"./Label-B42D24b-.js";import{B as c}from"./Button-CMQanS4m.js";import{S as g}from"./Section-CUB_WQoM.js";import{A as b}from"./ActionGroup-De8HYD8X.js";import{s as u}from"./ActionBatch-BL-a0sfJ.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-Bq3Jli8m.js";import{F as S}from"./FieldError-CCI4UyFC.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CTxK5DLa.js";import"./flowComponent-X1hvA0Vg.js";import"./index-Dygvt5pN.js";import"./clsx-B-dksMZM.js";import"./index-D5EZb4o9.js";import"./useLocalizedStringFormatter-Cn0B0HDz.js";import"./context-6fEx4cd5.js";import"./ActionGroupView-fMLXotgU.js";import"./Content-CnaSOdl5.js";import"./Heading-DxYLpioN.js";import"./Heading-5-Pxsrno.js";import"./RSPContexts-CacVUoYW.js";import"./utils-mqorQ4Bj.js";import"./Text-Bzpr-GrC.js";import"./browser-DOjt7J27.js";import"./EmulatedBoldText-DzXTkxYI.js";import"./Text-De8BGzPh.js";import"./Modal-DApCOQ01.js";import"./useOverlayController-FIUUtlCA.js";import"./useStatic-BccM3ree.js";import"./Overlay-DCP7Ml7p.js";import"./OverlayContextProvider-CBc03cFF.js";import"./LoadingSpinner-CBTolouR.js";import"./IconWarning-BMwiqmvN.js";import"./remote-BHpqvLOn.js";import"./Dialog-Bn1iAsfr.js";import"./Button-BX1Wpmoy.js";import"./ProgressBar-DUh8L45o.js";import"./Label-H5AVk4Tf.js";import"./Hidden-DYByFplp.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CDG97Ijf.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CI06DRQW.js";import"./useFocus-C0sdQCtL.js";import"./useFocusRing-CTczndmn.js";import"./useFocusable-_fwbj2-b.js";import"./OverlayArrow-BueQpaoQ.js";import"./useControlledState-BKL31WKE.js";import"./Collection-Cj7qUdsZ.js";import"./CollectionBuilder-BBRIkTLo.js";import"./SelectionIndicator-D_pnQduh.js";import"./Separator-JpTraE0Z.js";import"./SelectionManager-2oI8n0VA.js";import"./useEvent-CTKdBRUT.js";import"./useCollator-CXxaQt2T.js";import"./FocusScope-BJ-yMckp.js";import"./VisuallyHidden-DAPVNl2G.js";import"./ButtonView-BPjbrkaq.js";import"./Flex-DKLR47fR.js";import"./useRef-CyM80vuH.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BD_6r0jM.js";import"./getActionGroupSlot-CmDqFskk.js";import"./useFieldComponent-C2vXV8Pm.js";import"./useControlledHostValueProps-DuU1EZGK.js";import"./FieldDescription-D-lJXb1O.js";import"./TextField-BD9pjh8M.js";import"./FieldError-GKNsJ0Cn.js";import"./Form-DdhXtOmH.js";import"./Group-BNuj0FFe.js";import"./Input-CNxbrx0W.js";import"./useTextField-BWRUvHBZ.js";import"./useFormReset-BVeU8GRO.js";import"./useFormValidation-DQ8UK_oB.js";import"./AlertText-DQ5OQX7v.js";import"./AlertIcon-BTDbiAGg.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Qr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const i=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),s=j();return r.jsx(l,{form:e,onSubmit:i,children:r.jsxs(g,{children:[r.jsx(s,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:i=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:i=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Xr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Xr as __namedExportsOrder,Qr as default};
