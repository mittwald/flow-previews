import{j as r,r as F}from"./iframe-Eg8-wFCR.js";import{u as p,F as d}from"./Form-rEWg9Zdr.js";import{L as o}from"./Label-1lc8IvKU.js";import{B as c}from"./Button-bx6caw1c.js";import{S as j}from"./Section-CDeeOWJg.js";import{A as g}from"./ActionGroup-Bgv1jUgx.js";import{s as l}from"./Action-DV4LdD_S.js";import{d as b}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-C8SQfmQh.js";import{F as E}from"./FieldError-D_RdlzA4.js";import{F as u,t as S}from"./Field-uyOiJLAv.js";import{R as h}from"./ResetButton-Ct6ToO92.js";import{S as x}from"./SubmitButton-26fIdb4C.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CGaD3WbY.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-8KVNBPc4.js";import"./index-BbsXAeQz.js";import"./index-7P9p2RDg.js";import"./useLocalizedStringFormatter-DPRCgyho.js";import"./context-D30M243T.js";import"./Label-ayphvmky.js";import"./utils-DpUmHG9o.js";import"./Hidden-CPM5AGUb.js";import"./IconChevronDown-CB7etEhV.js";import"./remote-DyWsWGYm.js";import"./IconX-chnQqdsu.js";import"./IconCheck-CfWObqtZ.js";import"./Text-cFe2oWr9.js";import"./EmulatedBoldText-BvL31EIC.js";import"./Text-CVQZ1Ff_.js";import"./LoadingSpinner-l0sJlHn4.js";import"./ariaLive-JHqpu2fU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DrB4xT8J.js";import"./ProgressBar-BDU9deru.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CiQu3Cp5.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-eXiMCUEC.js";import"./useFocus-BombNWQr.js";import"./useFocusRing-DXLUoCe1.js";import"./useFocusable-CMi9d24v.js";import"./ContextMenuSection-DlfXeTZ7.js";import"./lib-90ocxLs-.js";import"./Dialog-BIruH5Sw.js";import"./RSPContexts-ajqDrbBU.js";import"./OverlayArrow-CDko6Bkl.js";import"./useControlledState-B4vwiKN6.js";import"./Collection-DZl0ZzX8.js";import"./CollectionBuilder-B_QcNnrf.js";import"./SelectionIndicator-LygQ_MIk.js";import"./Separator-DQMCvS0x.js";import"./SelectionManager-CFu8e8go.js";import"./useEvent-Cv81pFWJ.js";import"./useCollator-C-69fnSd.js";import"./FocusScope-BFrkZdE_.js";import"./VisuallyHidden-B_EYeIgM.js";import"./dynamic-DS6EBQ3r.js";import"./getActionGroupSlot-Dz1zi_Ez.js";import"./useStatic-BFryEnnL.js";import"./context-W5o617c2.js";import"./TextFieldBase-DNudVy7t.js";import"./FieldDescription-CAHlR0jD.js";import"./useFieldComponent-CePCnb_B.js";import"./TextField-D11bwwwF.js";import"./FieldError-BwCFTN-W.js";import"./Form-DkJGoq-X.js";import"./Group-BHVgCnMY.js";import"./Input-q1ZC5BdI.js";import"./useTextField-BX8mCjCv.js";import"./useFormReset-BOxw_xUS.js";import"./useFormValidation-D_eOv9kq.js";import"./useControlledHostValueProps-CMYSf_Mb.js";import"./IconDanger-Djal8A6_.js";import"./useRef-BMP_ah12.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Jr={title:"Integrations/React Hook Form/TextArea",component:u,render:()=>{const s=async f=>{await l(1500),y(f)},e=p({defaultValues:{message:"",messageDefaultValue:b.medium,messageRequired:"",messageMaxLength:""}}),i=S();return r.jsx(d,{form:e,onSubmit:s,children:r.jsxs(j,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(g,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=p();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(u,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(u,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
