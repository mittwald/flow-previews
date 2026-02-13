import{r as F,j as r}from"./iframe-Bq_dTdDz.js";import{a as p,u as d,F as l,R as h,S as x,t as j}from"./ResetButton-BqUs2IaX.js";import{L as o}from"./Label-DlbZYBs5.js";import{B as c}from"./Button-DwhPeKe2.js";import{S as g}from"./Section-DNG5i0i9.js";import{A as b}from"./ActionGroup-CKWSskWv.js";import{s as u}from"./ActionBatch-DTgx0kqH.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-Pn9Wxluw.js";import{F as S}from"./FieldError-ClLnELEE.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BU-d9n8a.js";import"./flowComponent-BeJ1jrGf.js";import"./index-Dif5dzDL.js";import"./clsx-B-dksMZM.js";import"./index-C2qM6Ecb.js";import"./Overlay-BhiillRq.js";import"./useOverlayController-BN71uM-Z.js";import"./useStatic-OW4DiFQ5.js";import"./OverlayContextProvider-CwxNfmUY.js";import"./LoadingSpinner-QnwB8HJT.js";import"./IconWarning-AvRveFf8.js";import"./remote-BGgAcFUF.js";import"./utils-Dc83Zc3S.js";import"./Dialog-atW1yRI0.js";import"./Button-B82FCYrG.js";import"./ProgressBar-BeilQHeM.js";import"./Label-CPBWbyCv.js";import"./Hidden-CYUCWFXf.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BL_xrhrx.js";import"./context-DasT5rkr.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CxmEVb--.js";import"./useFocus-zY2zj5L9.js";import"./useFocusRing-C2_YEmjA.js";import"./useFocusable-B7WP4__g.js";import"./RSPContexts-BEGF6Rgy.js";import"./OverlayArrow-D8uV1uDe.js";import"./useControlledState-DvV_L9jP.js";import"./Collection-CfTInUqx.js";import"./CollectionBuilder-DXHEkZnM.js";import"./SelectionIndicator-B0He5XEj.js";import"./Separator-oRLs3WBO.js";import"./Text-RESw6iu2.js";import"./SelectionManager-DJLtj_Nc.js";import"./useEvent-Bo6NaH-t.js";import"./useCollator-CL9Njxka.js";import"./FocusScope-jjJ71B2a.js";import"./useLocalizedStringFormatter-jkyob1yB.js";import"./VisuallyHidden-6gUpRQYP.js";import"./ActionGroupView-9NY9P0eT.js";import"./Content-CIrJX21x.js";import"./Heading-C8DRlUq-.js";import"./Heading-Cv2K6T9Y.js";import"./Text-3w39UNLL.js";import"./browser-D_Oin-6N.js";import"./EmulatedBoldText-D57I_Edz.js";import"./Modal-B1kIozjh.js";import"./ButtonView-Vc-lBIdn.js";import"./Flex-DWL773Qy.js";import"./useRef-C3TY9z6n.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CF0FAI_C.js";import"./getActionGroupSlot-C-FhbO6Z.js";import"./useFieldComponent-C92nVZms.js";import"./useControlledHostValueProps-Byhklanl.js";import"./FieldDescription-ByrQyhzl.js";import"./TextField-Bbc_VGXT.js";import"./FieldError-CB3_Y2qo.js";import"./Form-Bm3_NoD-.js";import"./Group-DFA2OkWU.js";import"./Input-b7EgChKn.js";import"./useTextField-BNdYQUXF.js";import"./useFormReset-BNYkLVEo.js";import"./useFormValidation-ofgJ0bTW.js";import"./AlertText-DLrJVcTW.js";import"./AlertIcon-DR4HtAzR.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Qr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const i=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),s=j();return r.jsx(l,{form:e,onSubmit:i,children:r.jsxs(g,{children:[r.jsx(s,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:i=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:i=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
