import{r as x,j as r}from"./iframe-n3VOiEf5.js";import{a as n,u as p,F as a,R as u,S as c,t as E}from"./ResetButton-fxisxfEG.js";import{L as m}from"./Label-B5oQkcZ-.js";import{B as l}from"./Button-gwePC8r8.js";import{S as j}from"./Section-BlfcbXvq.js";import{A as b}from"./ActionGroup-DCg0s9cx.js";import{s as d}from"./ActionBatch-B7NWJImq.js";import{M as s}from"./MarkdownEditor-CKkJavEc.js";import{F as g}from"./FieldError-DRCS1Gz9.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DgHDUJEW.js";import"./flowComponent-xlJ5dlMA.js";import"./index-Bqd_wUB4.js";import"./clsx-B-dksMZM.js";import"./index-CHzAo02W.js";import"./useLocalizedStringFormatter-BFx8pFGn.js";import"./context-DhQskmxc.js";import"./ActionGroupView-CZAOrVnR.js";import"./Content-D1DgylIT.js";import"./Heading-C6n9bJf2.js";import"./Heading-Dk8PIdV3.js";import"./RSPContexts-DzW0xATd.js";import"./utils-BTX3Dk-t.js";import"./Text-CwVjZxCT.js";import"./browser-DXFXi5M2.js";import"./EmulatedBoldText-eIBSog0P.js";import"./Text-BWj5dCJ1.js";import"./Modal-B-xEtS1E.js";import"./useOverlayController-BNiAcUvH.js";import"./useStatic-CMDkRNZz.js";import"./Overlay-DXNeIFBA.js";import"./OverlayContextProvider-BOvHDlNa.js";import"./LoadingSpinner-BZywMYAM.js";import"./IconWarning-BKHoIgIa.js";import"./remote-CWx46e_E.js";import"./Dialog-Be8vTliz.js";import"./Button-Dt8pRNpU.js";import"./ProgressBar-C4tpbq9V.js";import"./Label-CZ6Ig0wh.js";import"./Hidden-8NzXPPVn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpN8AhZi.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CVHN3NRW.js";import"./useFocus-Di5Kz97s.js";import"./useFocusRing-50iWl84k.js";import"./useFocusable-ZTBPsPh1.js";import"./OverlayArrow-Tc6q1y2y.js";import"./useControlledState-17a16_5D.js";import"./Collection-2dWh1OBC.js";import"./CollectionBuilder-pL0vDcKt.js";import"./SelectionIndicator-QXVr0AO7.js";import"./Separator-XftYj5HO.js";import"./SelectionManager-Bh8KZa3d.js";import"./useEvent-D6V5lpJs.js";import"./useCollator-BWOk8TKb.js";import"./FocusScope-BBR4OeS8.js";import"./VisuallyHidden-DCK-vxP3.js";import"./ButtonView-CrXGo-AL.js";import"./Flex-i6CO50OO.js";import"./useRef-D3Fh0Wul.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-MotZbouy.js";import"./getActionGroupSlot-CP2KeStW.js";import"./Markdown-UMs-QEFb.js";import"./CodeBlock-tTtd5VNV.js";import"./CopyButton-CIBQTzIF.js";import"./Tooltip-fP0HPuEf.js";import"./react-children-utilities-SA2ZqTX3.js";import"./InlineCode-Bt1QwS9g.js";import"./Link-GSlAfwA0.js";import"./Separator-DTQ20Nqc.js";import"./TextArea-D6rLBh-X.js";import"./useFieldComponent-6hUMLoYk.js";import"./useControlledHostValueProps-DYpQw2Tg.js";import"./FieldDescription-CP4R52YC.js";import"./TextField-D-W_Q7sn.js";import"./FieldError-IZ2wmqkG.js";import"./Form-BfOiuDw8.js";import"./Group-DIIOLL_5.js";import"./Input-IuhSVj8_.js";import"./useTextField-CM82iaRH.js";import"./useFormReset-C-KjP2af.js";import"./useFormValidation-0mLIssn1.js";import"./AlertText-BJDrahB4.js";import"./AlertIcon-DtfTxuVy.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),eo={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=p({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
