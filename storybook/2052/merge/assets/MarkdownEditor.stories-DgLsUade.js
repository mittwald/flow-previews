import{j as r,r as y}from"./iframe-BojHUq_o.js";import{a,u as p,F as d,t as w}from"./Form-DiL5IjUK.js";import{L as m}from"./Label-DZ-kvQ_z.js";import{B as s}from"./Button-Dx72WFTb.js";import{S as B}from"./Section-DKmaai8j.js";import{A as k}from"./ActionGroup-htEV1_ZT.js";import{s as l}from"./Action-BzhIxFNp.js";import{M as n}from"./MarkdownEditor-CdrnesPr.js";import{F as L}from"./useFieldComponent-DC978Re4.js";import"./index-Cun1SEai.js";import"./flowComponent-T2-wi8uX.js";import"./index-BJZZiC-7.js";import"./clsx-B-dksMZM.js";import"./index-Byu2kyB2.js";import"./Text-HCLVlkvP.js";import"./browser-DnzQTrak.js";import"./EmulatedBoldText-B_edXnF6.js";import"./Text-BOOhOnJG.js";import"./utils-Gx6YrarE.js";import"./useLocalizedStringFormatter-69wcReOi.js";import"./context-BrPX2Q0J.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-kTT31z_U.js";import"./Hidden-ZJfagMAU.js";import"./IconWarning-CDe5PPLT.js";import"./LoadingSpinner-C6E-2u5d.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DcusG6ul.js";import"./ProgressBar-Ba8rhXoO.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B7zZe8uM.js";import"./useFocus-C9Jl_mjq.js";import"./useFocusRing-PQu2duny.js";import"./useFocusable-BokWW085.js";import"./ContextMenuSection-CjxVZXwg.js";import"./Dialog-MdAsc9jB.js";import"./RSPContexts-4pkCpc5X.js";import"./OverlayArrow-OKVkdbLV.js";import"./useControlledState-goB9hidZ.js";import"./Collection-BfuTuT0s.js";import"./CollectionBuilder-D8Vcy0X7.js";import"./SelectionIndicator-IBXNysdl.js";import"./Separator-B6WcJaDG.js";import"./SelectionManager-DxBzATix.js";import"./useEvent-DG1kacar.js";import"./useCollator-Chx17-X6.js";import"./FocusScope-YAVoTg22.js";import"./VisuallyHidden-BBfPbX8D.js";import"./dynamic-SDISKgE-.js";import"./getActionGroupSlot-D49HjIN5.js";import"./useStatic-CZJ_DwPf.js";import"./context-awqjHi2S.js";import"./Markdown-CCXX07XA.js";import"./CodeBlock-ZgLfGGlo.js";import"./CopyButton-DXe4Vpah.js";import"./Tooltip-IWtlSomy.js";import"./ClearPropsContextView-CWOgNtlO.js";import"./ClearPropsContext-CDRCLX7w.js";import"./react-children-utilities-M78AEMQD.js";import"./Heading-D97xV0XF.js";import"./Heading-CLxBTDIO.js";import"./InlineCode-CCMwrDmQ.js";import"./Link-YRoJ2f8n.js";import"./Separator-DspL2uzr.js";import"./TextArea-wZPq3ehr.js";import"./TextFieldBase-CsoMj4av.js";import"./FieldDescription-DQnyyCo1.js";import"./TextField-Bwv7dyz6.js";import"./Form-CWB6L6R3.js";import"./Group-D8Hf8MQ4.js";import"./Input-ldVtEAcy.js";import"./useTextField-RpbQmuLZ.js";import"./useFormReset-DOCiYQU_.js";import"./useFormValidation-Q_otrioy.js";import"./ReactAriaControlledValueFix-BGBOVb49.js";import"./useManagedValue-0HA7wLtu.js";const{action:O}=__STORYBOOK_MODULE_ACTIONS__,_=O("submit"),oo={title:"Integrations/React Hook Form/MarkdownEditor",component:a,render:()=>{const o=async S=>{await l(5e3),_(S)},g=p({defaultValues:{user:""}}),M=w();return r.jsx(d,{form:g,onSubmit:o,children:r.jsxs(B,{children:[r.jsx(M,{name:"user",children:r.jsx(n,{children:r.jsx(m,{children:"Message"})})}),r.jsx(k,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return y.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(m,{children:"Message"}),r.jsx(L,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(m,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};var u,c,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(f=(c=t.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var h,F,x;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(F=e.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var E,j,b;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(b=(j=i.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const to=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,to as __namedExportsOrder,oo as default};
