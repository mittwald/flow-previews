import{r as x,j as r}from"./iframe-CCG9iH9q.js";import{a as n,u as p,F as a,R as u,S as c,t as E}from"./ResetButton-BqZNOOe-.js";import{L as m}from"./Label-ZsZ9_LuX.js";import{B as l}from"./Button-DszeRQWk.js";import{S as j}from"./Section-DbhTGHPe.js";import{A as b}from"./ActionGroup-CqC9K9e5.js";import{s as d}from"./ActionBatch-BwDlid4r.js";import{M as s}from"./MarkdownEditor-BTk_OeNV.js";import{F as g}from"./FieldError-C6WCZxmP.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DVtvH1qO.js";import"./flowComponent-DtMp-09u.js";import"./index-rcZGBqb0.js";import"./clsx-B-dksMZM.js";import"./index-DO8RY2JU.js";import"./useLocalizedStringFormatter-BayblNF2.js";import"./context-BOE3Zx9s.js";import"./ActionGroupView-BUNvX8yC.js";import"./Content-CtXh-1sB.js";import"./Heading-DiIAAbeS.js";import"./Heading-DVHr5WNM.js";import"./RSPContexts-Cj7-Wn-7.js";import"./utils-BqjYSsY0.js";import"./Text-CqiRKP9V.js";import"./browser-DlPLk6Tx.js";import"./EmulatedBoldText-DGQ67tbz.js";import"./Text-CsZp0s5y.js";import"./Modal-CIlySsMs.js";import"./useOverlayController-B8ExGaeg.js";import"./useStatic-DZaf9Eli.js";import"./Overlay-Bt-WcI45.js";import"./OverlayContextProvider-CJwB4ZlW.js";import"./LoadingSpinner-GybBfiLr.js";import"./IconWarning-CKuAFgzi.js";import"./remote-BNVNDlip.js";import"./Dialog-Bvzkt_Dq.js";import"./Button-BmDLEeLi.js";import"./ProgressBar-NeUI6tVT.js";import"./Label-Bqehi3yR.js";import"./Hidden-DP_c1-uJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CWkbOtE9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C9nCYq1D.js";import"./useFocus-DQtiJNjW.js";import"./useFocusRing-DEew3vp8.js";import"./useFocusable-C9iBP5e4.js";import"./OverlayArrow-O5F9zlGE.js";import"./useControlledState-DQCduMNG.js";import"./Collection-BppDt4cQ.js";import"./CollectionBuilder--dOyJv1i.js";import"./SelectionIndicator-CG-R7p16.js";import"./Separator-IezdCtOl.js";import"./SelectionManager-BQan4uct.js";import"./useEvent-CqAdQvXR.js";import"./useCollator-C1I9ImG_.js";import"./FocusScope-CGp51FRM.js";import"./VisuallyHidden-B8BDvwZm.js";import"./ButtonView-C8fOFLKK.js";import"./Flex-CGGRYbEQ.js";import"./useRef-BKrfCYqa.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DkVhFe3O.js";import"./getActionGroupSlot-ZV4GNxDq.js";import"./Markdown-_GU9Tt7e.js";import"./CodeBlock-C8uxu__z.js";import"./CopyButton-otI5Rga2.js";import"./Tooltip-DcbpHxFv.js";import"./react-children-utilities-0W3aq1f7.js";import"./InlineCode-qHj-ECST.js";import"./Link-TVNorRgK.js";import"./Separator-CiDYF3ZY.js";import"./TextArea-Clo9__kx.js";import"./useFieldComponent-BO1aRG8J.js";import"./useControlledHostValueProps-C1I4WMgS.js";import"./FieldDescription-CUhsst8_.js";import"./TextField-CvZXl8ia.js";import"./FieldError-IbwLA4qq.js";import"./Form-CaeCkx3f.js";import"./Group-BkubaCeK.js";import"./Input-mPx5hz5Z.js";import"./useTextField-CqMkN_4n.js";import"./useFormReset-DOloisqU.js";import"./useFormValidation-Jbp24I-0.js";import"./AlertText-BBv4eV07.js";import"./AlertIcon-BWG972Pn.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),eo={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=p({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
