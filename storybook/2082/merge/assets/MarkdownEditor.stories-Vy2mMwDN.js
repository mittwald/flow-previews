import{j as r}from"./iframe-D_6zdLny.js";import{a as e,u as s,F as n,t as h}from"./Form-CRAgCDt6.js";import{L as p}from"./Label-DYStaM4r.js";import{B as m}from"./Button-Hd0_GbPh.js";import{S as x}from"./Section-BOMWvKE6.js";import{A as f}from"./ActionGroup-DJbcBDj6.js";import{s as a}from"./Action-CDIAK01E.js";import{M as u}from"./MarkdownEditor-BeiHAemS.js";import"./index-nuYtCEEu.js";import"./dynamic-fYYLqg_-.js";import"./flowComponent-OxdpfLz0.js";import"./index-BGrQFvII.js";import"./clsx-B-dksMZM.js";import"./index-CT6ZSgMj.js";import"./FieldError-ojCue57q.js";import"./IconWarning-L8yPVfI5.js";import"./FieldError-DAmKGBgj.js";import"./utils-PQD-Pczy.js";import"./Text-YMXmaajA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLocalizedStringFormatter-D5MFHXmv.js";import"./context-BMSZp_sq.js";import"./browser-D7xr6uHh.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-iDSBX_9z.js";import"./Hidden-BN9nl5w0.js";import"./Text-BucMQu3s.js";import"./EmulatedBoldText-BmP07Dnx.js";import"./LoadingSpinner-Ca7TZ2j1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dk-D3x3z.js";import"./ProgressBar-DN3pMQzV.js";import"./useLabel-BujF7oZS.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-HrT7PLB3.js";import"./useFocus-D07R-Di8.js";import"./useFocusRing-CwU_FKgG.js";import"./useFocusable-pGYT2QRf.js";import"./ContextMenuSection-DVDgi3BO.js";import"./Dialog-RcAnAvxk.js";import"./RSPContexts-0i8aci_3.js";import"./OverlayArrow-vA-0UH51.js";import"./useControlledState-G8Ia7XKM.js";import"./Collection-ChPbS13-.js";import"./CollectionBuilder-C8yRBwY3.js";import"./SelectionIndicator-aPzlcNCf.js";import"./Separator-CHFb939R.js";import"./SelectionManager-BR7WMr9Q.js";import"./useEvent-GLo2x5KR.js";import"./useCollator-NS9MLfPk.js";import"./FocusScope-DgQ0PiWF.js";import"./VisuallyHidden-NfEP0AbA.js";import"./getActionGroupSlot-qiCOl6fG.js";import"./useStatic-MV172PRo.js";import"./context-BfwnKq6d.js";import"./Markdown-BV6f0lwO.js";import"./CodeBlock-pqI_xJnq.js";import"./CopyButton-CdGSUHnu.js";import"./Tooltip-CBeddeiC.js";import"./ClearPropsContextView-BWtGAMVv.js";import"./react-children-utilities-CrsSGPVd.js";import"./Heading-DUx_7A94.js";import"./Heading-CDoCnjT3.js";import"./InlineCode-DNlglJMO.js";import"./Link-Bzdw9Y1F.js";import"./Separator-D49Rg_Py.js";import"./TextArea-B4SFXaFs.js";import"./TextFieldBase-D8-P3sbI.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BmjEGOaL.js";import"./TextField-DJdiP2AD.js";import"./Form-BEwxiqG9.js";import"./Group-DD12aKc0.js";import"./Input-DeyWgLjK.js";import"./useTextField-CgNiWdPW.js";import"./useFormReset-jO9kfZl0.js";import"./useFormValidation-B8Bdwi3p.js";import"./ReactAriaControlledValueFix-CrUxtzb_.js";import"./useManagedValue-B8yM6Auw.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,j=F("submit"),Nr={title:"Integrations/React Hook Form/MarkdownEditor",component:e,render:()=>{const t=async l=>{await a(5e3),j(l)},c=s({defaultValues:{user:""}}),d=h();return r.jsx(n,{form:c,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(d,{name:"user",children:r.jsx(u,{children:r.jsx(p,{children:"Message"})})}),r.jsx(f,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const t=s();return r.jsxs(n,{form:t,onSubmit:async()=>await a(2e3),children:[r.jsx(e,{name:"text",rules:{required:!0},children:r.jsx(u,{children:r.jsx(p,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const Ur=["Default","WithFocusAndError"];export{o as Default,i as WithFocusAndError,Ur as __namedExportsOrder,Nr as default};
