import{r as x,j as r}from"./iframe-B___tkgA.js";import{a as n,u as a,F as p,R as u,S as c,t as E}from"./ResetButton-Crujzy8J.js";import{L as s}from"./Label-WD9nd_On.js";import{B as l}from"./Button-CK4qYUON.js";import{S as j}from"./Section-DE9sm5BA.js";import{A as b}from"./ActionGroup-BHdTvu9o.js";import{s as d}from"./Action-DRwD3AMr.js";import{M as m}from"./MarkdownEditor-DxkDrMZ0.js";import{F as g}from"./FieldError-DrmvSGqW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BEuCOou2.js";import"./flowComponent-Bo9LBx3J.js";import"./index-CJe1Xv2T.js";import"./clsx-B-dksMZM.js";import"./index-2yYueaxI.js";import"./useLocalizedStringFormatter-BO-JJMTJ.js";import"./context-CHjly9N5.js";import"./useRef-CEF838Jv.js";import"./utils-BoKG2kRw.js";import"./ButtonView-B7YCzKos.js";import"./browser-C6gsgKxf.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BwlZgh8W.js";import"./Hidden-DKsxRYjN.js";import"./IconWarning-DnK3ATSm.js";import"./remote-CwYVL4Pl.js";import"./Text-C5KW7r-3.js";import"./EmulatedBoldText-BcNjSABl.js";import"./Text-CbxRuAhG.js";import"./LoadingSpinner-gELkMREc.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-dgLzajPx.js";import"./ProgressBar-CdmwSyiz.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CH6QmtjC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-XNzvlEPV.js";import"./useFocus-x-GTmi1B.js";import"./useFocusRing-BdE9QsVo.js";import"./useFocusable-DdN6L3mC.js";import"./ContextMenuSection-BssuI41M.js";import"./Dialog-SqXlQhu9.js";import"./RSPContexts-xv2R9swO.js";import"./OverlayArrow-De6KLSjI.js";import"./useControlledState-xG-Gpz3Z.js";import"./Collection-XdP36m4g.js";import"./CollectionBuilder-BV7ZWrgu.js";import"./SelectionIndicator-D7aQ_5Xi.js";import"./Separator-7ST9riI-.js";import"./SelectionManager-BkOmbFBM.js";import"./useEvent-FGSNypfV.js";import"./useCollator-C6qS_GFX.js";import"./FocusScope-6XhI78W1.js";import"./VisuallyHidden-feej_kfu.js";import"./getActionGroupSlot-CLc7h3ns.js";import"./useStatic-DSdFfo4Y.js";import"./context-iZF9qbeo.js";import"./Markdown-4HxVBOnA.js";import"./CodeBlock-BgeNk2d-.js";import"./CopyButton-DHlJVO_K.js";import"./Tooltip-Cq4vnG-J.js";import"./react-children-utilities-Dp_7APfP.js";import"./Heading-LM5CzMob.js";import"./Heading-2NkxAW1G.js";import"./InlineCode-BEBiacuW.js";import"./Link-D6dpLRQi.js";import"./Separator-BuoApKAE.js";import"./TextArea-DdbnpGQA.js";import"./useFieldComponent-vfbWFIJK.js";import"./useControlledHostValueProps-C4-i_rC0.js";import"./FieldDescription-C1ZwwWMX.js";import"./TextField-4VWUIDAX.js";import"./FieldError-Bxvpebgp.js";import"./Form-Bd7gFKVi.js";import"./Group-CLJgWjIj.js";import"./Input-CKNBze1L.js";import"./useTextField-BSXvhdIQ.js";import"./useFormReset-BMzMnmaN.js";import"./useFormValidation-DPy8gvTm.js";import"./AlertText-BYyQ41f3.js";import"./AlertIcon-COjYyYJX.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Xr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
