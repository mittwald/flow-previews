import{r as F,j as r}from"./iframe-CCG9iH9q.js";import{a as n,u as p,F as a,R as u,S as l,t as S}from"./ResetButton-BqZNOOe-.js";import{B as d}from"./Button-DszeRQWk.js";import{S as x}from"./Section-DbhTGHPe.js";import{A as E}from"./ActionGroup-CqC9K9e5.js";import{s as c}from"./ActionBatch-BwDlid4r.js";import{S as s}from"./Switch-D1g_IMfz.js";import{F as j}from"./FieldError-C6WCZxmP.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DVtvH1qO.js";import"./flowComponent-DtMp-09u.js";import"./index-rcZGBqb0.js";import"./clsx-B-dksMZM.js";import"./index-DO8RY2JU.js";import"./useLocalizedStringFormatter-BayblNF2.js";import"./context-BOE3Zx9s.js";import"./ActionGroupView-BUNvX8yC.js";import"./Content-CtXh-1sB.js";import"./Heading-DiIAAbeS.js";import"./Heading-DVHr5WNM.js";import"./RSPContexts-Cj7-Wn-7.js";import"./utils-BqjYSsY0.js";import"./Text-CqiRKP9V.js";import"./browser-DlPLk6Tx.js";import"./EmulatedBoldText-DGQ67tbz.js";import"./Text-CsZp0s5y.js";import"./Modal-CIlySsMs.js";import"./useOverlayController-B8ExGaeg.js";import"./useStatic-DZaf9Eli.js";import"./Overlay-Bt-WcI45.js";import"./OverlayContextProvider-CJwB4ZlW.js";import"./LoadingSpinner-GybBfiLr.js";import"./IconWarning-CKuAFgzi.js";import"./remote-BNVNDlip.js";import"./Dialog-Bvzkt_Dq.js";import"./Button-BmDLEeLi.js";import"./ProgressBar-NeUI6tVT.js";import"./Label-Bqehi3yR.js";import"./Hidden-DP_c1-uJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CWkbOtE9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C9nCYq1D.js";import"./useFocus-DQtiJNjW.js";import"./useFocusRing-DEew3vp8.js";import"./useFocusable-C9iBP5e4.js";import"./OverlayArrow-O5F9zlGE.js";import"./useControlledState-DQCduMNG.js";import"./Collection-BppDt4cQ.js";import"./CollectionBuilder--dOyJv1i.js";import"./SelectionIndicator-CG-R7p16.js";import"./Separator-IezdCtOl.js";import"./SelectionManager-BQan4uct.js";import"./useEvent-CqAdQvXR.js";import"./useCollator-C1I9ImG_.js";import"./FocusScope-CGp51FRM.js";import"./VisuallyHidden-B8BDvwZm.js";import"./ButtonView-C8fOFLKK.js";import"./Flex-CGGRYbEQ.js";import"./useRef-BKrfCYqa.js";import"./ContextMenuSection-DkVhFe3O.js";import"./getActionGroupSlot-ZV4GNxDq.js";import"./useFieldComponent-BO1aRG8J.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-z_9ikDBl.js";import"./useFormReset-DOloisqU.js";import"./FieldError-IbwLA4qq.js";import"./AlertText-BBv4eV07.js";import"./AlertIcon-BWG972Pn.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Gr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field1</Switch>
        </Field>
        <Switch>
          Field2
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Switch>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field</Switch>
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
}`,...m.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,m as WithFocus,Hr as __namedExportsOrder,Gr as default};
