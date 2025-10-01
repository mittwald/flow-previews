import{j as r}from"./iframe-8Gn-cQAI.js";import{a as c,u as d,F as l,t as g}from"./Form-Drx3o-9i.js";import{L as h}from"./Label-BKQD2yp-.js";import{B as m}from"./Button-BYLyJZ8T.js";import{S}from"./Section-D-_npJws.js";import{A as y}from"./ActionGroup-DeqHAwBL.js";import{s as x}from"./Action-HGXjP-6z.js";import{M as f}from"./MarkdownEditor-t7uqFtCI.js";import"./index-Cun1SEai.js";import"./dynamic-rXbOiSCg.js";import"./flowComponent-DkmU8bZi.js";import"./index-AzFL6bUY.js";import"./clsx-B-dksMZM.js";import"./index-UEc6MpK_.js";import"./FieldError-C-zSllwf.js";import"./IconWarning-D4orWaCC.js";import"./FieldError-BP_wpITZ.js";import"./utils-GVjct8zS.js";import"./Text-YtT3E9ZO.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-Bkj0giXD.js";import"./context-BNiVp3am.js";import"./browser-BcQIid3c.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-BTym8jb9.js";import"./Hidden-ClnO7J5u.js";import"./Text-CaltWpnJ.js";import"./EmulatedBoldText-BFjU3iq0.js";import"./LoadingSpinner-DLXLBid4.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-3o-n2ltV.js";import"./ProgressBar-Cd_i9EHd.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ITUQCIPr.js";import"./useFocus-B0X0Lu9Z.js";import"./useFocusRing-CitWdiPC.js";import"./useFocusable-D0eqHiUC.js";import"./ContextMenuSection-BSmzwpDI.js";import"./Dialog-DaZvxqJC.js";import"./RSPContexts-BLLLZDxH.js";import"./OverlayArrow-t8YkI2AY.js";import"./useControlledState-CowCOuKH.js";import"./Collection-DWEguDCp.js";import"./CollectionBuilder-9Z-fAvba.js";import"./context-OwOTZ-QT.js";import"./Separator-Dm-csSJW.js";import"./SelectionManager-CsYJeMyB.js";import"./useEvent-CbQE1MrG.js";import"./useCollator-DlUVcb0E.js";import"./FocusScope-CFCh8ZEd.js";import"./VisuallyHidden-hAbnP3vK.js";import"./getActionGroupSlot-DshV_Wd3.js";import"./useStatic-D4LCMNvH.js";import"./context-BIaltrhp.js";import"./Markdown-DWtjA8qZ.js";import"./CodeBlock-BCBhKdMl.js";import"./CopyButton-xfaUTfmP.js";import"./Tooltip-pmWWtl2O.js";import"./ClearPropsContextView-CnCgZIgn.js";import"./react-children-utilities-BGYUETTG.js";import"./Heading-hkF7brSR.js";import"./Heading-CLQt8OMj.js";import"./InlineCode-EfX0Ucmk.js";import"./Link-5Km-wuq7.js";import"./Separator-DuLEWuHI.js";import"./TextArea-yHrt3Wv4.js";import"./TextFieldBase-C6vWj34E.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BfSaLbIT.js";import"./TextField-CGZRqELK.js";import"./Form-uqEItuxM.js";import"./Group-D6MDioP3.js";import"./Input-D8m2LMBm.js";import"./useTextField-CZZzsHWG.js";import"./useFormReset-EWszKDPA.js";import"./useFormValidation-CDT2yp15.js";import"./ReactAriaControlledValueFix-CTvHT95w.js";import"./useManagedValue-CV7g12Zq.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Jr={title:"Integrations/React Hook Form/MarkdownEditor",component:c,render:()=>{const t=async b=>{await x(5e3),E(b)},F=d({defaultValues:{user:""}}),j=g();return r.jsx(l,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(j,{name:"user",children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx(y,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const t=d();return r.jsxs(l,{form:t,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var e,s,n;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(a=i.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const Qr=["Default","WithFocusAndError"];export{o as Default,i as WithFocusAndError,Qr as __namedExportsOrder,Jr as default};
