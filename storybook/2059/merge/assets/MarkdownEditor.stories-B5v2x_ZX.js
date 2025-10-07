import{j as r}from"./iframe-LeKLDkYY.js";import{a as c,u as d,F as l,t as g}from"./Form-BYfGufMQ.js";import{L as h}from"./Label-_IGpUYiB.js";import{B as m}from"./Button-BbTRgfHO.js";import{S}from"./Section-BZBM6YrE.js";import{A as y}from"./ActionGroup-oo50HUzg.js";import{s as x}from"./Action-BR3Us8L0.js";import{M as f}from"./MarkdownEditor-DIPU4hAa.js";import"./index-Cun1SEai.js";import"./dynamic-BVwjsZ-m.js";import"./flowComponent-B87WjEVi.js";import"./index-Bs8MTrz8.js";import"./clsx-B-dksMZM.js";import"./index-uQv72qiR.js";import"./FieldError-TZ4s3Na9.js";import"./IconWarning-DddVt0_L.js";import"./FieldError-BDYKP3YZ.js";import"./utils-1n9saaJJ.js";import"./Text--oZ7LG8m.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-_ZYyHG1p.js";import"./context-wUV3k3U5.js";import"./browser-Cy-I7M8E.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-C1dMHZA4.js";import"./Hidden-CLJBhJup.js";import"./Text-tNO3jzOI.js";import"./EmulatedBoldText-CCtxrL0Y.js";import"./LoadingSpinner-DNtKok85.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CwiWPZWS.js";import"./ProgressBar-QdK-gkty.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-kmLZVcf4.js";import"./useFocus-DpQgRw3u.js";import"./useFocusRing-AniuyIk6.js";import"./useFocusable-BqRn9RY3.js";import"./ContextMenuSection-Dax-JE0X.js";import"./Dialog-Dqx_Qz1i.js";import"./RSPContexts-CUA3wiFH.js";import"./OverlayArrow-CWSdcIAn.js";import"./useControlledState-82f8Q_fD.js";import"./Collection-CO40bpB2.js";import"./CollectionBuilder-lBJI-o9S.js";import"./context-BPwzWA_h.js";import"./Separator-BBybTRPh.js";import"./SelectionManager-RiHQO5ol.js";import"./useEvent-CeBaYdiI.js";import"./useCollator-Bk1IX2EM.js";import"./FocusScope-tqJ5v6CU.js";import"./VisuallyHidden-25_VPX5X.js";import"./getActionGroupSlot-5hfWvZu9.js";import"./useStatic-BEy_HvO3.js";import"./context-DpN-jprx.js";import"./Markdown-DN0el3JW.js";import"./CodeBlock-DPQhSu90.js";import"./CopyButton-CKJdjwwJ.js";import"./Tooltip-CQmHh8GQ.js";import"./ClearPropsContextView-BstYBP5M.js";import"./react-children-utilities-DG79Zr3J.js";import"./Heading-DfULnXt6.js";import"./Heading-jlE5Mrug.js";import"./InlineCode-BnBrr23N.js";import"./Link-DEBjG1uK.js";import"./Separator-LTsQeklN.js";import"./TextArea--EG0mMtK.js";import"./TextFieldBase-lD2I63dC.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-7AeFbuXn.js";import"./TextField-BDgKTHd3.js";import"./Form-CCM4YJxo.js";import"./Group-CWnUrbV4.js";import"./Input-CErx5FmD.js";import"./useTextField--t-sUnTA.js";import"./useFormReset-CXz6fjib.js";import"./useFormValidation-B7bn9a_3.js";import"./ReactAriaControlledValueFix-D7JEkwnS.js";import"./useManagedValue-D3Thsd1M.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Jr={title:"Integrations/React Hook Form/MarkdownEditor",component:c,render:()=>{const t=async b=>{await x(5e3),E(b)},F=d({defaultValues:{user:""}}),j=g();return r.jsx(l,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(j,{name:"user",children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx(y,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const t=d();return r.jsxs(l,{form:t,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var e,s,n;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
