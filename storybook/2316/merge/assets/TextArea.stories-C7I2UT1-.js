import{r as F,j as r}from"./iframe-Cq8OhOqi.js";import{a as p,u as d,F as l,R as h,S as x,t as j}from"./ResetButton-e0wuYo_a.js";import{L as o}from"./Label-D-4zWGkt.js";import{B as c}from"./Button-BU-3gGXz.js";import{S as g}from"./Section-CsWsO61m.js";import{A as b}from"./ActionGroup-DpnZ5B3u.js";import{s as u}from"./Action-CjFX3pKp.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-ClzBr29m.js";import{F as S}from"./FieldError-2IpGOPbh.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-fC-Lgr30.js";import"./flowComponent-BPlAJrQX.js";import"./index-CDojQULy.js";import"./clsx-B-dksMZM.js";import"./index-CtMt1etx.js";import"./useLocalizedStringFormatter-B4BWJZRT.js";import"./context-EUTE_30t.js";import"./useRef-By8gWJdj.js";import"./utils-Bubk6yJw.js";import"./ButtonView-D9mwnSmq.js";import"./browser-D1jWek88.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BIWw7tEO.js";import"./Hidden-BxQeKZxe.js";import"./IconWarning-D6WB6H32.js";import"./remote-D-3bgxwF.js";import"./Text-CeV8P7pg.js";import"./EmulatedBoldText-CaDCAcie.js";import"./Text-BrptySpj.js";import"./LoadingSpinner-DSK_LMeC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-RahnnKar.js";import"./ProgressBar-pI249SR8.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Ddb4-Ews.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ChoIOqc4.js";import"./useFocus-hSjeZcP9.js";import"./useFocusRing-C66f8wZh.js";import"./useFocusable-Cka2f_Hf.js";import"./ContextMenuSection-C22Hcd-O.js";import"./Dialog-BglVjZuh.js";import"./RSPContexts-CKy-IICl.js";import"./OverlayArrow-CUm_HcTA.js";import"./useControlledState-DRmDoHXV.js";import"./Collection-BDonS7tS.js";import"./CollectionBuilder-D61kQYAv.js";import"./SelectionIndicator-LHAUO8nn.js";import"./Separator-PjONMOza.js";import"./SelectionManager-CJM9qnyd.js";import"./useEvent-BLNYXLIo.js";import"./useCollator-BMatrljN.js";import"./FocusScope-B5Hy3UxH.js";import"./VisuallyHidden-CN_7F8uI.js";import"./getActionGroupSlot-E0a2MdOz.js";import"./useStatic-Dv08VHAH.js";import"./context-DR72ScyD.js";import"./useFieldComponent-BYb5VnRy.js";import"./useControlledHostValueProps-CZhQ_qJq.js";import"./FieldDescription-CU8MDP5d.js";import"./TextField-DBFGOmkp.js";import"./FieldError-BGnsbaLE.js";import"./Form-B1CYZolU.js";import"./Group-CJEr304M.js";import"./Input-DDTw6Vbr.js";import"./useTextField-B9xagunm.js";import"./useFormReset-B4zM24P8.js";import"./useFormValidation-DYnqTuxD.js";import"./AlertText-aZpP8wGh.js";import"./AlertIcon-4JwX6npd.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Gr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
