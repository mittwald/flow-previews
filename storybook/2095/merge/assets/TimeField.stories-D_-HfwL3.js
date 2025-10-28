import{j as r,r as f}from"./iframe-DGdLAJHm.js";import{a as p,u as d,F as c,t as h}from"./Form-C59BQnOt.js";import{L as o}from"./Label-TWVsUPc0.js";import{B as n}from"./Button-B6Mqr-fI.js";import{S as x}from"./Section-sBOUh03h.js";import{A as j}from"./ActionGroup-CQD4NXmL.js";import{s as l}from"./Action-6ocxia9j.js";import{M as b}from"./DateField-DtShBQco.js";import{T as t}from"./TimeField-BL5C3wsO.js";import{F as E}from"./useFieldComponent-sq1ZsD9O.js";import"./index-nuYtCEEu.js";import"./flowComponent-D7HGs2AA.js";import"./index-JbK8SDWv.js";import"./clsx-B-dksMZM.js";import"./index-BZginMRh.js";import"./useLocalizedStringFormatter-CSQJExWC.js";import"./context-CokKTPHD.js";import"./browser-DtJMxQoE.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DCzhvZl0.js";import"./utils-DMxNMt2r.js";import"./Hidden-DDvTcAlv.js";import"./IconWarning-BY1Q-g8P.js";import"./Text-DFxon6If.js";import"./EmulatedBoldText-l3o70VD0.js";import"./Text-C5DwW8tZ.js";import"./LoadingSpinner-Cx_Ae53U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-De2YyQVb.js";import"./ProgressBar-NfwVy8TS.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DLeCNjtK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B2gRAimw.js";import"./useFocus-Cj45nHC3.js";import"./useFocusRing-Caix2y0_.js";import"./useFocusable-DBd_8M_L.js";import"./ContextMenuSection-DZLT8qvO.js";import"./Dialog-CzLVI3sy.js";import"./RSPContexts-4eF2sDK2.js";import"./OverlayArrow-DsaarUgr.js";import"./useControlledState-C-kX1e6O.js";import"./Collection-BVDIRVc_.js";import"./CollectionBuilder--BI9tvyg.js";import"./SelectionIndicator-vtyMezuP.js";import"./Separator-C_iWvMGV.js";import"./SelectionManager-Bowb6aZq.js";import"./useEvent-CSYpBGU5.js";import"./useCollator--gwTay33.js";import"./FocusScope-Bl39wWwG.js";import"./VisuallyHidden-Cu1Uufsu.js";import"./dynamic-DckDcmFh.js";import"./getActionGroupSlot-Dv56ESHT.js";import"./useStatic-BT4grvBi.js";import"./context-B3SgFMfx.js";import"./Form-CiLoCuZS.js";import"./Group-DjNAC75P.js";import"./Input-BpAc-meC.js";import"./useFormValidation-LOSvoqzJ.js";import"./useFormReset-DwdExnfa.js";import"./useSpinButton-W5eBZLaw.js";import"./useFilter-C7pEQj7A.js";import"./useMakeFocusable-Cph4dqrb.js";import"./react-children-utilities-bPIN5y_s.js";import"./ClearPropsContext-DfqGN335.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,S=T("submit"),Ir={title:"Integrations/React Hook Form/TimeField",component:p,render:()=>{const e=async F=>{await l(1500),S(F)},u=d({defaultValues:{timeDefaultValue:new b(16,0)}}),a=h();return r.jsx(c,{form:u,onSubmit:e,children:r.jsxs(x,{children:[r.jsx(a,{name:"time",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(a,{name:"timeDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(a,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(j,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},i={},m={render:()=>{const e=d();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Time"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=d();return r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"text",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "ErrorFromForm"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Rr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Rr as __namedExportsOrder,Ir as default};
