import{r as F,j as r}from"./iframe-uf-MKLgq.js";import{a as p,u as d,F as l,R as h,S as x,t as j}from"./ResetButton-Cec_c7cn.js";import{L as o}from"./Label-CnhLMz3J.js";import{B as c}from"./Button-mfbo0dyR.js";import{S as g}from"./Section-DfvDcT38.js";import{A as b}from"./ActionGroup-Calx21Na.js";import{s as u}from"./ActionBatch-zb8alXiJ.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-BlsdjFWr.js";import{F as S}from"./FieldError-DuL8_ys6.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-fPlHFb8V.js";import"./flowComponent-CR1nBuBt.js";import"./index-B7owIbBs.js";import"./clsx-B-dksMZM.js";import"./index-CTOYeHPx.js";import"./useLocalizedStringFormatter-C1Nv7YrM.js";import"./context-DqOu6PGu.js";import"./ActionGroupView-D-VX7mUq.js";import"./Content-BG_xlhhi.js";import"./Heading-8mXYZ3pK.js";import"./Heading-C369PV89.js";import"./RSPContexts-nECt4NUH.js";import"./utils-DZ6AixXo.js";import"./Text-CwTgn3ty.js";import"./browser-CS6yJLU7.js";import"./EmulatedBoldText-BnnwN73K.js";import"./Text-DCWOF5Yr.js";import"./Modal-sJUQoHJz.js";import"./useOverlayController-CR9kocR-.js";import"./useStatic-CS2X9Zkf.js";import"./Overlay-B_vOLFC2.js";import"./OverlayContextProvider-D-yAmZxE.js";import"./LoadingSpinner-CRqWvqjj.js";import"./IconWarning-BGOvrRAj.js";import"./remote-7esdTMhw.js";import"./Dialog-CWJBmICf.js";import"./Button-Dm2G6Gzh.js";import"./ProgressBar-eIkI-azg.js";import"./Label-Cdykpluf.js";import"./Hidden-lq-QDLcj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CdaYwKww.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BdqiHW2G.js";import"./useFocus-BMvnG0Qw.js";import"./useFocusRing-190z59Bo.js";import"./useFocusable-C3B5EmJ3.js";import"./OverlayArrow-Cm4mIARd.js";import"./useControlledState-BuF4aZkb.js";import"./Collection-xojhNDd8.js";import"./CollectionBuilder-lmcmrTAc.js";import"./SelectionIndicator-DxP3RRah.js";import"./Separator-5pPigfCw.js";import"./SelectionManager-D4CiQoAv.js";import"./useEvent-B9v_LmSJ.js";import"./useCollator-BHzC2k5n.js";import"./FocusScope-1QvypY2n.js";import"./VisuallyHidden-CibrapRB.js";import"./ButtonView-D8n4Xnyv.js";import"./Flex-C_HgP_tu.js";import"./useRef-3qUKYuqY.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-HEPeHMf2.js";import"./getActionGroupSlot-BEjmNJ3B.js";import"./useFieldComponent-oiltg6td.js";import"./useControlledHostValueProps-CVNKjYkZ.js";import"./FieldDescription-Xe8FFH5r.js";import"./TextField-C1YIqqpg.js";import"./FieldError-hMdCLiLA.js";import"./Form-Clq2RMYH.js";import"./Group-DfUk4kcb.js";import"./Input-Da_fVGjz.js";import"./useTextField--0uHRALa.js";import"./useFormReset-D43--mAD.js";import"./useFormValidation-DWm9SC-U.js";import"./AlertText-CTyPJTrr.js";import"./AlertIcon-C9HYB2oh.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Qr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const i=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),s=j();return r.jsx(l,{form:e,onSubmit:i,children:r.jsxs(g,{children:[r.jsx(s,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:i=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:i=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
