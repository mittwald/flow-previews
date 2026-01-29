import{j as r,r as x}from"./iframe-Ci26vI3B.js";import{a as n,u as a,F as p,t as E,R as u,S as c}from"./ResetButton-CpQCWtXZ.js";import{L as s}from"./Label-RXEJnYkv.js";import{B as l}from"./Button-Bgg1raPB.js";import{S as j}from"./Section-B3-aJ9Rn.js";import{A as b}from"./ActionGroup-Wo5_oqtF.js";import{s as d}from"./Action-BUuW9nUE.js";import{M as m}from"./MarkdownEditor-TPgxQRSA.js";import{F as g}from"./FieldError-CpZGKwRg.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CWUTf5k8.js";import"./flowComponent-BCoZzahf.js";import"./index-3wEtqLOq.js";import"./clsx-B-dksMZM.js";import"./index-BgjIHz1Y.js";import"./useLocalizedStringFormatter-D463xrfM.js";import"./context-21njfTP5.js";import"./useRef-KFnBoEQ2.js";import"./utils-Prtw8tAI.js";import"./ButtonView-CpgiMrkS.js";import"./browser-CkG7QNAh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CzTNGA-w.js";import"./Hidden-Bh4pa2b3.js";import"./IconWarning-CM9E6h9H.js";import"./remote-BeH756Ak.js";import"./Text-BThwDV_-.js";import"./EmulatedBoldText-TNvCnD2A.js";import"./Text-BBkEKRDK.js";import"./LoadingSpinner-CiE2xtQ-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B-v9WAC7.js";import"./ProgressBar-Cd-gbxhy.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D7Kjovyf.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BIn545i6.js";import"./useFocus-BemMoN-v.js";import"./useFocusRing-IT4cpc8M.js";import"./useFocusable-C470YARL.js";import"./ContextMenuSection-B4FW6kIZ.js";import"./Dialog-DpyFyuBj.js";import"./RSPContexts-wYlI8WBg.js";import"./OverlayArrow-G0bNf6l9.js";import"./useControlledState-B4ASThyn.js";import"./Collection-B2Ssnxvf.js";import"./CollectionBuilder-BZqHFZmJ.js";import"./SelectionIndicator-DzwumZRP.js";import"./Separator-D2dDCvgZ.js";import"./SelectionManager-3iDEc--o.js";import"./useEvent-DLiSbdt5.js";import"./useCollator-BE-Xf4hi.js";import"./FocusScope-ByCQWjTm.js";import"./VisuallyHidden-BSnmZ3mx.js";import"./getActionGroupSlot--c77iWbK.js";import"./useStatic-wckFiMZJ.js";import"./context-BCzJciSx.js";import"./Markdown-Dq4t_B-C.js";import"./CodeBlock-Cl7uTwih.js";import"./CopyButton-B9ocCuZb.js";import"./Tooltip-BDCO_YKz.js";import"./react-children-utilities-C72H5SrX.js";import"./Heading--cJO5BZg.js";import"./Heading-CXYj_MKW.js";import"./InlineCode-DncIqcuF.js";import"./Link-Iwra83HD.js";import"./Separator-CTfnNiME.js";import"./TextArea-s4Z2vvYn.js";import"./TextFieldBase-BhrDzMV9.js";import"./FieldDescription-DnqWWk67.js";import"./useFieldComponent-DlKim18O.js";import"./TextField-ZGHANY0-.js";import"./FieldError-C8ji9kGw.js";import"./Form-DDqIZ7ds.js";import"./Group-CueZt5qh.js";import"./Input-D6UBTZXc.js";import"./useTextField-ErgkhbMw.js";import"./useFormReset-CoDGZCB3.js";import"./useFormValidation-DbMZQ9P7.js";import"./useControlledHostValueProps-B1kNlUL3.js";import"./AlertText-CW-S-5R1.js";import"./AlertIcon-CQS_iHVq.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Zr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const $r=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,$r as __namedExportsOrder,Zr as default};
