import{j as r,r as x}from"./iframe-B_TkxfTi.js";import{a as n,u as a,F as p,t as E,R as u,S as c}from"./ResetButton-Bdlat21c.js";import{L as s}from"./Label-B2z_KUki.js";import{B as l}from"./Button-RJdr80c6.js";import{S as j}from"./Section-DuAyIwjj.js";import{A as b}from"./ActionGroup-DrzSRVMS.js";import{s as d}from"./Action-BwMJcjOW.js";import{M as m}from"./MarkdownEditor-CP5EVKZt.js";import{F as g}from"./FieldError-BTHn5en7.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BusjqWiY.js";import"./flowComponent-BIniq_3P.js";import"./index-CrnjZTlk.js";import"./clsx-B-dksMZM.js";import"./index-B6XMVbfI.js";import"./useLocalizedStringFormatter-BrZnZPcM.js";import"./context-Bqo0meff.js";import"./useRef-D_3PHrag.js";import"./utils-CEh0pYpN.js";import"./ButtonView-RI0SDeqV.js";import"./browser-CLjLvoWS.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CQzZBBgV.js";import"./Hidden-B4qu7a2v.js";import"./IconWarning-C-Vc31bm.js";import"./remote-BarzyRQ7.js";import"./Text-DZTN4U6B.js";import"./EmulatedBoldText-9YPP8018.js";import"./Text-CBbNcQAF.js";import"./LoadingSpinner-CjHOYBjr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-n3CPGMPO.js";import"./ProgressBar-DY5wp8p-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D2pyCI0i.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DqvJUCRP.js";import"./useFocus-CWYeHEaO.js";import"./useFocusRing-Bb1Hz9wK.js";import"./useFocusable-DUuU0sbS.js";import"./ContextMenuSection-DayPbCkQ.js";import"./Dialog-ChZYysky.js";import"./RSPContexts-CP1vSDTy.js";import"./OverlayArrow-DmLbnMba.js";import"./useControlledState-CYdArkzJ.js";import"./Collection-DsLwUV-E.js";import"./CollectionBuilder-De4-ApJw.js";import"./SelectionIndicator-SPKWDPFJ.js";import"./Separator-Ck_PPi-8.js";import"./SelectionManager-CXzqm88-.js";import"./useEvent-CBTrASFt.js";import"./useCollator-Dzxw0xLX.js";import"./FocusScope-BxLI0wxf.js";import"./VisuallyHidden-BGokW8gm.js";import"./getActionGroupSlot-DtLKsNou.js";import"./useStatic-cRv7_xgS.js";import"./context-D9DgwULu.js";import"./Markdown-fozJgWWk.js";import"./CodeBlock-Dy0tlq1g.js";import"./CopyButton-DUBSuGqO.js";import"./Tooltip-DXnPph1_.js";import"./react-children-utilities-BaJh6dYt.js";import"./Heading-DO4971VL.js";import"./Heading-_1YYOm-_.js";import"./InlineCode-DNavAr3K.js";import"./Link-B7YQTEu4.js";import"./Separator-CNQWV2PY.js";import"./TextArea-DXD24bw5.js";import"./TextFieldBase-CMQg_soB.js";import"./FieldDescription-w32F_sTG.js";import"./useFieldComponent-C57DTYPz.js";import"./TextField-8qmnCrOw.js";import"./FieldError-CJvsl-v5.js";import"./Form-v3SuS94t.js";import"./Group-C-wWhNg_.js";import"./Input-BZn5pHU1.js";import"./useTextField-DhP7ZCBD.js";import"./useFormReset-BlUfWbi8.js";import"./useFormValidation-CPzq_YrX.js";import"./useControlledHostValueProps-DLOhfg72.js";import"./AlertText-DZAkh8GI.js";import"./AlertIcon-DJdpqIO-.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Zr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
