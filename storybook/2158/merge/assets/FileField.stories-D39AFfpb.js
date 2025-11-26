import{j as r,r as x}from"./iframe-BULoVSu-.js";import{b as l,u as a,F as c,t as j}from"./Form-BHs9YWf-.js";import{L as s}from"./Label-DWCkXaJt.js";import{R as u,S as d}from"./ResetButton-DLtgrkVV.js";import{B as t}from"./Button-DvOPlqIW.js";import{S,s as p}from"./Section-dZ6T0Qjb.js";import{A as b}from"./ActionGroup-CdzBskC5.js";import{q as m,g as B}from"./TimeField-1hPaxYRS.js";import"./index-nuYtCEEu.js";import"./dynamic-D5pGRiRC.js";import"./PropsContextProvider-BPIZn01x.js";import"./mergeRefs-CEsjPslJ.js";import"./index-DQ_hsp85.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CNoz61n8.js";import"./context-BQ6yD6Hs.js";import"./browser-CQOPH7Oy.js";import"./utils-BZ7EFgdg.js";import"./ProgressBar-CiVynXjH.js";import"./Hidden-C5LzDjRJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DrICVJv-.js";import"./Text-Bg3HcGTD.js";import"./EmulatedBoldText-CVrOLZNg.js";import"./LoadingSpinner-BfUy7fQr.js";import"./Button-DWJqXgIw.js";import"./useFocusRing-qHICYkG6.js";import"./useFocusable-BJ4RiU3A.js";import"./context-DrExWdfs.js";import"./RSPContexts-DiGug6wA.js";import"./Collection-BGk_QoAN.js";import"./CollectionBuilder-CYT9SihX.js";import"./SelectionIndicator-DElX2Ml7.js";import"./Separator-CFtgJiRb.js";import"./useStatic-Dyq_KzQP.js";import"./Accordion-8FTg--rA.js";import"./Alert-DYZY0TL2.js";import"./AlertIcon-BlR5z9QA.js";import"./AlertBadge-DH8Oxe-N.js";import"./Align-B4QMXwt_.js";import"./Popover-CjClCujz.js";import"./OverlayTrigger-vU2Qjf7N.js";import"./TableFooterRow-BPCO49YC.js";import"./SkeletonText-BTeejoSt.js";import"./Avatar-BfIiybJY.js";import"./AvatarStack-BxKBxtVU.js";import"./Badge-CAMn07m4.js";import"./BigNumber-rg1cxAc2.js";import"./Breadcrumb-CYVN-SjU.js";import"./Link-KCtn6aUA.js";import"./Heading-Ds4iBrHb.js";import"./Legend-DReYAr9-.js";import"./FileCardList-CKSx-0eT.js";import"./Image-DNEKXGy_.js";import"./Color-DizN4J9h.js";import"./Content-DA44jWO0.js";import"./ContextualHelpTrigger-Cq74vnwF.js";import"./CounterBadge-DqN2lUJ6.js";import"./DonutChart-ByHy_tf4.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BPxmEpFw.js";import"./Header-C-kaAsvR.js";import"./Initials-DzoATSJF.js";import"./InlineCode-CLVrphJo.js";import"./PopoverTrigger-CK-Br2ii.js";import"./Separator-D_J1GVIS.js";import"./Message-Cj4eSaLV.js";import"./MessageSeparator-BKcuFd8P.js";import"./NavigationGroup-BLC2he0l.js";import"./Notification-CPfWjlNe.js";import"./NotificationProvider-CF_1VnvW.js";import"./ProgressBar-C-I_U1Y0.js";import"./Rating-dHI8nJ9_.js";import"./Skeleton-ZxO1W6TI.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Mr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await p(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Nr as __namedExportsOrder,Mr as default};
