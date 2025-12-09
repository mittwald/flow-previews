import{j as r,r as f}from"./iframe-GdgkclWs.js";import{b as a,u as p,F as d,t as j}from"./Form-CAPGQYFw.js";import{L as t}from"./Label-ChEMpQPE.js";import{R as u,S as F}from"./ResetButton-CSKvvOZv.js";import{B as l}from"./Button-B0JEmBNK.js";import{S as b,s as c}from"./Section-VLscJ2rL.js";import{A as E}from"./ActionGroup-C82CNpK6.js";import{as as S,ar as o,g as T}from"./TimeField-CVigSgag.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-PnYMfd4f.js";import"./PropsContextProvider-CVn6a-Br.js";import"./mergeRefs-CirupE_e.js";import"./index-BpewjHzz.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BYse3rRW.js";import"./context-G4rNg2r5.js";import"./browser-CClwHdx_.js";import"./utils-DoU55v00.js";import"./ProgressBar-BByvzxb3.js";import"./Hidden-DfAtz4Rp.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CGOSGhfQ.js";import"./Text-Cto25n51.js";import"./EmulatedBoldText-Ddlneh35.js";import"./LoadingSpinner-ChMWC-CB.js";import"./Button-9ssRHwLo.js";import"./useFocusRing-FWhz3ffE.js";import"./useFocusable-CGBhab3M.js";import"./context-C_Ye8hEJ.js";import"./RSPContexts-Ih3Q_XqN.js";import"./Collection-DiuPOFRO.js";import"./CollectionBuilder-D0v6CoH5.js";import"./SelectionIndicator-CLOzYwLf.js";import"./Separator-DBBWSXz5.js";import"./useStatic-CV3hAC_1.js";import"./Accordion-CIHbFerH.js";import"./Alert-Ghfdqzqq.js";import"./AlertIcon-BHK-Daud.js";import"./AlertBadge-B0j6vp5K.js";import"./Align-D7FVyJEv.js";import"./Popover-DCEEmw0P.js";import"./OverlayTrigger-FDfyad1h.js";import"./TableFooterRow-DkhcovOF.js";import"./SkeletonText-BC3QvNYs.js";import"./Avatar-BdEExudS.js";import"./AvatarStack-D83q2IaA.js";import"./Badge-CULYHS4O.js";import"./BigNumber-CQ1o5YVg.js";import"./Breadcrumb-Bmgceg6h.js";import"./Link-D6Y7USyN.js";import"./Heading-C8_gRcPp.js";import"./Legend-814CjWqc.js";import"./FileCardList-u01e7SGm.js";import"./Image-DvuZYehV.js";import"./Color-C5h7DqqR.js";import"./Content-JCMb0S3J.js";import"./ContextualHelpTrigger-xDG4yDFQ.js";import"./CounterBadge-gaV0X7ON.js";import"./DonutChart-DGD5BRbv.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Dt1P96u5.js";import"./Header-Dg8MvpqU.js";import"./Initials-5h9DQSHl.js";import"./InlineCode-B9Q3OiFc.js";import"./PopoverTrigger-BDzk5u7s.js";import"./Separator-i6qBYsms.js";import"./Message-CeGAy6Zn.js";import"./MessageSeparator-CRScGEmn.js";import"./NavigationGroup-CdsshAOA.js";import"./Notification-B5P2NapB.js";import"./NotificationProvider-DTKoqy3M.js";import"./ProgressBar-8ZDZDqcE.js";import"./Rating-BSkiv03r.js";import"./Skeleton-CcRzeFAV.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,B=g("submit"),Mr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async x=>{await c(1500),B(x)},h=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Nr as __namedExportsOrder,Mr as default};
