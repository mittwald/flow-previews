import{j as r,r as x}from"./iframe-CgbY6Bes.js";import{u as n,F as a}from"./Form-DZ9uk1zZ.js";import{L as s}from"./Label-4ok8fPIv.js";import{B as l}from"./Button-AhSsxt5Y.js";import{S as E}from"./Section-BDBFnTnO.js";import{A as j}from"./ActionGroup-CWjy7TJK.js";import{s as p}from"./Action-fZniNiQj.js";import{M as m}from"./MarkdownEditor-DmiDAuBj.js";import{F as b}from"./FieldError-CfVeuV3t.js";import{S as u}from"./SubmitButton-CG5PeIMV.js";import{R as c}from"./ResetButton-BgADhceO.js";import{F as d,t as g}from"./Field-RwAXq-yO.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-C7soFJnH.js";import"./utils-C1D540aj.js";import"./mergeRefs-CxSmTZ1y.js";import"./index-COB0h6yR.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-lamhxTiw.js";import"./PropsContextProvider-CTdpdvjF.js";import"./useLocalizedStringFormatter-BxyHFIOH.js";import"./context-B7mjZSuw.js";import"./ProgressBar-DU_WxInK.js";import"./Hidden-DQEm4CFa.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconChevronDown-BgfzzCeX.js";import"./remote-VFFVCOtz.js";import"./IconX-Bt51Q_dW.js";import"./IconCheck-Bkr0Vsq-.js";import"./Text-VVW0omSC.js";import"./EmulatedBoldText-C19QTVcg.js";import"./LoadingSpinner-BWpI0HIx.js";import"./ariaLive-BHE3J_Iw.js";import"./Button-B5ZFMN0X.js";import"./useFocusRing-d9Vd45dy.js";import"./useFocusable-C07dHpTX.js";import"./ContextMenuSection-ChZ4OnoY.js";import"./lib-90ocxLs-.js";import"./context-dInkHyA4.js";import"./RSPContexts-nmNOlAeI.js";import"./Collection-CkSsBrfI.js";import"./CollectionBuilder-bx8YHx7t.js";import"./SelectionIndicator-Cyz4sgG-.js";import"./Separator-B-G5UFsQ.js";import"./useStatic-YWRRTJxv.js";import"./dynamic-eD-KrC4d.js";import"./getActionGroupSlot-DScHYJoT.js";import"./Markdown-C7F08NmR.js";import"./CodeBlock-CGcFqDWw.js";import"./CopyButton-B3QyVToZ.js";import"./IconCopy-C4AQploS.js";import"./Tooltip-jMYUxjeT.js";import"./Activity-CqdR7Ddt.js";import"./TranslationProvider-BcRRsHoV.js";import"./OverlayContextProvider-BX16aSJY.js";import"./useOverlayController-BuHPrhsh.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./react-children-utilities-FJn8FxQ-.js";import"./Heading-Dy8Qo0Zu.js";import"./Heading-C-qIe53v.js";import"./InlineCode-D-rN82yw.js";import"./Link-DiU2ptgV.js";import"./IconDownload-C-IJ7ayO.js";import"./Separator-CEbBLKql.js";import"./TextArea-DXiD-3Lf.js";import"./TextFieldBase-CKCBZbmb.js";import"./useFieldComponent-DU5_3SMj.js";import"./TextField-x9F5KG4w.js";import"./FieldError-ZCijCAEA.js";import"./Form-D-gyidno.js";import"./Group-CFakG5ME.js";import"./Input-DHQ0YPR8.js";import"./useTextField-BZjORKhe.js";import"./useFormReset-DHRVeg6P.js";import"./useFormValidation-B0VcAod8.js";import"./useControlledHostValueProps-Dbgf5Bkh.js";import"./IconList-nDoQZpes.js";import"./IconDanger-D9oAFjYl.js";import"./useRef-CBqwYRkb.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Xr={title:"Integrations/React Hook Form/MarkdownEditor",component:d,render:()=>{const o=async F=>{await p(5e3),M(F)},f=n({defaultValues:{user:""}}),h=g();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(j,{children:[r.jsx(c,{children:"Reset"}),r.jsx(u,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=n({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await p(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=n({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await p(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(u,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
