import{j as r,r as x}from"./iframe-VTkEMv55.js";import{b as n,u as a,F as p,t as E}from"./Form-DYABidCX.js";import{L as s}from"./Label-DwQEy05E.js";import{R as u,S as c}from"./ResetButton-BQFORTG2.js";import{B as l}from"./Button-B9lvy9yg.js";import{S as j}from"./Section-DjOUR5LH.js";import{A as b}from"./ActionGroup-C1fdFreL.js";import{s as d}from"./Action-DV-QBt8x.js";import{M as m}from"./MarkdownEditor-7Tr6efTG.js";import{F as g}from"./FieldError-B1IV40_q.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BSd9oB0r.js";import"./flowComponent-D-PEtegy.js";import"./index-DtZzACyH.js";import"./clsx-B-dksMZM.js";import"./index-D_xlAiD1.js";import"./useLocalizedStringFormatter-CUJ-Z77y.js";import"./context-BVezW8pN.js";import"./browser-_Qir5MkB.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BRaJlgoE.js";import"./utils-DPKXOmt2.js";import"./Hidden-d-f11Ccs.js";import"./useRef-Da-vd52Y.js";import"./IconWarning-D408DR62.js";import"./remote-pRnbNSGs.js";import"./Text-DlbRcSah.js";import"./EmulatedBoldText-BYZc_oy6.js";import"./Text-DB2BTtqM.js";import"./LoadingSpinner-BWeGH-7c.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BKfoJr1S.js";import"./ProgressBar-6h4xV7_x.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C-geoXZs.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cb2XrqKT.js";import"./useFocus-JgmAf8eL.js";import"./useFocusRing-BeV8_2Yg.js";import"./useFocusable-CzgiUJAu.js";import"./ContextMenuSection-CWe96eWW.js";import"./Dialog-Qb8RaXBy.js";import"./RSPContexts-wdKGWz4J.js";import"./OverlayArrow-CyTNZBgT.js";import"./useControlledState-CxodNXny.js";import"./Collection-xr8-TVrR.js";import"./CollectionBuilder-DhJAnH_i.js";import"./SelectionIndicator-CYSMLMH7.js";import"./Separator-BE0n3_oB.js";import"./SelectionManager-G-GDhrqF.js";import"./useEvent-Cgy893y9.js";import"./useCollator-BSc2XrT4.js";import"./FocusScope-CTtHroqL.js";import"./VisuallyHidden-DjbItwE4.js";import"./getActionGroupSlot-Bve5nwK1.js";import"./useStatic-OVy-y77u.js";import"./context-CeKSAP77.js";import"./Markdown-CVmGjf5P.js";import"./CodeBlock-D3EEtG_e.js";import"./CopyButton-DWD4l6k8.js";import"./Tooltip-DiAmgknq.js";import"./react-children-utilities-39ckWr-3.js";import"./Heading-DR27KtWq.js";import"./Heading-DNyZLCgr.js";import"./InlineCode-CFiTbiZA.js";import"./Link-DkhtPTod.js";import"./Separator-oOeULqz2.js";import"./TextArea-BVMQ_7uy.js";import"./TextFieldBase-VkWldC8k.js";import"./FieldDescription-Ly1-BQrw.js";import"./useFieldComponent-CicShoBh.js";import"./TextField-4uISm1ZZ.js";import"./FieldError-CFdAmcbB.js";import"./Form-BAg9n-JE.js";import"./Group-CdGLrnc5.js";import"./Input-B9tYQbF3.js";import"./useTextField-DjgRalQs.js";import"./useFormReset-DRm0nHwN.js";import"./useFormValidation-CNiU2G-p.js";import"./useControlledHostValueProps-Bk08TKui.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Xr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Zr=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,Zr as __namedExportsOrder,Xr as default};
