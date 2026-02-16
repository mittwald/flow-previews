import{r as x,j as r}from"./iframe-CdHyQgwh.js";import{a as n,u as p,F as a,R as u,S as c,t as E}from"./ResetButton-DIOtYJtW.js";import{L as m}from"./Label-C70YwB90.js";import{B as l}from"./Button-B83uT_W5.js";import{S as j}from"./Section-ZayZowyU.js";import{A as b}from"./ActionGroup-CFPYc31d.js";import{s as d}from"./ActionBatch-DZLzYfk2.js";import{M as s}from"./MarkdownEditor-C-T1Jeug.js";import{F as g}from"./FieldError-BmlEdUcT.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CJo41kua.js";import"./flowComponent-C7-oBhxO.js";import"./index-C1bimC6f.js";import"./clsx-B-dksMZM.js";import"./index--KyPRnlY.js";import"./useLocalizedStringFormatter-UNvRhnZH.js";import"./context--lHaHpmz.js";import"./ActionGroupView-CSh8Io46.js";import"./Content-CeVPKDmn.js";import"./Heading-ChBOMWT5.js";import"./Heading-CxNojwif.js";import"./RSPContexts-DthjkPm0.js";import"./utils-B0AChKxF.js";import"./Text-CG9Jqgcw.js";import"./browser-CBJMDWdB.js";import"./EmulatedBoldText-C0e2olgf.js";import"./Text-CFtcNM5e.js";import"./Modal-DZut7RYA.js";import"./Overlay-BZoP2uMy.js";import"./useOverlayController-Cw4NEVT3.js";import"./useStatic-BBvdmwt_.js";import"./OverlayContextProvider-CjArtki4.js";import"./LoadingSpinner-DJPu7RL-.js";import"./IconWarning-DGc3SgEa.js";import"./remote-BRyh19SP.js";import"./Dialog-DGMm3KA5.js";import"./Button-C8XSc9bU.js";import"./ProgressBar-DEPx6SkE.js";import"./Label-Cm5GkE6R.js";import"./Hidden-DJi7BiD_.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DXx1BftH.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DIa0iaS-.js";import"./useFocus-D4xdQDkq.js";import"./useFocusRing-Ba3uGuMn.js";import"./useFocusable-CIZyv2_u.js";import"./OverlayArrow-Lhpnfcsg.js";import"./useControlledState-D2jLiTCX.js";import"./Collection-kJPXxCPQ.js";import"./CollectionBuilder-7T-5iTGH.js";import"./SelectionIndicator-DV4fwApE.js";import"./Separator-DJ7zA3-I.js";import"./SelectionManager-C2VB5dtW.js";import"./useEvent-BCEPVcfC.js";import"./useCollator-DHN-qUKB.js";import"./FocusScope-OuWnR4TG.js";import"./VisuallyHidden-U7btBlyO.js";import"./ButtonView-D4pWD16C.js";import"./Flex-B7-1TfDw.js";import"./useRef-BBhsdY2o.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-1USXN4JB.js";import"./getActionGroupSlot-Bv8pOp0w.js";import"./Markdown-DC4iKYaH.js";import"./CodeBlock-Dk6R5y4w.js";import"./CopyButton-B-68JWXZ.js";import"./Tooltip-BEzYuSq0.js";import"./react-children-utilities-DGneWI-I.js";import"./InlineCode-BnXQSDQO.js";import"./Link-BTrSypjZ.js";import"./Separator-Bpi6JuzI.js";import"./TextArea-CnIiRX0M.js";import"./useFieldComponent-t62DY9AA.js";import"./useControlledHostValueProps-CK9PLT7P.js";import"./FieldDescription-BPEDfYs_.js";import"./TextField-C7oeVSLc.js";import"./FieldError-BTLVyZmC.js";import"./Form-BHZ6w-7V.js";import"./Group-B7D8BaP2.js";import"./Input-DK8ERkio.js";import"./useTextField-BoVwwEYl.js";import"./useFormReset-D88R_CF2.js";import"./useFormValidation-8M-A-L7s.js";import"./AlertText-DldHmlNs.js";import"./AlertIcon-yA83KE1p.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),eo={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=p({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
