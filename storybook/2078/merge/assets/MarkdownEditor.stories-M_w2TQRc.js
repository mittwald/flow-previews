import{j as r}from"./iframe-DE21mSiE.js";import{a as c,u as d,F as l,t as g}from"./Form-CUo_fzaz.js";import{L as h}from"./Label-D6jpl-Ee.js";import{B as m}from"./Button-DdcjdJkJ.js";import{S}from"./Section-CoWAiCo1.js";import{A as y}from"./ActionGroup-CNc43KOX.js";import{s as x}from"./Action-CR9ahmpz.js";import{M as f}from"./MarkdownEditor-jM03-Ytw.js";import"./index-Cun1SEai.js";import"./dynamic-BIsQA2QQ.js";import"./flowComponent-CyATdwQg.js";import"./index-DVBAlOxg.js";import"./clsx-B-dksMZM.js";import"./index-ssZEpx-s.js";import"./FieldError-B59qoisB.js";import"./IconWarning-iWnf9NI2.js";import"./FieldError-Bu_r-4G9.js";import"./utils-DqYJbNsI.js";import"./Text-CutbQTmF.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-Bn_AwxOr.js";import"./context-Br9w7yZh.js";import"./browser-BjU0tWvf.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-C-oTvvPr.js";import"./Hidden-C98sYe40.js";import"./Text-DOdVur7X.js";import"./EmulatedBoldText-BOQZ24Hi.js";import"./LoadingSpinner-CObpOXYq.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CbR0WrFZ.js";import"./ProgressBar-ByrF5SpY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dv9orCJu.js";import"./useFocus-CRZNnr1R.js";import"./useFocusRing-pH6mNL0D.js";import"./useFocusable-AVRnrAkJ.js";import"./ContextMenuSection-CuNeUF_7.js";import"./Dialog-CqjG3TV5.js";import"./RSPContexts-BtJsn2IM.js";import"./OverlayArrow-D4IsQ9Uw.js";import"./useControlledState-Bml9wY_-.js";import"./Collection-CtBmofMr.js";import"./CollectionBuilder-OPUz1gD2.js";import"./SelectionIndicator-Daa_H3OJ.js";import"./Separator-BLbs5DM2.js";import"./SelectionManager-RcCyJikL.js";import"./useEvent-9zXlgdze.js";import"./useCollator-BKBsR6-a.js";import"./FocusScope-1KdfzaZh.js";import"./VisuallyHidden-pa5WzvsI.js";import"./getActionGroupSlot-CKs13wvK.js";import"./useStatic-Cbl6RHQu.js";import"./context-6jqGW8Yr.js";import"./Markdown-BfOUUKaA.js";import"./CodeBlock-DfasCd7g.js";import"./CopyButton-DQf3Uasf.js";import"./Tooltip-K2TVHaJS.js";import"./ClearPropsContextView-DDfoOlOf.js";import"./react-children-utilities-Cpp0uuIQ.js";import"./Heading-Ztm_X6Xu.js";import"./Heading-b-A4WO83.js";import"./InlineCode-DMAoFhJU.js";import"./Link-BcBqYxaR.js";import"./Separator-CryR9zYS.js";import"./TextArea-Bh6VhgOe.js";import"./TextFieldBase-D7xRTsF_.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DfXOpk0t.js";import"./TextField-DQGanVao.js";import"./Form-C4-mbjGM.js";import"./Group-Xk6UpG4z.js";import"./Input-C920aKTw.js";import"./useTextField-BNBoF8qF.js";import"./useFormReset-BcRO7Ruj.js";import"./useFormValidation-B0vSubJ3.js";import"./ReactAriaControlledValueFix-CGiqkN0v.js";import"./useManagedValue-DoHR4Jg1.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Jr={title:"Integrations/React Hook Form/MarkdownEditor",component:c,render:()=>{const t=async b=>{await x(5e3),E(b)},F=d({defaultValues:{user:""}}),j=g();return r.jsx(l,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(j,{name:"user",children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx(y,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const t=d();return r.jsxs(l,{form:t,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var e,s,n;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
