import{j as r,r as x}from"./iframe-pNOm8Wja.js";import{u as n,F as a}from"./Form-BwFy67B3.js";import{L as s}from"./Label-DHID5D-l.js";import{F as p,t as E}from"./Field-DyTfiPNt.js";import{B as l}from"./Button-CgV_q1F1.js";import{S as j}from"./Section-C6kZyOP7.js";import{A as b}from"./ActionGroup-CDv4nney.js";import{s as d}from"./Action-DvGTA_vq.js";import{M as m}from"./MarkdownEditor-B_uYYUsW.js";import{F as g}from"./FieldError-DA4-4QkZ.js";import{S as u}from"./SubmitButton--JqDEml_.js";import{R as c}from"./ResetButton-BjQcSv0U.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CBsMsG9c.js";import"./utils-BknOSkFt.js";import"./mergeRefs-v_WstrVO.js";import"./index-CfSUEUFJ.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-lamhxTiw.js";import"./PropsContextProvider-BWF9EjWJ.js";import"./useLocalizedStringFormatter-CRfFxVeP.js";import"./context-CMdVhRJ1.js";import"./ProgressBar-D3icCtAB.js";import"./Hidden-BfleQL3O.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-CkcNveyu.js";import"./IconApp-BiE0s1PO.js";import"./remote-DYOOxdg2.js";import"./IconX-CwELzZYK.js";import"./IconCheck-DoYeu8FX.js";import"./Text-_46BQ-Z5.js";import"./EmulatedBoldText-C8Hc8u3o.js";import"./LoadingSpinner-Db8dHYJY.js";import"./ariaLive-C7DipXM8.js";import"./Button-D9P8PHTw.js";import"./useFocusRing-Cca4ZdHO.js";import"./useFocusable-DOa46CdT.js";import"./ContextMenuSection-LjM8joNZ.js";import"./lib-90ocxLs-.js";import"./context-Chylvkq0.js";import"./RSPContexts-CPamdU7s.js";import"./Collection-DsfTdLuW.js";import"./CollectionBuilder-CKordMi2.js";import"./SelectionIndicator-DYQzBrWb.js";import"./Separator-ti_7fu_1.js";import"./useStatic-GeHsFKqm.js";import"./getActionGroupSlot-C-2PJFSw.js";import"./Markdown-DGB0a0Dq.js";import"./CodeBlock-Dn9P6Aia.js";import"./CopyButton-S4ALttRc.js";import"./IconCopy-DOsn0duu.js";import"./Tooltip-Bo3xe0Gh.js";import"./Activity-Br43_cfx.js";import"./TranslationProvider-vME1iId0.js";import"./OverlayContextProvider-DAyQWAs8.js";import"./useOverlayController-DGsr_y1V.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./react-children-utilities-BVN84kR9.js";import"./Heading-mhDH31L5.js";import"./Heading-YerowFDN.js";import"./InlineCode-DLLxZzW6.js";import"./Link-B5wRiSOx.js";import"./IconDownload-Ew1lHoEM.js";import"./Separator-H1H23xP1.js";import"./TextArea-DZ0Xl36I.js";import"./TextFieldBase-yGb7YXjj.js";import"./useFieldComponent-XMIDEUQz.js";import"./TextField-Qs4nKFr-.js";import"./FieldError-B2TX3Fta.js";import"./Form-BbF0Gc6X.js";import"./Group-D0q_Cf1F.js";import"./Input-CsUDr6Sk.js";import"./useTextField-ByF_LOE7.js";import"./useFormReset-Dc67hovh.js";import"./useFormValidation-DtQ3XmyE.js";import"./useControlledHostValueProps-PtKQ8r5D.js";import"./IconList-BdHTAdIm.js";import"./IconDanger-DCkcPuhV.js";import"./useRef-C6XgHi6W.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Xr={title:"Integrations/React Hook Form/MarkdownEditor",component:p,render:()=>{const o=async F=>{await d(5e3),M(F)},f=n({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(u,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=n({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=n({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(u,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
