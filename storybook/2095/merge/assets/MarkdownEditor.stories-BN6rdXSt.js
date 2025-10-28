import{j as r,r as h}from"./iframe-DGdLAJHm.js";import{a,u as p,F as d,t as F}from"./Form-C59BQnOt.js";import{L as s}from"./Label-TWVsUPc0.js";import{B as m}from"./Button-B6Mqr-fI.js";import{S as x}from"./Section-sBOUh03h.js";import{A as E}from"./ActionGroup-CQD4NXmL.js";import{s as l}from"./Action-6ocxia9j.js";import{M as n}from"./MarkdownEditor-bM6npPk7.js";import{F as j}from"./useFieldComponent-sq1ZsD9O.js";import"./index-nuYtCEEu.js";import"./flowComponent-D7HGs2AA.js";import"./index-JbK8SDWv.js";import"./clsx-B-dksMZM.js";import"./index-BZginMRh.js";import"./useLocalizedStringFormatter-CSQJExWC.js";import"./context-CokKTPHD.js";import"./browser-DtJMxQoE.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DCzhvZl0.js";import"./utils-DMxNMt2r.js";import"./Hidden-DDvTcAlv.js";import"./IconWarning-BY1Q-g8P.js";import"./Text-DFxon6If.js";import"./EmulatedBoldText-l3o70VD0.js";import"./Text-C5DwW8tZ.js";import"./LoadingSpinner-Cx_Ae53U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-De2YyQVb.js";import"./ProgressBar-NfwVy8TS.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DLeCNjtK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B2gRAimw.js";import"./useFocus-Cj45nHC3.js";import"./useFocusRing-Caix2y0_.js";import"./useFocusable-DBd_8M_L.js";import"./ContextMenuSection-DZLT8qvO.js";import"./Dialog-CzLVI3sy.js";import"./RSPContexts-4eF2sDK2.js";import"./OverlayArrow-DsaarUgr.js";import"./useControlledState-C-kX1e6O.js";import"./Collection-BVDIRVc_.js";import"./CollectionBuilder--BI9tvyg.js";import"./SelectionIndicator-vtyMezuP.js";import"./Separator-C_iWvMGV.js";import"./SelectionManager-Bowb6aZq.js";import"./useEvent-CSYpBGU5.js";import"./useCollator--gwTay33.js";import"./FocusScope-Bl39wWwG.js";import"./VisuallyHidden-Cu1Uufsu.js";import"./dynamic-DckDcmFh.js";import"./getActionGroupSlot-Dv56ESHT.js";import"./useStatic-BT4grvBi.js";import"./context-B3SgFMfx.js";import"./Markdown-9uFOUyUn.js";import"./CodeBlock-WEximgIf.js";import"./CopyButton-Caj5CeV_.js";import"./Tooltip-B-vtu2id.js";import"./ClearPropsContextView-Dpaa2bCU.js";import"./ClearPropsContext-DfqGN335.js";import"./react-children-utilities-bPIN5y_s.js";import"./Heading-CRDqmGt0.js";import"./Heading-DVxPUCYC.js";import"./InlineCode-jUUX7YG5.js";import"./Link-7RMwdF8f.js";import"./Separator-Bfk1ByEs.js";import"./TextArea-CVhAFbg_.js";import"./TextFieldBase-DgvH_saR.js";import"./FieldDescription-DQMN5C8v.js";import"./TextField-DapXRZOv.js";import"./Form-CiLoCuZS.js";import"./Group-DjNAC75P.js";import"./Input-BpAc-meC.js";import"./useTextField-BmiF-DDN.js";import"./useFormReset-DwdExnfa.js";import"./useFormValidation-LOSvoqzJ.js";import"./ReactAriaControlledValueFix-C438VEIS.js";import"./useManagedValue-X_yr0qfx.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),Yr={title:"Integrations/React Hook Form/MarkdownEditor",component:a,render:()=>{const o=async f=>{await l(5e3),g(f)},u=p({defaultValues:{user:""}}),c=F();return r.jsx(d,{form:u,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(c,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx(E,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return h.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,zr as __namedExportsOrder,Yr as default};
