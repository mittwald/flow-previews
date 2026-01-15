import{j as r,r as x}from"./iframe-pcvtdEGM.js";import{b as n,u as a,F as p,t as E}from"./Form-CK6uNh05.js";import{L as s}from"./Label-CRIab_7x.js";import{R as u,S as c}from"./ResetButton-BEZHYZMK.js";import{B as l}from"./Button-uyxj5lKX.js";import{S as j}from"./Section-D2AtZg_F.js";import{A as b}from"./ActionGroup-Cnw6IB4G.js";import{s as d}from"./Action-DJjvSFsd.js";import{M as m}from"./MarkdownEditor-CD61Cufm.js";import{F as g}from"./FieldError-Brj1PtAW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CjFFErYF.js";import"./flowComponent-BsMfbHRX.js";import"./index-qOUwp4oz.js";import"./clsx-B-dksMZM.js";import"./index-YznY-g7A.js";import"./useLocalizedStringFormatter-vFyNiPiP.js";import"./context-We2COa_S.js";import"./browser-DdUrC3oM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BTMeT-8z.js";import"./utils-fsWZtkeO.js";import"./Hidden-DReGI82W.js";import"./useRef-D_yDHzwE.js";import"./IconWarning-BUxMadyi.js";import"./remote-O2EONUZN.js";import"./Text-B9qmJggM.js";import"./EmulatedBoldText-BoMrbuLQ.js";import"./Text-DqkI-mFO.js";import"./LoadingSpinner-CRozfiA2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C7g9LfsB.js";import"./ProgressBar-BJtj52rd.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-D_iN71C8.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dv_EQiAe.js";import"./useFocus-B8eWYfgC.js";import"./useFocusRing-Zb0us3UP.js";import"./useFocusable-3pO1u96t.js";import"./ContextMenuSection-CnsRFJEn.js";import"./Dialog-DwYtEz4y.js";import"./RSPContexts-DZfuqB-R.js";import"./OverlayArrow-KSA73Rxs.js";import"./useControlledState-CJg030Qn.js";import"./Collection-CigrVSlS.js";import"./CollectionBuilder-Bto5ITGH.js";import"./SelectionIndicator-PrkU8Fpu.js";import"./Separator-CvwRIy8P.js";import"./SelectionManager-DshmmqnA.js";import"./useEvent-D-kKKOwz.js";import"./useCollator-BbVXsX3o.js";import"./FocusScope-Da3nqOUO.js";import"./VisuallyHidden-DxWu5xEc.js";import"./getActionGroupSlot-CPo9rPQE.js";import"./useStatic-BCDrLUdV.js";import"./context-rIsit77n.js";import"./Markdown-CQ2Erd0A.js";import"./CodeBlock-mg98559T.js";import"./CopyButton-CMbAJlH4.js";import"./Tooltip-By81RDgR.js";import"./react-children-utilities-CJQgD6VA.js";import"./Heading-BaRKstVM.js";import"./Heading-BBMu1zEG.js";import"./InlineCode-uLzMuQFD.js";import"./Link-F1t-GURJ.js";import"./Separator-DP-MjS7Z.js";import"./TextArea-CxGN-m3t.js";import"./TextFieldBase-DyEmPogL.js";import"./FieldDescription-Q7UMdTIm.js";import"./useFieldComponent-DX_YsVYS.js";import"./TextField-DqPYw359.js";import"./FieldError-DSNAXrm1.js";import"./Form-e5z3-mU_.js";import"./Group-DcVE6dEM.js";import"./Input-OfkHEYOp.js";import"./useTextField-Cc5HjTsD.js";import"./useFormReset-D7xZNI6Q.js";import"./useFormValidation-6fXj-s64.js";import"./useControlledHostValueProps-DDcvOf9E.js";import"./AlertText-B5gACMbu.js";import"./AlertIcon-CRV-RQ9G.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),$r={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <MarkdownEditor isInvalid>
          <Label>Message</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </MarkdownEditor>
      </Form>;
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
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
}`,...i.parameters?.docs?.source}}};const ro=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,ro as __namedExportsOrder,$r as default};
