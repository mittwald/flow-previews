import{j as r,r as x}from"./iframe-DkT4d7Ot.js";import{a as n,u as a,F as p,t as E,R as u,S as c}from"./ResetButton-DTP7uuAe.js";import{L as s}from"./Label-BjxJIvYs.js";import{B as l}from"./Button-B3KXRm13.js";import{S as j}from"./Section-DxjMaQtB.js";import{A as b}from"./ActionGroup-DuCWyd6d.js";import{s as d}from"./Action-BKfs-erd.js";import{M as m}from"./MarkdownEditor-CkeMN3s0.js";import{F as g}from"./FieldError-BUQThHV3.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-AbOzqnd1.js";import"./flowComponent-CHs1XVIh.js";import"./index-BIhgoFLA.js";import"./clsx-B-dksMZM.js";import"./index-CA8YyeFM.js";import"./useLocalizedStringFormatter-D2x8dv8x.js";import"./context-BhNnKB4w.js";import"./useRef-CEFt68nY.js";import"./utils-up3lG_mb.js";import"./ButtonView-C05B8H85.js";import"./browser-CwBpRuL-.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Bfb68HPn.js";import"./Hidden-B_u69euq.js";import"./IconWarning-K6asu7lY.js";import"./remote-B8vjNxTl.js";import"./Text-CN56Aq7p.js";import"./EmulatedBoldText-Auc0aNAR.js";import"./Text-C_PPHbON.js";import"./LoadingSpinner-DZGxTG7I.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DKCc9Jm1.js";import"./ProgressBar-B_-OWJV1.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D_TjIfTk.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-loL-ySzv.js";import"./useFocus-Bn0bRGba.js";import"./useFocusRing-Bn6GFEBK.js";import"./useFocusable-oFwI_mrj.js";import"./ContextMenuSection-NCgBu2Na.js";import"./Dialog-DEf0gwvq.js";import"./RSPContexts-rkHdJ27o.js";import"./OverlayArrow-BYxGCDbr.js";import"./useControlledState-B7-cf8QC.js";import"./Collection-B11FEq3B.js";import"./CollectionBuilder-qtEk7bDG.js";import"./SelectionIndicator-B0xJhgeU.js";import"./Separator-DkPkeG73.js";import"./SelectionManager-6QPEfufX.js";import"./useEvent-DJRSX7W0.js";import"./useCollator-5WPUQbPc.js";import"./FocusScope-D5JuRjyj.js";import"./VisuallyHidden-BhWvypZu.js";import"./getActionGroupSlot-DACNE6Gp.js";import"./useStatic-DmZQ70we.js";import"./context-CpYzats6.js";import"./Markdown-D-05ICK7.js";import"./CodeBlock-C-9981d6.js";import"./CopyButton-BMf47pPt.js";import"./Tooltip-CJlwYS3o.js";import"./react-children-utilities-C907rqh9.js";import"./Heading-BxekkuWK.js";import"./Heading-DoshCNUZ.js";import"./InlineCode-CF_LSW3Y.js";import"./Link-s3E4jLq1.js";import"./Separator-HzIpP0WC.js";import"./TextArea-D9JE_YjK.js";import"./TextFieldBase-sbSUwYZQ.js";import"./FieldDescription-BHCuHDvd.js";import"./useFieldComponent-FHnXwL7q.js";import"./TextField-DKJJTMZH.js";import"./FieldError-BIqVWLlF.js";import"./Form-CweUcSb7.js";import"./Group-BOYY_LIu.js";import"./Input--3PeXBSI.js";import"./useTextField-Zbiu6rp8.js";import"./useFormReset-DMhhuJvy.js";import"./useFormValidation-UULz_Uq_.js";import"./useControlledHostValueProps-QgeK23Kf.js";import"./AlertText-n1a7254W.js";import"./AlertIcon-CGIGsQoy.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Zr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const $r=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,$r as __namedExportsOrder,Zr as default};
