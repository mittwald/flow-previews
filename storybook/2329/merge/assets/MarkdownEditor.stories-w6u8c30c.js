import{r as x,j as r}from"./iframe-DU1OTSEW.js";import{a as n,u as p,F as a,R as u,S as c,t as E}from"./ResetButton-BsyJpF7l.js";import{L as m}from"./Label-BFsMAETu.js";import{B as l}from"./Button-C02FBbwW.js";import{S as j}from"./Section-DIfoCaa5.js";import{A as b}from"./ActionGroup-BZNfB_OW.js";import{s as d}from"./ActionBatch-BeODW9YZ.js";import{M as s}from"./MarkdownEditor-Bld3BfqD.js";import{F as g}from"./FieldError-lAQ6GllT.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BTXPuCk3.js";import"./flowComponent-C_TICRXM.js";import"./index-nIZOvY-k.js";import"./clsx-B-dksMZM.js";import"./index-Ben_k6_D.js";import"./useLocalizedStringFormatter-npOcqoB_.js";import"./context-MHXBCA58.js";import"./ActionGroupView-ZPgNa0UK.js";import"./Content-BXIdNakr.js";import"./Heading-Cl160jiD.js";import"./Heading-D1wlHBOV.js";import"./RSPContexts-CELva0rI.js";import"./utils-Dj7KEBV3.js";import"./Text-BlwSaqXM.js";import"./browser-B-EQy8Zd.js";import"./EmulatedBoldText-IXPdWydI.js";import"./Text-iBzBCpEi.js";import"./Modal-D00g1B7I.js";import"./useOverlayController-CN_E_UXR.js";import"./useStatic-B4QbuKZS.js";import"./Overlay-DxVOVPlK.js";import"./OverlayContextProvider-CEpEJiOz.js";import"./LoadingSpinner-7mWb9Q3Q.js";import"./IconWarning-BOLd-bsg.js";import"./remote-C4J6eDzq.js";import"./Dialog-rIHNVDTB.js";import"./Button-njBxl16I.js";import"./ProgressBar-ZiPbwj7h.js";import"./Label-BJoTK4AB.js";import"./Hidden-UY4SCaak.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B3DB9qnR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DCIqPyrL.js";import"./useFocus-u6Gylu9g.js";import"./useFocusRing-L_sy4AuI.js";import"./useFocusable-XjJjjkQd.js";import"./OverlayArrow-Bh5zDL_J.js";import"./useControlledState-C4NYpY3o.js";import"./Collection-BgHGMK_M.js";import"./CollectionBuilder-D9jRpqx4.js";import"./SelectionIndicator-BBXAzCHo.js";import"./Separator-ezkSicQA.js";import"./SelectionManager-BMrQ3jem.js";import"./useEvent-BUR3uY3V.js";import"./useCollator-BcGn8FjN.js";import"./FocusScope-BR4Z_k_s.js";import"./VisuallyHidden---d_BDnt.js";import"./ButtonView-B-0Eh3g3.js";import"./Flex-hLK_L7IW.js";import"./useRef-BOtMNj3F.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-B26kJYav.js";import"./getActionGroupSlot-DUS5YLbg.js";import"./Markdown-COlVyRc-.js";import"./CodeBlock-BGDBLrCr.js";import"./CopyButton-AEBiyg0_.js";import"./Tooltip-D4OeMkzp.js";import"./react-children-utilities-DEI8WjO8.js";import"./InlineCode-UYg5tPBl.js";import"./Link-qcDoNqE3.js";import"./Separator-C7Oko6mI.js";import"./TextArea-CEmdTgwU.js";import"./useFieldComponent-DAmXFBUF.js";import"./useControlledHostValueProps-FQAX2oVh.js";import"./FieldDescription-BeeLUpCG.js";import"./TextField-Dvb4Cwl8.js";import"./FieldError-C-1FXxCh.js";import"./Form-DFVlj26J.js";import"./Group-DFJoPzzo.js";import"./Input-BRq7uXwq.js";import"./useTextField-BJo9NeBV.js";import"./useFormReset-B6aj4tVR.js";import"./useFormValidation-Bnl6yMKM.js";import"./AlertText-DRGtE0Z7.js";import"./AlertIcon-_4be_GIR.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),eo={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=p({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
