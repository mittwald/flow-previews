import{j as r,r as x}from"./iframe-BIOR2-hs.js";import{b as l,u as a,F as c,t as j}from"./Form-DmAReG0K.js";import{L as s}from"./Label-BLkwK3Kt.js";import{R as u,S as d}from"./ResetButton-DZ7gY5XE.js";import{B as t}from"./Button-CfZ-AQyp.js";import{S,s as p}from"./Section-BqNRxlPT.js";import{A as b}from"./ActionGroup-CY4j-L1M.js";import{q as m,g as B}from"./TimeField-DsDqWsQ-.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BVxG6scv.js";import"./PropsContextProvider-RMvdN3RZ.js";import"./mergeRefs-U5WlywcK.js";import"./index-k9AOzptS.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BKbYN9ME.js";import"./context-BLOg-x3I.js";import"./browser-D0ITs1ti.js";import"./utils-DsOUUUiG.js";import"./ProgressBar-_rI0OtV6.js";import"./Hidden-CVR9fNcA.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DZ71cvXF.js";import"./remote-CjhnXpnY.js";import"./Text-DusIDTsD.js";import"./EmulatedBoldText-Wg5Zh9Cq.js";import"./LoadingSpinner-CKTuHmBU.js";import"./Button-Vr3ctEdr.js";import"./useFocusRing-1hKsP8MW.js";import"./useFocusable-B_nx0oid.js";import"./context-CUEzUKrh.js";import"./RSPContexts-DcPCJIF5.js";import"./Collection-Cvuk07Q7.js";import"./CollectionBuilder-Dgt7X-YC.js";import"./SelectionIndicator-DG9tWISV.js";import"./Separator-DTwWIU6f.js";import"./useStatic-CRF1h1Jc.js";import"./Accordion-NoXfJmUE.js";import"./Alert-CoZzyuQ9.js";import"./AlertIcon-BvUo9Etu.js";import"./AlertBadge-DCY0z1jh.js";import"./Align-C8XIH-7n.js";import"./Popover-BGEckYFs.js";import"./OverlayTrigger-4gUv_Eql.js";import"./TableFooterRow-BUV2_OgU.js";import"./SkeletonText-DYOjw4oF.js";import"./Avatar-BUQx2CI1.js";import"./AvatarStack-Xz4hqYuD.js";import"./Badge-Cr-ClmAO.js";import"./BigNumber-L7ZWV3y6.js";import"./Breadcrumb-qAQdTaCx.js";import"./Link-DoJ4IPEN.js";import"./Heading-Cv__lUFC.js";import"./Legend-ZeqB-YKM.js";import"./FileCardList-C94A5o8Z.js";import"./Image-DwW9X8dg.js";import"./Color-CnqARC2o.js";import"./Content-BrpitEoE.js";import"./ContextualHelpTrigger-BXnzR8Ux.js";import"./CounterBadge-BfId8Yot.js";import"./DonutChart-C8wwiAZA.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-8GDMUcKQ.js";import"./Header-CRVpFWgA.js";import"./Initials-D4NqoMu-.js";import"./InlineCode-DaFFs495.js";import"./PopoverTrigger-BXV6g6Jr.js";import"./Separator-BAa6viOO.js";import"./Message-DKDXC3NB.js";import"./MessageSeparator-CGyHmQ4m.js";import"./NavigationGroup-D7bLGYP0.js";import"./Notification-D2xjz265.js";import"./NotificationProvider-XOHGZ29Q.js";import"./ProgressBar-B6DJTl7K.js";import"./Rating-UOf7auGu.js";import"./Skeleton-BNldNKri.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Nr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await p(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Ur as __namedExportsOrder,Nr as default};
