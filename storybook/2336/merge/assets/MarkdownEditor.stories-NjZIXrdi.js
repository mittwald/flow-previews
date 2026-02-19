import{r as x,j as r}from"./iframe-je41IZNf.js";import{a as n,u as p,F as a,R as u,S as c,t as E}from"./ResetButton-C7YuCwWl.js";import{L as m}from"./Label--ERuqbAg.js";import{B as l}from"./Button-CKqcv5FO.js";import{S as j}from"./Section-DOpZVh4G.js";import{A as b}from"./ActionGroup-rchol9jY.js";import{s as d}from"./ActionBatch-ChKsIRTP.js";import{M as s}from"./MarkdownEditor-CEBtS52T.js";import{F as g}from"./FieldError-BATB6zBo.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BrtagzWP.js";import"./flowComponent-Byg_Wdja.js";import"./index-3zpYFWyF.js";import"./clsx-B-dksMZM.js";import"./index-DBepN-OD.js";import"./useLocalizedStringFormatter-DHff-c09.js";import"./context-533DYF-u.js";import"./ActionGroupView-CNDRVPWd.js";import"./Content-CI6m-d_y.js";import"./Heading-Bj867S3k.js";import"./Heading-0rwlvdDR.js";import"./RSPContexts-u6z1ubPU.js";import"./utils-Q4wA2zXG.js";import"./Text-BC-RZ7k4.js";import"./browser-Drae5Vqb.js";import"./EmulatedBoldText-BdEDO8G6.js";import"./Text-DidYm6nP.js";import"./Modal-CPZv7ujk.js";import"./useOverlayController-BUOVgKeB.js";import"./useStatic-DB-qeJ4V.js";import"./Overlay-B0VzEzJb.js";import"./OverlayContextProvider-hjkTcZbT.js";import"./LoadingSpinner-DltTQrQc.js";import"./IconWarning-Bnxn-M7Y.js";import"./remote-CVh73cse.js";import"./Dialog-BA8GDzQ6.js";import"./Button-Bv1GWar0.js";import"./ProgressBar-DuWvfVrm.js";import"./Label-BNl2hTKa.js";import"./Hidden-CA0I_dPB.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-_SRIQyLy.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BcrJWT2n.js";import"./useFocus-YEPBe3OK.js";import"./useFocusRing-DOADtTnm.js";import"./useFocusable-Ldg9iOHo.js";import"./OverlayArrow-7pXV33mr.js";import"./useControlledState-Behjjcy6.js";import"./Collection-fxANXXK9.js";import"./CollectionBuilder-BswnoYzM.js";import"./SelectionIndicator-DrqbtAz1.js";import"./Separator-CRKtuO5D.js";import"./SelectionManager-DarNfpx7.js";import"./useEvent-BrmATdRq.js";import"./useCollator-5dtfDRbY.js";import"./FocusScope-ClZvkh4F.js";import"./VisuallyHidden-DTzU9Ikw.js";import"./ButtonView-Dl5Y4ZWm.js";import"./Flex--JtxxRJ0.js";import"./useRef-DwDjpRrm.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-D3nZCtKg.js";import"./getActionGroupSlot-RUbe0sa1.js";import"./Markdown-DviRVHDG.js";import"./CodeBlock-Cs7U_wgN.js";import"./CopyButton-CnUQf53z.js";import"./Tooltip-Bh_sgfX0.js";import"./react-children-utilities-B0HW_H03.js";import"./InlineCode-RXwXgQ6-.js";import"./Link-D9QkJa0E.js";import"./Separator-B3Q0YIa0.js";import"./TextArea-DIN2LZGu.js";import"./useFieldComponent-b8-F_AVa.js";import"./useControlledHostValueProps-BR1UJYKe.js";import"./FieldDescription-epssNn7d.js";import"./TextField-D33Qq-YD.js";import"./FieldError-MnbTPawu.js";import"./Form-D8X7JUv8.js";import"./Group-D7ryvxcR.js";import"./Input-U4HmeWQK.js";import"./useTextField-D9CsxYKW.js";import"./useFormReset-BAaFkhxA.js";import"./useFormValidation-DLIHXRbT.js";import"./AlertText-B3BG9g2L.js";import"./AlertIcon-g4_I2qja.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),eo={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=p({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const io=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,io as __namedExportsOrder,eo as default};
