import{j as r}from"./iframe-Dmf5T25c.js";import{a as c,u as d,F as l,t as g}from"./Form-m_PW291X.js";import{L as h}from"./Label-CBoBMaMu.js";import{B as m}from"./Button-DJAJQ6nX.js";import{S}from"./Section-CuethHEJ.js";import{A as y}from"./ActionGroup-L54X6gLb.js";import{s as x}from"./Action-7bo_XniG.js";import{M as f}from"./MarkdownEditor-BIpcNptg.js";import"./index-Cun1SEai.js";import"./dynamic-Do2mwXEo.js";import"./flowComponent-CPeLqOpb.js";import"./index-DqWAPupW.js";import"./clsx-B-dksMZM.js";import"./index-C0-6kTd0.js";import"./FieldError-BrbRFqe2.js";import"./IconWarning-1UlzAmnA.js";import"./FieldError-osDHr7AF.js";import"./utils-DsML-bt_.js";import"./Text-DgEV6luH.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BKpY3AP6.js";import"./context-CfglF3Ge.js";import"./browser-DrFxiFmb.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-D3KFpetT.js";import"./Hidden-ixkSnYSe.js";import"./Text-DLrkajvz.js";import"./EmulatedBoldText-B4ifPFjU.js";import"./LoadingSpinner-CneC6UV3.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button--dPgG3q3.js";import"./ProgressBar-DfDGPnCO.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BaxinNTr.js";import"./useFocus-DeIDhTP5.js";import"./useFocusRing-DUSzUYSL.js";import"./useFocusable-Cm1AomQc.js";import"./ContextMenuSection-DC2rWjKA.js";import"./Dialog-BPlr3UWC.js";import"./RSPContexts-Bbwd3bcw.js";import"./OverlayArrow-FAQ6eOiA.js";import"./useControlledState-ncLEgmHX.js";import"./Collection-D0Z3i_1t.js";import"./CollectionBuilder-gvxExH9K.js";import"./context-BUTi_CwL.js";import"./Separator-BJYdsHoh.js";import"./SelectionManager-2dfHW5bj.js";import"./useEvent-DYLx6Izz.js";import"./useCollator-BMcltKGA.js";import"./FocusScope-XGh4Ynry.js";import"./VisuallyHidden-CtSvbpyT.js";import"./getActionGroupSlot-CsRvNk5a.js";import"./useStatic-B7bUROdd.js";import"./context-DfHcYJaf.js";import"./Markdown-BanTGgiB.js";import"./CodeBlock-BJzbkjVJ.js";import"./CopyButton-BSeoYwao.js";import"./Tooltip-BvA2rESJ.js";import"./ClearPropsContextView-5sw7kvOL.js";import"./react-children-utilities-CzJxYjIH.js";import"./Heading-CNHdE3DG.js";import"./Heading-C9XhdvxD.js";import"./InlineCode-b4mV08_5.js";import"./Link-DyuGByyd.js";import"./Separator-ccG1DqID.js";import"./TextArea-GtbErJKf.js";import"./TextFieldBase-B3nf3yOl.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BsTUsqd7.js";import"./TextField-B4mrJcnB.js";import"./Form-CioSAe3u.js";import"./Group-C7lBiOpp.js";import"./Input-CEe4Geo-.js";import"./useTextField-CxMmeXoO.js";import"./useFormReset-BQs2ByJh.js";import"./useFormValidation-BlVKI6aj.js";import"./ReactAriaControlledValueFix-B1bEAAAe.js";import"./useManagedValue-CRe6S7oq.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Jr={title:"Integrations/React Hook Form/MarkdownEditor",component:c,render:()=>{const t=async b=>{await x(5e3),E(b)},F=d({defaultValues:{user:""}}),j=g();return r.jsx(l,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(j,{name:"user",children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx(y,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const t=d();return r.jsxs(l,{form:t,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var e,s,n;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
