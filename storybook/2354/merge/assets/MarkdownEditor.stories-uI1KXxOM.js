import{r as x,j as r}from"./iframe-BLMVSPV3.js";import{a as n,u as p,F as a,R as u,S as c,t as E}from"./ResetButton-C6SwIYKJ.js";import{L as m}from"./Label-C8Rr5uKt.js";import{B as l}from"./Button-RfhP7QLX.js";import{S as j}from"./Section-Sirm0ClO.js";import{A as b}from"./ActionGroup-BE2BWOAA.js";import{s as d}from"./ActionBatch-Cx_n21HW.js";import{M as s}from"./MarkdownEditor-B9pTj2ST.js";import{F as g}from"./FieldError-C9r0kVik.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DAjDUp_G.js";import"./flowComponent-B0rn9FTV.js";import"./index-YglXY0sG.js";import"./clsx-B-dksMZM.js";import"./index-B-iUx4vd.js";import"./useLocalizedStringFormatter-CLP_FKMn.js";import"./context-BPm1HUwp.js";import"./ActionGroupView-Ck11gez5.js";import"./Content-DUxgSWC5.js";import"./Heading-BFhkb_kv.js";import"./Heading-DGpyEp1Z.js";import"./RSPContexts-BTwsU_Cp.js";import"./utils-je6Mfjnf.js";import"./Text-CGLO_VNW.js";import"./browser-CtcijgRV.js";import"./EmulatedBoldText-DNZQf_gm.js";import"./Text-DPHxU6u7.js";import"./Modal-Bevsmrtz.js";import"./useOverlayController-DYQ-WflD.js";import"./useStatic-BWoTOt9k.js";import"./Overlay-CEllIMRS.js";import"./OverlayContextProvider-D_krly58.js";import"./LoadingSpinner-BCnxKzgI.js";import"./IconWarning-DFK0SIT3.js";import"./remote-B_iWR4WH.js";import"./Dialog-BT74UQ_T.js";import"./Button-4lGsfIj0.js";import"./ProgressBar-qhTm7W5b.js";import"./Label-BuUunTyu.js";import"./Hidden-BcBJmzcB.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DcRiwsCk.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DgsdN2D5.js";import"./useFocus-B92CKOsl.js";import"./useFocusRing-IVoDVSxb.js";import"./useFocusable-DsXmOaAq.js";import"./OverlayArrow-DqBJvRH_.js";import"./useControlledState-Bp8O9Zqw.js";import"./Collection-D_0q5y9E.js";import"./CollectionBuilder-DVFPK5dr.js";import"./SelectionIndicator-MBj-w85S.js";import"./Separator-CN6eRPM4.js";import"./SelectionManager-Dh2FxkL1.js";import"./useEvent-UzzlN-16.js";import"./useCollator-DnWD9muh.js";import"./FocusScope-uhT9mVfL.js";import"./VisuallyHidden-DQ4qIwkH.js";import"./ButtonView-BFvaDy1U.js";import"./Flex-DMIA7a_N.js";import"./useRef-Bngm3SGC.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BvWYHMvE.js";import"./getActionGroupSlot-BdFM70uG.js";import"./Markdown-DumXodI_.js";import"./CodeBlock-CyC1rgKL.js";import"./CopyButton-CPie9VpD.js";import"./Tooltip-Cn4nFX1Z.js";import"./react-children-utilities-BRkHxvnD.js";import"./InlineCode-Do7_PVwx.js";import"./Link-CC9mDZZh.js";import"./Separator-C7bqjogf.js";import"./TextArea-B1wO0rIB.js";import"./useFieldComponent-y-VnQdYS.js";import"./useControlledHostValueProps-Ch3Pmn36.js";import"./FieldDescription-1iFVSl7S.js";import"./TextField-CJFAhKLP.js";import"./FieldError-CUXp9-J-.js";import"./Form-CkFb-Mj9.js";import"./Group-fZwN4R35.js";import"./Input-BNOgaKSE.js";import"./useTextField-CR83D2he.js";import"./useFormReset-7ZGeCzym.js";import"./useFormValidation-CsmzuQo6.js";import"./AlertText-Btk8Ksd_.js";import"./AlertIcon-BrGMsY0L.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),eo={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=p({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
