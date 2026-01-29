import{j as r,r as F}from"./iframe-DzPnzOIh.js";import{a as p,u as d,F as l,t as j,R as h,S as x}from"./ResetButton-DLA2D0J0.js";import{L as o}from"./Label-Caopyz4i.js";import{B as c}from"./Button-B0xxYjKh.js";import{S as g}from"./Section-DjVn5x2V.js";import{A as b}from"./ActionGroup-BW-DIp4M.js";import{s as u}from"./Action-D4qqw_zO.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-BIyjYSSU.js";import{F as S}from"./FieldError-CliUFFQL.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CR1FGrpS.js";import"./flowComponent-DtgvO3oD.js";import"./index-DmmYMLHe.js";import"./clsx-B-dksMZM.js";import"./index-nNa6hI3H.js";import"./useLocalizedStringFormatter-BZ1QP-fV.js";import"./context-D5QDMciq.js";import"./useRef-DTc68hRI.js";import"./utils-DdPADezN.js";import"./ButtonView-DAqv122X.js";import"./browser-DO1on-Lg.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BA4yL5_I.js";import"./Hidden-D_8gXEej.js";import"./IconWarning-Dnclh3SV.js";import"./remote-Df33k4AK.js";import"./Text-CgXXsRbz.js";import"./EmulatedBoldText-Dcz9uFEQ.js";import"./Text-CKGruhzq.js";import"./LoadingSpinner-3EdJH7-V.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CCOKLUK2.js";import"./ProgressBar-BDc0eUXF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DAdMc5BC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-COgw0Owx.js";import"./useFocus-lCD3lNhC.js";import"./useFocusRing-h77ik7V4.js";import"./useFocusable-DMy60j_I.js";import"./ContextMenuSection-DfF2Gqpp.js";import"./Dialog-BkygjXx5.js";import"./RSPContexts-0XiJN6Nh.js";import"./OverlayArrow--imbHB5-.js";import"./useControlledState-C5NVaprX.js";import"./Collection-CALheanL.js";import"./CollectionBuilder-Bu5TLfEc.js";import"./SelectionIndicator-CD0MdUzw.js";import"./Separator-Bg_k8EGm.js";import"./SelectionManager-CchLMxAP.js";import"./useEvent-C5n8Jw-a.js";import"./useCollator-BX-7yLTW.js";import"./FocusScope-Cit_E5zj.js";import"./VisuallyHidden-C2tKF7nl.js";import"./getActionGroupSlot-BseyWuGA.js";import"./useStatic-B5sjyhg8.js";import"./context-CvuQDK5p.js";import"./TextFieldBase-SDReIfF5.js";import"./FieldDescription-CZk1e185.js";import"./useFieldComponent-DttoHSbm.js";import"./TextField-ChrDpqIO.js";import"./FieldError-BLx5YP6h.js";import"./Form-iisH2EsU.js";import"./Group-BGA5trRo.js";import"./Input-CP7U2NGu.js";import"./useTextField-DtXvs3Hz.js";import"./useFormReset-D5TocNhH.js";import"./useFormValidation-DrH-jwNK.js";import"./useControlledHostValueProps-HyXthDFl.js";import"./AlertText-DawifhT6.js";import"./AlertIcon-BAMux0CS.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Hr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Kr as __namedExportsOrder,Hr as default};
