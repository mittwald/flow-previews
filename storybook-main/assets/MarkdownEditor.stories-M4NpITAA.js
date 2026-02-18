import{r as x,j as r}from"./iframe-tDsAeGKm.js";import{a as n,u as p,F as a,R as u,S as c,t as E}from"./ResetButton-BVW5MRs9.js";import{L as m}from"./Label-B4YMFJ8a.js";import{B as l}from"./Button-jRtlVENb.js";import{S as j}from"./Section-CKCf0K1W.js";import{A as b}from"./ActionGroup-BZIwzAiu.js";import{s as d}from"./ActionBatch-Dcv9mfk6.js";import{M as s}from"./MarkdownEditor-BUeRfBgd.js";import{F as g}from"./FieldError-CA1wZrT9.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CfRao1zO.js";import"./flowComponent-BfLM0c2n.js";import"./index-bKgupbLj.js";import"./clsx-B-dksMZM.js";import"./index-B9moyWSs.js";import"./useLocalizedStringFormatter-Ble8CxqU.js";import"./context-B8HhXai5.js";import"./ActionGroupView-DajatjdJ.js";import"./Content-H2lGrUDb.js";import"./Heading-B57Tu_dh.js";import"./Heading-DyHmtFkg.js";import"./RSPContexts-1mHRta2c.js";import"./utils-DhX5ITDy.js";import"./Text-D5NMs6cZ.js";import"./browser-CATpO6nC.js";import"./EmulatedBoldText-B_3WWRWD.js";import"./Text-B29urVwj.js";import"./Modal-Dcg0QJqD.js";import"./useOverlayController-B76T1UqF.js";import"./useStatic-BTV6Su7X.js";import"./Overlay-61YYNO6R.js";import"./OverlayContextProvider-BmYwjEIL.js";import"./LoadingSpinner-cVZxppZv.js";import"./IconWarning-DKvGabEh.js";import"./remote-Dyxf39S8.js";import"./Dialog-BchFx3yj.js";import"./Button-DSgsBLqC.js";import"./ProgressBar-cVZAXAEA.js";import"./Label-CtdEoG3D.js";import"./Hidden-S5GeLDqu.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CvQ5_So8.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DsHBwD0o.js";import"./useFocus-BJatrcMj.js";import"./useFocusRing-O-BrOcuV.js";import"./useFocusable-Dhs_EAwV.js";import"./OverlayArrow-dAx307tU.js";import"./useControlledState-DJUoNOP3.js";import"./Collection-DX3v8hJf.js";import"./CollectionBuilder-DauPrh3N.js";import"./SelectionIndicator-DonQVrOH.js";import"./Separator-C9Rj8Lhn.js";import"./SelectionManager-CvMALRTQ.js";import"./useEvent-DNMlHs6e.js";import"./useCollator-CjoGoE8F.js";import"./FocusScope-BLSD8gJZ.js";import"./VisuallyHidden-BeYtKSfy.js";import"./ButtonView-1ef2c52x.js";import"./Flex-DaNMii4C.js";import"./useRef-DQUohT-d.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CLgK4tmh.js";import"./getActionGroupSlot-BJCt2Jtz.js";import"./Markdown-clkFdstv.js";import"./CodeBlock-Pl2u79I3.js";import"./CopyButton-Cwx46khi.js";import"./Tooltip-DuE3VSgT.js";import"./react-children-utilities-zZY3JsK_.js";import"./InlineCode-B8qvoOk1.js";import"./Link-D7bQunCc.js";import"./Separator-Dtss0mta.js";import"./TextArea-DGvNwkk9.js";import"./useFieldComponent-CEijF59K.js";import"./useControlledHostValueProps-CillDfRs.js";import"./FieldDescription-DWZekG1M.js";import"./TextField-BokHL5kS.js";import"./FieldError-Duxf8Exl.js";import"./Form-DBzv0iBU.js";import"./Group-CGfCWG6F.js";import"./Input-BzgBakC2.js";import"./useTextField-BH11bfwQ.js";import"./useFormReset-Bh0h9BrG.js";import"./useFormValidation-CHyrMCXS.js";import"./AlertText-CRAaEbc-.js";import"./AlertIcon-BN6nSUvJ.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),eo={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=p({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
