import{j as r,r as x}from"./iframe-DB4UlQ_F.js";import{b as n,u as a,F as p,t as E}from"./Form-CprAAj6n.js";import{L as s}from"./Label-D60b9GFw.js";import{R as u,S as c}from"./ResetButton-Cbtj9u5S.js";import{B as l}from"./Button-DYIAULzM.js";import{S as j}from"./Section-CwTyfRBn.js";import{A as b}from"./ActionGroup-DYVJBbzZ.js";import{s as d}from"./Action-D44Jy6S7.js";import{M as m}from"./MarkdownEditor-C762jr5I.js";import{F as g}from"./FieldError-7mdFLW8I.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CewJ3DJw.js";import"./flowComponent-BL-3GjRu.js";import"./index-DpDRS9kh.js";import"./clsx-B-dksMZM.js";import"./index-BSqJ1-JW.js";import"./useLocalizedStringFormatter-DsWJPkCN.js";import"./context-BeH9c2u_.js";import"./browser-CMEWPYW9.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CzwPVXKy.js";import"./utils-B6Q0cVYp.js";import"./Hidden-BofTzQhQ.js";import"./useRef-D2qb2cPS.js";import"./IconWarning-D6sMwWyV.js";import"./remote-DOdcl-CB.js";import"./Text-CvhufvNl.js";import"./EmulatedBoldText-1LQNM6BM.js";import"./Text-De_rG2Pz.js";import"./LoadingSpinner-BUzKTNdb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-L-mN_PGj.js";import"./ProgressBar-BtSLHqLj.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-bn4O9qyi.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CDGll4uD.js";import"./useFocus-mLt6Jcka.js";import"./useFocusRing-BToYuWbv.js";import"./useFocusable-BfPamkyW.js";import"./ContextMenuSection-BHyvjJMz.js";import"./Dialog-B4nT46da.js";import"./RSPContexts-Br1rngEm.js";import"./OverlayArrow-BH8gVRz-.js";import"./useControlledState-2lUl0kro.js";import"./Collection-e6TIFm8x.js";import"./CollectionBuilder-DlEUUA4I.js";import"./SelectionIndicator-D87wG6Zb.js";import"./Separator-Bcm53B3D.js";import"./SelectionManager-Ber2ZhG4.js";import"./useEvent-C6FAavwc.js";import"./useCollator-BdTHcpkR.js";import"./FocusScope-D57vEPf5.js";import"./VisuallyHidden-C3r-i5Fv.js";import"./getActionGroupSlot-BJEuMMsc.js";import"./useStatic-BsW-2tBw.js";import"./context-b0VtR6po.js";import"./Markdown-anHvlI85.js";import"./CodeBlock-C4nItNCG.js";import"./CopyButton-DWm7MltM.js";import"./Tooltip-BuJGYuYE.js";import"./react-children-utilities-DAHI086P.js";import"./Heading-B71UuISa.js";import"./Heading-BIcTvsYt.js";import"./InlineCode-DVI4ns1W.js";import"./Link-2paQW1ed.js";import"./Separator-CYMgSuzA.js";import"./TextArea-D-cLHmqq.js";import"./TextFieldBase-BRexiZcT.js";import"./FieldDescription-DVjEBj0_.js";import"./useFieldComponent-Dp69OqtL.js";import"./TextField-D0kY72jS.js";import"./FieldError-CegzLELq.js";import"./Form-PeScrtUS.js";import"./Group-DyD1FYug.js";import"./Input-DgHFnA4a.js";import"./useTextField-BlrPE0Ip.js";import"./useFormReset-zmgaZOpR.js";import"./useFormValidation-Bt0uBrAk.js";import"./useControlledHostValueProps-DsyFnxnI.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Xr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
