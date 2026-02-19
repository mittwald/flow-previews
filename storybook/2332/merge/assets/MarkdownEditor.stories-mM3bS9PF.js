import{r as x,j as r}from"./iframe-CXQlTNqj.js";import{a as n,u as p,F as a,R as u,S as c,t as E}from"./ResetButton-CuQl0VZE.js";import{L as m}from"./Label-Dp8rzwUw.js";import{B as l}from"./Button-BlafpMbq.js";import{S as j}from"./Section-D3kMglmp.js";import{A as b}from"./ActionGroup-DpfWBi-0.js";import{s as d}from"./ActionBatch-CqBtrpsE.js";import{M as s}from"./MarkdownEditor-C2O0geMZ.js";import{F as g}from"./FieldError-BB5Q0mgv.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-UE7lg7x0.js";import"./flowComponent-C6ZYuDSe.js";import"./index-BSs4nRRG.js";import"./clsx-B-dksMZM.js";import"./index-AYGk-Z4X.js";import"./useLocalizedStringFormatter-B9SYg2k8.js";import"./context-CCBj18N5.js";import"./ActionGroupView-DaaNBgYo.js";import"./Content-DYKIsFxH.js";import"./Heading-NHDwQUXa.js";import"./Heading-D8oa06Vc.js";import"./RSPContexts-CaXq0cAk.js";import"./utils-DV_byzth.js";import"./Text-B3somVi7.js";import"./browser-C0g7jXxm.js";import"./EmulatedBoldText-DjcO8VHN.js";import"./Text-QCBVP_aW.js";import"./Modal-yrBxLTE3.js";import"./useOverlayController-E6hXP07l.js";import"./useStatic-D-kx8TMY.js";import"./Overlay-DpNQvUDC.js";import"./OverlayContextProvider-97FigBld.js";import"./LoadingSpinner-Wa1FVRzC.js";import"./IconWarning-qWu7I_Pu.js";import"./remote-aElBUAr6.js";import"./Dialog-D3U2a9zn.js";import"./Button-BcwVzCcr.js";import"./ProgressBar-DkaBE4Rp.js";import"./Label-DrfdLf3_.js";import"./Hidden-CKkXVPeJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DrjDs4EL.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C3E8Ss2p.js";import"./useFocus-DfPsdBQQ.js";import"./useFocusRing-D1AlgOvW.js";import"./useFocusable-D7YkDf-E.js";import"./OverlayArrow-sIEanX_d.js";import"./useControlledState-CC0ueLns.js";import"./Collection-TmQT-68Q.js";import"./CollectionBuilder-9Nd9UEc1.js";import"./SelectionIndicator-DQZUhYCh.js";import"./Separator-Bs-03xzt.js";import"./SelectionManager-CqkX1Rni.js";import"./useEvent-AkpP6oW4.js";import"./useCollator-BFpQRgzB.js";import"./FocusScope-Dqueyleg.js";import"./VisuallyHidden-bRUw4X6B.js";import"./ButtonView-CW0bd9Hv.js";import"./Flex-BrEPexUM.js";import"./useRef-PDOIY6yC.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-nZf_hQYT.js";import"./getActionGroupSlot-D2yWy39Q.js";import"./Markdown-CWlvsX4f.js";import"./CodeBlock-CgqnCg3d.js";import"./CopyButton-D0roPz7P.js";import"./Tooltip-7DJBrIsj.js";import"./react-children-utilities-Bo6p2vQK.js";import"./InlineCode-Cjzq7-Xs.js";import"./Link-CJD93-tw.js";import"./Separator-Coq2WAcu.js";import"./TextArea-D82W0_TC.js";import"./useFieldComponent-Cn71_kOc.js";import"./useControlledHostValueProps-yWnOktoO.js";import"./FieldDescription-Ct_r0eGl.js";import"./TextField-BoxW8OPP.js";import"./FieldError-CtbrQfSs.js";import"./Form-CN1ucAgL.js";import"./Group-COTR0fAc.js";import"./Input-CLvZry-y.js";import"./useTextField-C4aZ5CwP.js";import"./useFormReset-BDdgSN6q.js";import"./useFormValidation-CRz2e402.js";import"./AlertText-GJJuhpY7.js";import"./AlertIcon-B77GTCGL.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),eo={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=p({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
