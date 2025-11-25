import{j as r,r as f}from"./iframe-DjQX0xu7.js";import{c as a,u as p,F as c,t as j}from"./Form-CyljT57u.js";import{L as t}from"./Label-DwpG6CHQ.js";import{R as u,S as F}from"./ResetButton-DgCPLW6j.js";import{B as l}from"./Button-BzgEBlcG.js";import{S as b,s as d}from"./Section-Cz82PiQz.js";import{A as E}from"./ActionGroup-BSKw1FYv.js";import{aw as S,av as o,F as T}from"./Modal-BBNlMVze.js";import"./index-nuYtCEEu.js";import"./dynamic-22J8cjb3.js";import"./flowComponent-JYU8T0At.js";import"./index-Cs3FvKNT.js";import"./clsx-B-dksMZM.js";import"./index-C69E--h5.js";import"./useLocalizedStringFormatter-DeqRUlGI.js";import"./context-D5QUCTp7.js";import"./browser-BHlZuLqI.js";import"./utils-C30iJzW5.js";import"./ProgressBar-CCJkQYvg.js";import"./Hidden-DiDVenMv.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BuswXrVR.js";import"./Text-CBF9Mq5x.js";import"./EmulatedBoldText-C8hbjTYh.js";import"./LoadingSpinner-CySWmfRx.js";import"./Button-BjLxB9ET.js";import"./useFocusRing-UFpAQC1c.js";import"./useFocusable-DfpRXFuB.js";import"./context-B6Z8BqUC.js";import"./RSPContexts-DSRMecLI.js";import"./Collection-9mWjKSNJ.js";import"./CollectionBuilder-DGVbcN1s.js";import"./SelectionIndicator-BCys4Qq1.js";import"./Separator-B8K4J-Om.js";import"./useStatic-QbJcOryG.js";import"./FileCardList-DoyIp-u1.js";import"./Avatar-CD-JtxxQ.js";import"./AlertIcon-BUEZz4zv.js";import"./Image-BrUNo-p1.js";import"./Link-CkG0aVzf.js";import"./ControlledNotification-BMFbIoKB.js";import"./Flex-Rh0qQGjv.js";import"./Accordion-cPVhBb9_.js";import"./Alert-DEAo5TA3.js";import"./AlertBadge-CjbbHl0v.js";import"./Align-BIiffU6n.js";import"./AvatarStack-CWGa8hd6.js";import"./BigNumber-D2hG44RZ.js";import"./Breadcrumb-Cv5Q03Ns.js";import"./Heading-Ek-NbzZ5.js";import"./Legend-IlVWPDZR.js";import"./Color-Cv9cJ5fh.js";import"./TableFooterRow-CtfTvciP.js";import"./SkeletonText-CuL7hCDf.js";import"./Content-C8r-jMKP.js";import"./CounterBadge-Cln_B5dZ.js";import"./DonutChart-CeYVkmS5.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CDOd4Rmd.js";import"./Header-D6EurdOg.js";import"./Initials-CZh9PsXN.js";import"./InlineCode-D-2oy3Ir.js";import"./LayoutCard-F3d117j-.js";import"./Separator-DfIOpBez.js";import"./MessageSeparator-BtlLyxAF.js";import"./NavigationGroup-BlAMWir7.js";import"./Notification-3EcIdYeY.js";import"./NotificationProvider-jYqbFyZ7.js";import"./ProgressBar-O_f2my1S.js";import"./Rating-5sVy98qX.js";import"./Skeleton-jyWQALH6.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Gr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async x=>{await d(1500),g(x)},h=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(c,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Hr as __namedExportsOrder,Gr as default};
