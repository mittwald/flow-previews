import{j as r,r as x}from"./iframe-DjQX0xu7.js";import{c as l,u as a,F as c,t as j}from"./Form-CyljT57u.js";import{L as s}from"./Label-DwpG6CHQ.js";import{R as p,S as d}from"./ResetButton-DgCPLW6j.js";import{B as t}from"./Button-BzgEBlcG.js";import{S,s as u}from"./Section-Cz82PiQz.js";import{A as b}from"./ActionGroup-BSKw1FYv.js";import{s as m,F as B}from"./Modal-BBNlMVze.js";import"./index-nuYtCEEu.js";import"./dynamic-22J8cjb3.js";import"./flowComponent-JYU8T0At.js";import"./index-Cs3FvKNT.js";import"./clsx-B-dksMZM.js";import"./index-C69E--h5.js";import"./useLocalizedStringFormatter-DeqRUlGI.js";import"./context-D5QUCTp7.js";import"./browser-BHlZuLqI.js";import"./utils-C30iJzW5.js";import"./ProgressBar-CCJkQYvg.js";import"./Hidden-DiDVenMv.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BuswXrVR.js";import"./Text-CBF9Mq5x.js";import"./EmulatedBoldText-C8hbjTYh.js";import"./LoadingSpinner-CySWmfRx.js";import"./Button-BjLxB9ET.js";import"./useFocusRing-UFpAQC1c.js";import"./useFocusable-DfpRXFuB.js";import"./context-B6Z8BqUC.js";import"./RSPContexts-DSRMecLI.js";import"./Collection-9mWjKSNJ.js";import"./CollectionBuilder-DGVbcN1s.js";import"./SelectionIndicator-BCys4Qq1.js";import"./Separator-B8K4J-Om.js";import"./useStatic-QbJcOryG.js";import"./FileCardList-DoyIp-u1.js";import"./Avatar-CD-JtxxQ.js";import"./AlertIcon-BUEZz4zv.js";import"./Image-BrUNo-p1.js";import"./Link-CkG0aVzf.js";import"./ControlledNotification-BMFbIoKB.js";import"./Flex-Rh0qQGjv.js";import"./Accordion-cPVhBb9_.js";import"./Alert-DEAo5TA3.js";import"./AlertBadge-CjbbHl0v.js";import"./Align-BIiffU6n.js";import"./AvatarStack-CWGa8hd6.js";import"./BigNumber-D2hG44RZ.js";import"./Breadcrumb-Cv5Q03Ns.js";import"./Heading-Ek-NbzZ5.js";import"./Legend-IlVWPDZR.js";import"./Color-Cv9cJ5fh.js";import"./TableFooterRow-CtfTvciP.js";import"./SkeletonText-CuL7hCDf.js";import"./Content-C8r-jMKP.js";import"./CounterBadge-Cln_B5dZ.js";import"./DonutChart-CeYVkmS5.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CDOd4Rmd.js";import"./Header-D6EurdOg.js";import"./Initials-CZh9PsXN.js";import"./InlineCode-D-2oy3Ir.js";import"./LayoutCard-F3d117j-.js";import"./Separator-DfIOpBez.js";import"./MessageSeparator-BtlLyxAF.js";import"./NavigationGroup-BlAMWir7.js";import"./Notification-3EcIdYeY.js";import"./NotificationProvider-jYqbFyZ7.js";import"./ProgressBar-O_f2my1S.js";import"./Rating-5sVy98qX.js";import"./Skeleton-jyWQALH6.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Gr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
        </Field>
        <FileField multiple isInvalid>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </FileField>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
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
}`,...n.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Hr as __namedExportsOrder,Gr as default};
