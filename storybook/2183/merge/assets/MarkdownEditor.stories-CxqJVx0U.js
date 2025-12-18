import{j as r,r as x}from"./iframe-CgWIZppF.js";import{b as n,u as a,F as p,t as E}from"./Form-DaCB2sWj.js";import{L as s}from"./Label-8Ls1PMPy.js";import{R as u,S as c}from"./ResetButton-CovhuYqQ.js";import{B as l}from"./Button-B2z86NVg.js";import{S as j}from"./Section-DjNOq_vK.js";import{A as b}from"./ActionGroup-C2VcbEo2.js";import{s as d}from"./Action-ChgPhfJd.js";import{M as m}from"./MarkdownEditor-rMSK56y1.js";import{F as g}from"./FieldError-Dr7a0W2N.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BqY2cEs-.js";import"./flowComponent-n6uWZ_Yk.js";import"./index-DK9ZOg9l.js";import"./clsx-B-dksMZM.js";import"./index-D8vpbAff.js";import"./useLocalizedStringFormatter-6cAQP3rP.js";import"./context-DG5uy-SY.js";import"./browser-C8d3FCf4.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Bv5UhUCK.js";import"./utils-CqFMFg3g.js";import"./Hidden-td7Ld2aU.js";import"./useRef-o2mxGtfc.js";import"./IconWarning-CJrmQcXC.js";import"./remote-DVGHPh_8.js";import"./Text-B7pZrZSG.js";import"./EmulatedBoldText-iMswxomY.js";import"./Text-C3p6npBl.js";import"./LoadingSpinner-nmzfTpX1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C_sZyB84.js";import"./ProgressBar-CMi9IWJp.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DMBsm_3O.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CoCxa2CI.js";import"./useFocus-ClWOKyYK.js";import"./useFocusRing-pEE2Rwro.js";import"./useFocusable-Dp8viQw7.js";import"./ContextMenuSection-BUslXVLP.js";import"./Dialog-R-LZrA7I.js";import"./RSPContexts-CAKQ_-J3.js";import"./OverlayArrow-CNLX7-2g.js";import"./useControlledState-ii3oWk08.js";import"./Collection-DXGs2lV9.js";import"./CollectionBuilder-CoS6mLvq.js";import"./SelectionIndicator-xmkzz9vO.js";import"./Separator-pxi-Jkjv.js";import"./SelectionManager-BFnz3p05.js";import"./useEvent-C_2qUUzn.js";import"./useCollator-BRse2HwO.js";import"./FocusScope-CYlUipby.js";import"./VisuallyHidden-BDyUoc3v.js";import"./getActionGroupSlot-Bt3m4oNd.js";import"./useStatic-CFKrTcwu.js";import"./context-B2MrOWQ_.js";import"./Markdown-RIcy2KIL.js";import"./CodeBlock-CeaTe2LO.js";import"./CopyButton-tKwPJz96.js";import"./Tooltip-BSZoAPFZ.js";import"./react-children-utilities-DSPQ1wq0.js";import"./Heading-CfRE4X5D.js";import"./Heading-DOQpztPl.js";import"./InlineCode-Dwy-AzXD.js";import"./Link-HC91FLDg.js";import"./Separator-P0wq4yE3.js";import"./TextArea-DQqqtysL.js";import"./TextFieldBase-B_wFjxnE.js";import"./FieldDescription-k5usNxcY.js";import"./useFieldComponent-BZyKlvwh.js";import"./TextField-xfSP_rx8.js";import"./FieldError-xtpbDfud.js";import"./Form-BaHtPP4t.js";import"./Group-C5HUn3mH.js";import"./Input-jwk6Ly15.js";import"./useTextField-CrxwcKhu.js";import"./useFormReset-BEtHvHxA.js";import"./useFormValidation-DKxVhdCK.js";import"./useControlledHostValueProps-NWqFGbi9.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Xr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
