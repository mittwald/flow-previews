import{r as x,j as r}from"./iframe-DG8PGYI2.js";import{a as n,u as p,F as a,R as u,S as c,t as E}from"./ResetButton-BMqJhTJD.js";import{L as m}from"./Label-BPpS4vmA.js";import{B as l}from"./Button-DsdihroW.js";import{S as j}from"./Section-Da7bIBGb.js";import{A as b}from"./ActionGroup-CyRYJEmZ.js";import{s as d}from"./ActionBatch-BRiItlo9.js";import{M as s}from"./MarkdownEditor-B9n7KKqE.js";import{F as g}from"./FieldError-Cib7Ob9Y.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BkMen_On.js";import"./flowComponent-C4oSbM4F.js";import"./index-CkEHDxga.js";import"./clsx-B-dksMZM.js";import"./index-LR7sdXL2.js";import"./useLocalizedStringFormatter-DXFpyvRx.js";import"./context-CRjwjO0_.js";import"./ActionGroupView-CyN-fLB9.js";import"./Content-CXy-CNoO.js";import"./Heading-C3VOV3Fz.js";import"./Heading-CsdNC-Kb.js";import"./RSPContexts-DatC1hy5.js";import"./utils-07AIACoX.js";import"./Text-DXfg_t75.js";import"./browser-CdVMgEWJ.js";import"./EmulatedBoldText-BysjcSz3.js";import"./Text-0L-5i7aJ.js";import"./Modal-D9mRgYws.js";import"./useOverlayController-BzZu7ty6.js";import"./useStatic-BxWRYqBR.js";import"./Overlay-BBbCl7H6.js";import"./OverlayContextProvider-DoYhYc18.js";import"./LoadingSpinner-JP8g8ixs.js";import"./IconWarning-SSUZ9dob.js";import"./remote-DDSPySo3.js";import"./Dialog-Bv_Niklp.js";import"./Button-CKW1LLKF.js";import"./ProgressBar-BiJjcsjO.js";import"./Label-2cZ0Lvh6.js";import"./Hidden-DLF1ykG-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D3O2Shqb.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dy-OAjIk.js";import"./useFocus-gEyTxYiG.js";import"./useFocusRing-CyfWRfC8.js";import"./useFocusable-0ogj4vIM.js";import"./OverlayArrow-BCWfoCHK.js";import"./useControlledState-CbmAXNAC.js";import"./Collection-COwwIt7O.js";import"./CollectionBuilder-CqZXSAPR.js";import"./SelectionIndicator-CS3Tqeow.js";import"./Separator-DxksnpFt.js";import"./SelectionManager-Vuj-N4iU.js";import"./useEvent-CyzeiOxV.js";import"./useCollator-BagykhK3.js";import"./FocusScope-By5yaDFE.js";import"./VisuallyHidden-DKQ2uWX5.js";import"./ButtonView-BM2ZoM3D.js";import"./Flex-zawCEP1d.js";import"./useRef-DIQYbD7f.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BKYmu9Je.js";import"./getActionGroupSlot-D51i84O1.js";import"./Markdown-B2dRwY_l.js";import"./CodeBlock-Dq3IpEZH.js";import"./CopyButton-BjYK6oOJ.js";import"./Tooltip-D4Aliizc.js";import"./react-children-utilities-0eE0Whvi.js";import"./InlineCode-DYzqO4-c.js";import"./Link-BYvDMLq1.js";import"./Separator-BHEBe6GY.js";import"./TextArea-BlCsrUN2.js";import"./useFieldComponent-CBicToer.js";import"./useControlledHostValueProps-B3V_ATuW.js";import"./FieldDescription-CFcLkynh.js";import"./TextField-OZt28VIy.js";import"./FieldError-bE1Vz7Na.js";import"./Form-COtDtsRb.js";import"./Group-DnR8HzPq.js";import"./Input-8qA1kF5u.js";import"./useTextField-CqEJ98NX.js";import"./useFormReset-BIdGIAau.js";import"./useFormValidation-DkNbsHEL.js";import"./AlertText-BxN-Llvy.js";import"./AlertIcon-DlZAtoqh.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),eo={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=p({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
